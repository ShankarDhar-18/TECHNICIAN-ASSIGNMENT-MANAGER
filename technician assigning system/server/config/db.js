const mongoose = require('mongoose');

const connectdb = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }
    catch(error) {
        console.error("error:",error);
    }
}
module.exports = connectdb;
