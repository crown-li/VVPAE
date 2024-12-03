import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 测试路由
app.get("/test", (req, res) => {
  res.json({ message: "Vue+Vite+Pinia+Axios+Node(Express) Server" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
