import express from "express";
import ECommerce from "../models/Ecommerce.js";
import cache from "memory-cache";
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
    const { category, price } = req.query;
    const filter = {};
    if (price) filter.category = category;
    if (price) filter.price = price;
    const cacheKey = "all_products";
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log(" Serving from memory-cache");
      return res.status(200).json(cachedData);
    }

    const commerce = await ECommerce.find();
    res.status(200).json(commerce);
    cache.put(cacheKey, commerce, 600000);
    console.log(" Serving from MongoDB and caching it");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ECommerce.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
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
