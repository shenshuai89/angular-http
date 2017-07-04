"use strict";
/**
 * Created by sam on 2017/7/4.
 */
// 创建一个node的express服务器
var express = require('express');
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 1.99, 3.6, '这是第一个商品的描述', ["电子产品", "硬件设备"]),
    new Product(2, '第二个商品', 2.99, 4.6, '这是第二个商品的描述', ["图书"]),
    new Product(3, '第三个商品', 3.99, 2.1, '这是第三个商品的描述', ["硬件设备"]),
    new Product(4, '第四个商品', 4.99, 3.1, '这是第四个商品的描述', ["电子产品", "硬件设备"]),
    new Product(5, '第五个商品', 5.99, 2.6, '这是第五个商品的描述', ["电子产品", "硬件设备"]),
    new Product(6, '第六个商品', 6.99, 1.6, '这是第六个商品的描述', ["图书"])
];
app.get("/", function (req, res) {
    res.send("hello express!");
});
app.get("/api/products", function (req, res) {
    res.json(products);
});
app.get("/api/product/:id", function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.listen(8000, "localhost", function () {
    console.log('服务器启动成功');
});
