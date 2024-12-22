import express from 'express'
import { User } from '../../models/user.models.js';
import { ApiError } from '../../utility/ApiError.js';
import { ApiResponse } from '../../utility/ApiResponse.js';
import { asyncHandler } from '../../utility/asyncHandler.js';

const AddCardUrl = async (req, res) => {
    const productId = req.body.data;
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $push: {
                AddToCard:
                    [
                        {
                            MianImg: productId.MianImg,
                            OtherImg: productId.OtherImg,
                            Title: productId.Title,
                            MainPrice: productId.MainPrice,
                            SubPrice: productId.SubPrice,
                            Contern: productId.Contern
                        }
                    ]
            }

        }
    )

    res.json(
        new ApiResponse(200, "Add the service data successfully")
    )
}

const DeletCardUrl = async (req, res) => {
    const productId = req.body.data;
    const userId = req.user?._id
    console.log("productId pass", productId)

    try {
        // Find the user and remove the product from AddToCard array by its _id
        const user = await User.findByIdAndUpdate(
            userId,
            {
                $pull: { AddToCard: { _id: productId } },  // Remove product by its _id
            },
            { new: true }  // Return the updated document
        );
        if (user) {
            res.status(200).json({ message: 'Product removed from AddToCard', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error removing product', error });
    }
};

const updateAccountDetails = asyncHandler(async (req, res) => {
    const {
        username,
        Address
    } = req.body

    console.log("req.body",req.body)
    // if (!username || !Address) {
    //     throw new ApiError(400, "All fields are required")
    // }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                username,
                Address
            }
        },
        { new: true }
    ).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Account details updated successfully"))
});
export { AddCardUrl, DeletCardUrl, updateAccountDetails }
