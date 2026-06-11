const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const seedMenu = require('./seed');
const MenuItem = require('./models/MenuItem');

// კონფიგურაცია
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ბაზის დაკავშირება და Seeding
connectDB().then(() => {
  seedMenu();
});

// ── GET API: მენიუს წამოღება Flutter-ისთვის ──
app.get('/api/menu', async (req, res) => {
  try {
    // წამოიღებს ყველა ელემენტს ბაზაში შენახული თანმიმდევრობით
    const items = await MenuItem.find({}, { _id: 0, __v: 0 }); // აშორებს მონგოს შიდა აიდებს სუფთა JSON-ისთვის
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// სერვერის გაშვება
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});