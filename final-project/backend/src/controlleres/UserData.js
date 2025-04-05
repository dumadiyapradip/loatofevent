import { User } from "../models/user.models.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import dotenv from 'dotenv'
import { ApiResponse } from '../utility/ApiResponse.js'

dotenv.config();

const UserData = asyncHandler(async (req, res) => {
    const userDataPass = await User.findByIdAndUpdate(
        req.user._id,
    )
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: userDataPass,
                },
                "User logged In Successfully pass"
            )
        )
})

export { UserData }


