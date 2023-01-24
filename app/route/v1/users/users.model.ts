import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.USERS, schema);
