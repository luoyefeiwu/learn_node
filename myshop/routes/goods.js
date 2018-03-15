var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');
var config = require('../config/default');

//连接Mongodb数据库
mongoose.connect(config.mongodb);

mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
    console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected.")
});

//查询商品列表数据
router.get("/list", function (req, res, next) {
    let page = parseInt(req.param('page'));
    let pageSize = parseInt(req.param("pageSize"));
    let priceLevel = req.param("priceLevel");
    let sort = req.param('sort');
    let skip = (page - 1) * pageSize;
    var priceGt = '', priceLte = '';
    let params = {};
    if (priceLevel != 'all') {
        switch (priceLevel) {
            case '0': priceGt = 0; priceLte = 100; break;
            case '1': priceGt = 100; priceLte = 500; break;
            case '2': priceGt = 500; priceLte = 1000; break;
            case '3': priceGt = 1000; priceLte = 5000; break;
        }
        params = {
            salePrice: {
                $gt: priceGt,
                $lt: priceLte
            }
        }
    }
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
    goodsModel.sort({ 'salePrice': sort });
    goodsModel.exec(function (err, doc) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (err) {
            res.json({
                status: 1,
                msg: err.message
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            });
        }

    });

});

//加入到购物车
router.post('/addCart', function (req, res, next) {
   
    var userId = '1000007', productId = req.body.productId;
    var User = require('../models/users');
    User.findOne({ userId: userId }, function (err, result) {
        if (err) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status: "1",
                msg: err.message
            })
        } else {
            console.log('result:' + result);
            if (result) {
                Goods.findOne({ productId: productId }).then((err1, doc) => {
                    if (err1) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.json({
                            status: "1",
                            msg: err1.message
                        });
                    } else {
                        if (doc) {
                            doc.productNum = 1;
                            doc.checked = 1;
                            User.cartList.push(doc);
                            User.save((err2, doc2) => {
                              
                                if (err2) {
                                    res.setHeader('Access-Control-Allow-Origin', '*');
                                    res.json({
                                        status: "1",
                                        msg: err2.message
                                    });
                                } else {
                                    res.setHeader('Access-Control-Allow-Origin', '*');
                                    res.json({
                                        status: "0",
                                        msg: "",
                                        result: 'suc'
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
    });

});

module.exports = router;
