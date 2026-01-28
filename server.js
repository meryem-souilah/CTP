const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
console.log("MONGO_URI =", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => console.log("❌ Erreur de connexion MongoDB :", err));

// Route test
app.get("/", (req, res) => {
  res.send("Backend CTP connecté à MongoDB 🚀");
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
