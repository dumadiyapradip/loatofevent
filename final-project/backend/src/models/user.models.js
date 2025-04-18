import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String, //  unique username 
            required: true,
            unique: false,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String, //  unique email
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        avatar: {
            type: String, // cloudinary url
        },
        coverImage: {
            type: String, // cloudinary url
        },

        Address: {
            type: String, // Home Address 
        },
        AddToCard: //product 
            [
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
        ProductAddToCard: //product 
            [
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

        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)


