import { asyncHandler } from "../utility/asyncHandler.js"
import { ApiError } from "../utility/ApiError.js"
import { ApiResponse } from "../utility/ApiResponse.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utility/cloudinary.js"

const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path
    console.log("avatarLocalPath pass", avatarLocalPath)

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing")
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading on avatar")

    }
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url,

            }
        },
        { new: true }
    ).select("-password")
    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "Avatar image updated successfully")
        )
})

const updateUserCaverImg = asyncHandler(async (req, res) => {
    const CavarLocalPath = req.file?.path
   

    if (!CavarLocalPath) {
        throw new ApiError(400, "Cavar file is missing")
    }


    const CoverImg = await uploadOnCloudinary(CavarLocalPath)

    if (!CoverImg.url) {
        throw new ApiError(400, "Error while uploading on Cavar")

    }
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                // avatar: avatar.url,
                coverImage: CoverImg.url
            }
        },
        { new: true }
    ).select("-password")
    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "Cavar image updated successfully")
        )
})

export { updateUserAvatar, updateUserCaverImg }