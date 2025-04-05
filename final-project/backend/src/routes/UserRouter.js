import express from 'express'
import { ragistareUser } from '../controlleres/ragistareUser.controlleres.js';
import { logoutUser } from '../controlleres/logOut.js'
import { loginUser } from '../controlleres/login.controller.js';
import { upload } from '../middlewares/malter.js';
import { updateUserAvatar } from '../controlleres/Avatar.js'
import { verifyJWT } from '../middlewares/logout.middlerwares.js';
import { UserData } from '../controlleres/UserData.js';
import { AddCardUrl, DeletCardUrl } from '../controlleres/service/AddCard.controllers.js';
import { GateCardUrl } from '../controlleres/service/GatCard.controllers copy.js';
import { exciteUser } from '../controlleres/login.controller.js';
// import { updateUserAvatar } from '../controlleres/Avatar.js';
import { updateAccountDetails } from '../controlleres/service/AddCard.controllers.js';
import { updateUserCaverImg } from '../controlleres/Avatar.js';

import { ProductCardUrl } from '../controlleres/product.controler/ProductAddCard.controllers.js'
import { ProductDeletCardUrl } from '../controlleres/product.controler/ProductAddCard.controllers.js'
import { GateProductCurrentData } from '../controlleres/product.controler/ProductAddCard.controllers.js'



const UserRouter = express()

UserRouter.route("/ragistareUser").post(ragistareUser);
UserRouter.route("/loginUser/:email/:password").get(loginUser)
UserRouter.route("/logoutUser").post(verifyJWT, logoutUser)
UserRouter.route("/UserDataPass").get(verifyJWT, UserData)
UserRouter.route("/avatar").patch(verifyJWT, upload.single("image"), updateUserAvatar)
UserRouter.route("/CaverImg").patch(verifyJWT, upload.single("CoverImg"), updateUserCaverImg)
UserRouter.route("/AddCardUrl").post(verifyJWT, AddCardUrl)
UserRouter.route("/deletCard").delete(verifyJWT, DeletCardUrl)
UserRouter.route("/AddCard").get(verifyJWT, GateCardUrl)
UserRouter.route("/update").post(verifyJWT, updateAccountDetails)
UserRouter.route("/exciteUser").get(exciteUser)
//product
UserRouter.route("/ProductCardUrl").post(verifyJWT, ProductCardUrl)
UserRouter.route("/ProductdeletCard").delete(verifyJWT, ProductDeletCardUrl)
UserRouter.route("/ProductCurrentData").get(verifyJWT, GateProductCurrentData)




export default UserRouter