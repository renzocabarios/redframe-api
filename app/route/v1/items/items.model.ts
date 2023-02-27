import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0.00
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.ITEMS, schema);
