import mongoose from "mongoose";

const UrlSchema = mongoose.Schema(
    {
        shortId : {
            type : String,
            required: true,
            unique : true
        },

        redirectURL : {
            type : String,
            required : true,
        },
        visistHistory : [{timestamp : {type : Number}}]
    },
    {timestamp : true}
);

const URL = mongoose.model("shortUrl", UrlSchema);

export default URL;