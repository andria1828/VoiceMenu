const express = require('express');
const cors = require('cors');

const app = express();

// 🔓 CORS-ის ჩართვა (რომ ბრაუზერმა არ დაბლოკოს)
app.use(cors());
app.use(express.json());

// 🥗 მენიუს ობიექტების მასივი პირდაპირ ბექენდში
const initialMenu = [
  // 🥗 Starters
  { type: 'category', title: 'Category: Starters', detail: '4 items available', ttsOutput: 'Category: Starters. 4 items available' },
  { type: 'dish', title: 'Dish: Pkhali Assortment', detail: 'Traditional Georgian vegetable pâtés made with spinach, beetroot, and walnuts.', price: '18.00 GEL', ttsOutput: 'Dish: Pkhali Assortment. Traditional Georgian vegetable patties made with spinach, beetroot, and walnuts. Price: 18 GEL' },
  { type: 'dish', title: 'Dish: Badrijani Nigvzit', detail: 'Eggplant rolls filled with walnut paste and Georgian spices.', price: '16.00 GEL', ttsOutput: 'Dish: Badrijani Nigvzit. Eggplant rolls filled with walnut paste and Georgian spices. Price: 16 GEL' },
  { type: 'dish', title: 'Dish: Georgian Salad', detail: 'Fresh tomatoes, cucumbers, onions, and herbs served with walnut dressing.', price: '12.00 GEL', ttsOutput: 'Dish: Georgian Salad. Fresh tomatoes, cucumbers, onions, and herbs served with walnut dressing. Price: 12 GEL' },
  { type: 'dish', title: 'Dish: Lobio', detail: 'Traditional red bean stew served with cornbread (Mchadi).', price: '14.00 GEL', ttsOutput: 'Dish: Lobio. Traditional red bean stew served with cornbread. Price: 14 GEL' },

  // 🍲 Soups
  { type: 'category', title: 'Category: Soups', detail: '2 items available', ttsOutput: 'Category: Soups. 2 items available' },
  { type: 'dish', title: 'Dish: Kharcho', detail: 'Rich beef soup with rice, walnuts, and aromatic Georgian spices.', price: '18.00 GEL', ttsOutput: 'Dish: Kharcho. Rich beef soup with rice, walnuts, and aromatic Georgian spices. Price: 18 GEL' },
  { type: 'dish', title: 'Dish: Chikhirtma', detail: 'Traditional chicken soup with egg and lemon.', price: '16.00 GEL', ttsOutput: 'Dish: Chikhirtma. Traditional chicken soup with egg and lemon. Price: 16 GEL' },

  // 🥟 Main Dishes
  { type: 'category', title: 'Category: Main Dishes', detail: '9 items available', ttsOutput: 'Category: Main Dishes. 9 items available' },
  { type: 'dish', title: 'Dish: Beef & Pork Khinkali (5 pcs)', detail: 'Traditional Georgian meat dumplings', price: '12.00 GEL', ttsOutput: 'Dish: Beef and Pork Khinkali, 5 pieces. Traditional Georgian meat dumplings. Price: 12 GEL' },
  { type: 'dish', title: 'Dish: Beef Khinkali (5 pcs)', detail: 'Pure beef dumplings with herbs', price: '13.00 GEL', ttsOutput: 'Dish: Beef Khinkali, 5 pieces. Pure beef dumplings with herbs. Price: 13 GEL' },
  { type: 'dish', title: 'Dish: Mushroom Khinkali (5 pcs)', detail: 'Vegetarian option with forest mushrooms', price: '11.00 GEL', ttsOutput: 'Dish: Mushroom Khinkali, 5 pieces. Vegetarian option with forest mushrooms. Price: 11 GEL' },
  { type: 'dish', title: 'Dish: Cheese Khinkali (5 pcs)', detail: 'Dumplings filled with Georgian cheese', price: '11.00 GEL', ttsOutput: 'Dish: Cheese Khinkali, 5 pieces. Dumplings filled with Georgian cheese. Price: 11 GEL' },
  { type: 'dish', title: 'Dish: Adjarian Khachapuri', detail: 'Boat-shaped bread filled with cheese, butter, and egg.', price: '22.00 GEL', ttsOutput: 'Dish: Adjarian Khachapuri. Boat-shaped bread filled with cheese, butter, and egg. Price: 22 GEL' },
  { type: 'dish', title: 'Dish: Imeretian Khachapuri', detail: 'Traditional cheese-filled Georgian bread.', price: '18.00 GEL', ttsOutput: 'Dish: Imeretian Khachapuri. Traditional cheese-filled Georgian bread. Price: 18 GEL' },
  { type: 'dish', title: 'Dish: Ostri', detail: 'Spicy beef stew cooked with tomatoes and herbs.', price: '24.00 GEL', ttsOutput: 'Dish: Ostri. Spicy beef stew cooked with tomatoes and herbs. Price: 24 GEL' },
  { type: 'dish', title: 'Dish: Chashushuli', detail: 'Tender beef cooked in a rich tomato sauce.', price: '25.00 GEL', ttsOutput: 'Dish: Chashushuli. Tender beef cooked in a rich tomato sauce. Price: 25 GEL' },
  { type: 'dish', title: 'Dish: Chicken in Blackberry Sauce', detail: 'Grilled chicken served with traditional Georgian blackberry sauce.', price: '28.00 GEL', ttsOutput: 'Dish: Chicken in Blackberry Sauce. Grilled chicken served with traditional Georgian blackberry sauce. Price: 28 GEL' },
  { type: 'dish', title: 'Dish: Mtsvadi (Pork BBQ)', detail: 'Charcoal-grilled pork skewers served with onions and pomegranate.', price: '24.00 GEL', ttsOutput: 'Dish: Mtsvadi, Pork BBQ. Charcoal-grilled pork skewers served with onions and pomegranate. Price: 24 GEL' }
];

// ── GET API: აბრუნებს პირდაპირ კოდში არსებულ მასივს ──
app.get('/api/menu', (req, res) => {
  res.json(initialMenu);
});

// სერვერის გაშვება (0.0.0.0 საჭიროა Render-ისთვის)
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});