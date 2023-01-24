import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const schema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: RESOURCE.USERS.INVESTOR,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    rent: {
        type: Number,
        default: 0.00
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.CUSTOMERS, schema);
