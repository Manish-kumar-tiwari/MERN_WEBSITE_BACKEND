require("dotenv").config();


const express= require("express");

const cors=require("cors");

const app=express();

const router=require("./router/auth-route");
const contectRouter=require("./router/contect-route");
const serviceRouter=require("./router/service-router");
const adminRouter=require("./router/admin-route");

const connectDb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
        origin: "http://localhost:5173",
        methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
        credentials: true,
      };

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth",router);
app.use("/api/form",contectRouter);
app.use("/api/data",serviceRouter);
app.use("/api/admin",adminRouter);

app.use(errorMiddleware);

connectDb().then(()=>{
        app.listen(2000,()=>{
                console.log(" Server is created at 2000");
             });
});

