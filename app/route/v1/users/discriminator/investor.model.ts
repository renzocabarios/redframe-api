import mongoose from "mongoose";
import users from '../users.model'
import { RESOURCE } from "../../../../constant";

const options = {
    discriminatorKey: 'type',
    timeStamps: true
};

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    cameras: {
        type: [],
        default: true
    },
}, options);

export default users.discriminator(RESOURCE.USERS.INVESTOR, schema);
