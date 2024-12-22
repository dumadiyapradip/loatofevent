import { User } from "../models/user.models.js"
import jwt from "jsonwebtoken"



const genererateAccessToconeAndOtherTocan = async (userId) => {

    try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        console.log("reshre token", error)
    }
}
export {genererateAccessToconeAndOtherTocan}