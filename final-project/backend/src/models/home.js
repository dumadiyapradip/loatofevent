import mongoose, { Schema } from "mongoose";

const HomeSchema = new Schema(
    {
        MianSlide: [
            {
                Img: String
            }
        ],
        MianProductInHome: [
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
        SubProductCollection: [
            {
                Img: String,
                Country: String,
                Contern: String,

            }
        ]
    }
)

export const HomeModel = mongoose.model("HomeModel", HomeSchema)