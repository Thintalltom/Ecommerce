import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'ECommerce', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        name: {type: String, required: true},
        image: {type: String, required: true}
    }],
    totalAmount: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model("Order", orderSchema);
// This schema defines the structure of an order document in MongoDB.