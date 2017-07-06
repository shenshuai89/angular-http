/**
 * Created by sam on 2017/7/4.
 */
// 创建一个node的express服务器
import * as express from 'express'

import {Server} from "ws"
const app = express();

export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ){}
}
const products:Product[] = [
    new Product (1,'第一个商品',1.99,3.6,'这是第一个商品的描述',["电子产品","硬件设备"]) ,
    new Product (2,'第二个商品',2.99,4.6,'这是第二个商品的描述',["图书"]) ,
    new Product (3,'第三个商品',3.99,2.1,'这是第三个商品的描述',["硬件设备"]) ,
    new Product (4,'第四个商品',4.99,3.1,'这是第四个商品的描述',["电子产品","硬件设备"]) ,
    new Product (5,'第五个商品',5.99,2.6,'这是第五个商品的描述',["电子产品","硬件设备"]) ,
    new Product (6,'第六个商品',6.99,1.6,'这是第六个商品的描述',["图书"])
]


app.get("/", (req, res) =>{
    res.send("hello express!");
})

app.get("/api/products", (req, res) =>{
    res.json(products);
})

app.get("/api/product/:id", (req, res) =>{
    res.json(products.find( (product) => product.id == req.params.id) )
})

app.listen(8000, "localhost", ()=>{
    console.log('服务器启动成功');
})

const wsServer = new Server({
    port:8085
})
wsServer.on("connection", webSocket => {
    webSocket.send("这个消息是服务器主动推送的");
    webSocket.on("message", (message)=>{
        console.log("接收到消息："+message)
    })
})

var stiv;
function fun(){
    stiv = setInterval(() =>{
        if (wsServer.clients){
            wsServer.clients.forEach((client)=>{
                client.send("这是服务器定时发送的数据")
            })
        }
    }, 1000)
    setTimeout(fun1,7000);
}

function fun1(){
    clearInterval(stiv)
}

fun();