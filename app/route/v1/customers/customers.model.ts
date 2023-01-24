import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.CUSTOMERS, schema);
