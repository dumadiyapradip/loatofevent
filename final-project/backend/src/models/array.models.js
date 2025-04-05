import mongoose, { Schema } from "mongoose";

const Array = new Schema(
    {
        mainid: [
            { _id: String }
        ]
      
    }
)

export const ArrayModel = mongoose.model("ArrayModel", Array)