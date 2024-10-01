import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routers/foodRouter.js";


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api router
app.use("/api/food", foodRouter)
app.use("images", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("API working");
})


app.listen(port,()=>{   
    console.log(`Server started on http://localhost:${port}`);
})

// mongodb+srv://greatstack:02013003@cluster0.taqdu.mongodb.net/?