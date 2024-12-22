import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
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

export const ProductModels = mongoose.model("ProductModels", ProductSchema)