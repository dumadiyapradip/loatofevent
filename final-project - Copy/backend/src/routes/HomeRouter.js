import express from 'express'
import { HomeSlider } from '../controlleres/HomeControler/homeSlide.js';
import pricing from '../controlleres/Pricing/Priccing.js';
import { ServiseSlide } from '../controlleres/service/service.js';
import { refreshAccessToken } from '../controlleres/refreshTokenHandler.js';
import { verifyJWT } from '../middlewares/logout.middlerwares.js';
import { ProductSlide } from '../controlleres/product.controler/product.js'

const HomeRouter = express();

// HomeRouter.route("/Home").post(home)
HomeRouter.route("/HomeSlider").get(HomeSlider)
HomeRouter.route("/pricing").get(pricing)
HomeRouter.route("/ServiseSlide").get(ServiseSlide)
HomeRouter.route("/ProductSlide").get(ProductSlide)
HomeRouter.route("/refreshAccessToken").get(refreshAccessToken)

export default HomeRouter