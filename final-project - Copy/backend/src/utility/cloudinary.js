import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: "dguqlw9yp",
    api_key: 474742487751546,
    api_secret: "COayqlcezEMnoU6A-4FYwhC1qNY"

});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
     
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
      
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) 
        return null;
    }
}

export { uploadOnCloudinary }