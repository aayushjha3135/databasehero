const express = require("express");
const mongoose =require ("mongoose");
const cors = require('cors')
const app = express();

const ProductModel = require("./models/Product");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Aayushjha:Aayushjha@mongodb.pdejj.mongodb.net/Product?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
});

app.post("/insert", async (req, res)=>{

    console.log(req.body);
    res.send();

    const productName = req.body.productName;
    const star = req.body.star;
    const price = req.body.price;

    const product = new ProductModel({ productName: 'productName', star: star, price:price });
    try{
      await product.save();
    }catch(err){
       console.log(err)
    }
});

app.get("/read", async (req, res)=>{
    ProductModel.find({}, (err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});


app.listen(3001, ()=>{
    console.log("server running on port 3001");
});