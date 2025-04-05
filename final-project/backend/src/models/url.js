import mongoose from "mongoose";

const url = new mongoose.Schema({
    sortId: {
        type: String,
        require: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        require: true
    },
    visitHistory: {
        timestamps: {
            type: Number
        }
    }
}, { timestamps: true })

export const URL = mongoose.model("URL", url)