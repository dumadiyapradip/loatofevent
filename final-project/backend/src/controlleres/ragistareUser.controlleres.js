import { User } from "../models/user.models.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { ApiError } from "../utility/ApiError.js";


const ragistareUser = asyncHandler(async (req, res) => {
    const body = req.body
    if (
        !body ||
        !body.username ||
        !body.email ||
        !body.password) {
        return res.json({
            status: "pending"
        });
    }

    const email = body.email
    const password = body.password
    // if (
    //     [email, password].some((field) => field?.trim() === "")
    // ) {
    //     throw new ApiError(400, "All fields are required")
    // }
    if (
        !email ||
        !password
    ) {
        return res.json({
            status: "pending"
        });
    }
    const existedUser = await User.findOne({
        email
    })
    console.log("existedUser", existedUser)

    if (existedUser) {
        // throw new ApiError(409, "User with email or username already exists")
        res
            .status(200)
            .json({ mes: "User with email or username already exists" })
    }
    const result = await User.create({
        username: body.username.toLowerCase(),
        email: body.email,
        password: body.password,
        address: "India",
        coverImage: "http://res.cloudinary.com/dguqlw9yp/image/upload/v1734145471/avgdhmnvtby1decaiiaa.jpg",
        avatar: "https://res.cloudinary.com/dguqlw9yp/image/upload/v1734145470/cmrob209dq0layhdzdiw.png"
    });
  
    return res.status(200).json({ mes: "successfull data fatch" })
})


export { ragistareUser }