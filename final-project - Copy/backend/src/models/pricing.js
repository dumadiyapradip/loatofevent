import mongoose, { Schema } from "mongoose";


const pricingSchema = new Schema({
    PricingFirstSlide: [
        {
            key: String,
            datas: String
        }
    ],
    PricingSecondSlide: [
        {
            key: String,
            datas: String
        }
    ],
    PricingThirdSlide: [
        {
            key: String,
            datas: String
        }
    ],
    TwoImgSlide: [
        {
            SubImg: String,
            SubImg: String
        }
    ],
    OneImgSlide: [
        {
            SubImg: String,
            SubImg: String
        }
    ],

})


export const PricingSchema = mongoose.model("PricingSchema", pricingSchema)