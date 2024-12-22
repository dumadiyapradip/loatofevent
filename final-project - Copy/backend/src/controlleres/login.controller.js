import { User } from "../models/user.models.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import dotenv from 'dotenv'
import { ApiResponse } from '../utility/ApiResponse.js'
import { genererateAccessToconeAndOtherTocan } from '../auth/authUser.js'
import jwt from "jsonwebtoken"

dotenv.config();

const loginUser = asyncHandler(async (req, res) => {
    const email = req.params.email
    const password = req.params.password
    if (
        !email ||
        !password
    ) {
        return res.json({
            status: "pending"
        });
    }

    const user = await User.findOne({
        email: email
    })
    if (!user) return res.status(200).json({ mes: "not a registere" })
    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
      
        res
            .status(200)
            .json({ mes: "password was increct plece try agen" })
        return res.send("password inccorect");
    }
    const { accessToken, refreshToken } = await genererateAccessToconeAndOtherTocan(user._id)

    const loggedInUser = await User.findOne({
        email: email
    }).select("-password -refreshToken")
    const option = {
        httpOnly: true,
        secure: true
    }
    return res
        .status(200)
        .cookie("refareshToken", refreshToken, option)
        .cookie("acceshToken", accessToken, option)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )
})
const exciteUser = asyncHandler(async (req, res) => {
    const token = req.cookies.acceshToken
    if (!token) {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        login: false
                    },
                    "User logged In Successfully"
                )
            )
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    if (!user) {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        login: false
                    },
                    "User logged In Successfully"
                )
            )
    }
    req.user = user

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    login: true
                },
                "User logged In Successfully"
            )
        )
})
export { loginUser, exciteUser }


