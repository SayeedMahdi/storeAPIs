const products = require("../models/product");
const getAllproducts = async (req, res) => {
  const product = await products.find(req.query);
  res.status(200).json({ product, nbHight: product.length });
};
const productsStatic = async (req, res) => {
  const product = await products.find({
    name: "vase table",
  });
  res.status(200).json({ product, nbHight: product.length });
};
module.exports = {
  getAllproducts,
  productsStatic,
};
