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
    email: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    socmed: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    paymentMethod: {
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: RESOURCE.PAYMENTS
    },
    delivery: {
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: RESOURCE.DELIVERIES
    },
    deleted: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model(RESOURCE.RENTS, schema);
