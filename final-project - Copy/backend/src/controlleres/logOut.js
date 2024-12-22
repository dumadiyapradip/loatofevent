import { User } from "../models/user.models.js"
import { asyncHandler } from "../utility/asyncHandler.js"
import { ApiResponse } from "../utility/ApiResponse.js"

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )
    const { name,name1 } = req.body;
    res.clearCookie(name);
    res.clearCookie(name1);
    res.status(200).json(new ApiResponse(200, {}, "User logged Out"))
})

export { logoutUser }

