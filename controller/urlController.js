import { nanoid } from "nanoid"
import URL from "../model/url.js"

export const handleGenerateNewShortUrl = async (request, response) => {

    // const shortId = nanoid(8);
    // console.log(shortId)

    try {
        if (!request.body.url) {
            throw new TypeError("Invalid url")
            
        }else{
            const shortId = nanoid(8);

            const success = await URL.create({
                shortId,
                redirectURL : request.body.url,
                visistHistory : [],
            });

            response.status(200).json({
                success : true,
                message : success,
                id : shortId,
            })
        }
    } catch (error) {
        response.json({
            success : false,
            error : error.message + " url is required",
        })
    }

}