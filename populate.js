require("dotenv").config();

const connectDB = require("./db/connect")
const productjson = require("./products.json");
const product_model = require("./models/product");
const start = async() => {
try{
    await connectDB(process.env.MONGO_URI);
    console.log(
        "success!!!"
    )
    await product_model.deleteMany();
    await product_model.create(productjson);
}catch(e){
    console.log(e)
}
}
start();