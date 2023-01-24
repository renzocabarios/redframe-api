import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    baranggay: {
        type: String,
        required: true
    },
    block: {
        type: String
    },
    lot: {
        type: String
    },
    notes: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.LOCATIONS, schema);
