import mongoose, { Schema } from "mongoose";

const AddToCardModels = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
)


export const AddToCard = mongoose.model("AddToCard", AddToCardModels)