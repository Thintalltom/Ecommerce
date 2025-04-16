import express from "express";
import Order from "../models/Order.js";
import mongoose from "mongoose";
import Ecommerce from "../models/Ecommerce.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { products } = req.body;
  if (!products || products.length === 0) {
    return res.status(400).json({ message: "Products are required" });
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let totalAmount = 0;
    for (let product of products) {
      const productDoc = await Ecommerce.findById(product.productId).session(
        session
      );
      if (!productDoc) {
        throw new Error(`Product with ID ${product.productId} not found`);
      }
      if (productDoc.stock < product.quantity) {
        throw new Error(`Insufficient stock for product ${productDoc.name}`);
      }
      productDoc.stock -= product.quantity;
      totalAmount += productDoc.price * product.quantity;
      await productDoc.save();
    }
    const newOrder = new Order({
      products,
      totalAmount
    });

    await newOrder.save({ session });
    await session.commitTransaction();
    session.endSession();
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;