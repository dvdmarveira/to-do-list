const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/database/");

const taskRoutes = require("./routes/taskRoutes");

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rotas
app.use("/api/tasks", taskRoutes);

// Porta
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
