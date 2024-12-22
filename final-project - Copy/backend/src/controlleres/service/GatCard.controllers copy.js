import express from 'express'
import { User } from '../../models/user.models.js';
import { ApiError } from '../../utility/ApiError.js';
import { ApiResponse } from '../../utility/ApiResponse.js';

const GateCardUrl = async (req, res) => {
    const user = await User.find(
        req.user?._id,
        {
        }).select("-password -refreshToken -avatar -email -username")
    res.json(
        new ApiResponse(200, user, "Gat image updated successfully")
    )
}


export { GateCardUrl }
