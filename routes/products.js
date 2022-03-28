const express = require("express");
const router = express.Router();
const {getAllproducts,productsStatic} = require("../controllers/products")
router.route("/").get(getAllproducts);
router.route("/static").get(productsStatic);

module.exports =router;