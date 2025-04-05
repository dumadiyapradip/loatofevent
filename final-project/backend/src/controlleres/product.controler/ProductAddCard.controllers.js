import express from 'express'
import { User } from '../../models/user.models.js';
import { ApiError } from '../../utility/ApiError.js';
import { ApiResponse } from '../../utility/ApiResponse.js';
import { asyncHandler } from '../../utility/asyncHandler.js';

const ProductCardUrl = async (req, res) => {
    const productId = req.body.data;
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $push: {
                ProductAddToCard:
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



const ProductDeletCardUrl = async (req, res) => {
    const productId = req.body.data;
    const userId = req.user?._id
    console.log("productId pass", productId)

    try {
        // Find the user and remove the product from AddToCard array by its _id
        const user = await User.findByIdAndUpdate(
            userId,
            {
                $pull: { ProductAddToCard: { _id: productId } },  // Remove product by its _id
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


const GateProductCurrentData = async (req, res) => {
    const user = await User.find(
        req.user?._id,
        {}).select("-password -refreshToken -avatar -email -username -AddToCard")
    res.json(
        new ApiResponse(200, user, "Gat image updated successfully")
    )
}


export { ProductCardUrl, ProductDeletCardUrl, GateProductCurrentData }
