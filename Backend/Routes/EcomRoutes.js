import express from "express";
import ECommerce from "../models/Ecommerce.js";
import redisClient from "../models/redisClient.js";
const router = express.Router();

//Create Data
router.post("/", async (req, res) => {
  try {
    const commerce = new ECommerce(req.body);
    await commerce.save();
    res.status(201).json(commerce);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Read Data
router.get("/", async (req, res) => {
  try {
    const cacheKey = "products:all";
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data from cache");
      return res.status(200).json(JSON.parse(cachedData));
    }

    const commerce = await ECommerce.find();
    await redisClient.setEx(cacheKey, 60, JSON.stringify(commerce));
    res.status(200).json(commerce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ECommerce.findById(id);
    const cacheKey = `products:${id}`;

    const cachedProduct = await redisClient.get(cacheKey);
    if (cachedProduct) {
      console.log("Serving product from cache...");
      return res.status(200).json(JSON.parse(cachedProduct));
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await redisClient.setEx(cacheKey, 60, JSON.stringify(product)); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Data
router.put("/:id", async (req, res) => {
  try {
    const commerce = await ECommerce.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(commerce);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete Data
router.delete("/:id", async (req, res) => {
  try {
    const commerce = await ECommerce.findByIdAndDelete(req.params.id);
    res.status(200).json(commerce);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
