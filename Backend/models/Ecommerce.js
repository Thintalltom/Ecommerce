import mongoose from "mongoose";

const commerceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true}
});

export default mongoose.model("ECommerce", commerceSchema);