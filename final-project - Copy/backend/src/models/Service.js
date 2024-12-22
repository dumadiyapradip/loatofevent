import mongoose, { Schema } from "mongoose";

const ServiseSchema = new Schema(
    {
        MianProductInServise: [
            {
                MianImg: String,
                OtherImg: [
                    {
                        SubImg: String
                    }
                ],
                Title: String,
                MainPrice: Number,
                SubPrice: Number,
                Contern: String
            }
        ],
    }
)

export const ServiseModel = mongoose.model("ServiseModel", ServiseSchema)