const MenuItem = require('./models/MenuItem');

const initialMenu = [
  // 🥗 Starters
  { type: 'category', title: 'Category: Starters', detail: '4 items available' },
  { type: 'dish', title: 'Dish: Pkhali Assortment', detail: 'Traditional Georgian vegetable pâtés made with spinach, beetroot, and walnuts.', price: '18.00 GEL' },
  { type: 'dish', title: 'Dish: Badrijani Nigvzit', detail: 'Eggplant rolls filled with walnut paste and Georgian spices.', price: '16.00 GEL' },
  { type: 'dish', title: 'Dish: Georgian Salad', detail: 'Fresh tomatoes, cucumbers, onions, and herbs served with walnut dressing.', price: '12.00 GEL' },
  { type: 'dish', title: 'Dish: Lobio', detail: 'Traditional red bean stew served with cornbread (Mchadi).', price: '14.00 GEL' },

  // 🍲 Soups
  { type: 'category', title: 'Category: Soups', detail: '2 items available' },
  { type: 'dish', title: 'Dish: Kharcho', detail: 'Rich beef soup with rice, walnuts, and aromatic Georgian spices.', price: '18.00 GEL' },
  { type: 'dish', title: 'Dish: Chikhirtma', detail: 'Traditional chicken soup with egg and lemon.', price: '16.00 GEL' },

  // 🥟 Main Dishes
  { type: 'category', title: 'Category: Main Dishes', detail: '9 items available' },
  { type: 'dish', title: 'Dish: Beef & Pork Khinkali (5 pcs)', detail: 'Traditional Georgian meat dumplings', price: '12.00 GEL' },
  { type: 'dish', title: 'Dish: Beef Khinkali (5 pcs)', detail: 'Pure beef dumplings with herbs', price: '13.00 GEL' },
  { type: 'dish', title: 'Dish: Mushroom Khinkali (5 pcs)', detail: 'Vegetarian option with forest mushrooms', price: '11.00 GEL' },
  { type: 'dish', title: 'Dish: Cheese Khinkali (5 pcs)', detail: 'Dumplings filled with Georgian cheese', price: '11.00 GEL' },
  { type: 'dish', title: 'Dish: Adjarian Khachapuri', detail: 'Boat-shaped bread filled with cheese, butter, and egg.', price: '22.00 GEL' },
  { type: 'dish', title: 'Dish: Imeretian Khachapuri', detail: 'Traditional cheese-filled Georgian bread.', price: '18.00 GEL' },
  { type: 'dish', title: 'Dish: Ostri', detail: 'Spicy beef stew cooked with tomatoes and herbs.', price: '24.00 GEL' },
  { type: 'dish', title: 'Dish: Chashushuli', detail: 'Tender beef cooked in a rich tomato sauce.', price: '25.00 GEL' },
  { type: 'dish', title: 'Dish: Chicken in Blackberry Sauce', detail: 'Grilled chicken served with traditional Georgian blackberry sauce.', price: '28.00 GEL' },
  { type: 'dish', title: 'Dish: Mtsvadi (Pork BBQ)', detail: 'Charcoal-grilled pork skewers served with onions and pomegranate.', price: '24.00 GEL' },

  // 🍖 Grill & Barbecue
  { type: 'category', title: 'Category: Grill & Barbecue', detail: '4 items available' },
  { type: 'dish', title: 'Dish: Chicken Mtsvadi', detail: 'Charcoal-grilled chicken skewers.', price: '22.00 GEL' },
  { type: 'dish', title: 'Dish: Veal Mtsvadi', detail: 'Tender grilled veal skewers.', price: '30.00 GEL' },
  { type: 'dish', title: 'Dish: Lamb Chops', detail: 'Juicy grilled lamb chops with spices.', price: '38.00 GEL' },
  { type: 'dish', title: 'Dish: Mixed Grill Platter', detail: 'Selection of pork, chicken, veal, and vegetables.', price: '65.00 GEL' },

  // 🥔 Side Dishes
  { type: 'category', title: 'Category: Side Dishes', detail: '4 items available' },
  { type: 'dish', title: 'Dish: French Fries', detail: 'Crispy golden potato fries.', price: '8.00 GEL' },
  { type: 'dish', title: 'Dish: Rustic Potatoes', detail: 'Baked potatoes with spices.', price: '10.00 GEL' },
  { type: 'dish', title: 'Dish: Grilled Vegetables', detail: 'Assorted seasonal vegetables grilled to perfection.', price: '12.00 GEL' },
  { type: 'dish', title: 'Dish: Mchadi with Sulguni', detail: 'Cornbread served with traditional Georgian Sulguni cheese.', price: '10.00 GEL' },

  // 🍰 Desserts
  { type: 'category', title: 'Category: Desserts', detail: '4 items available' },
  { type: 'dish', title: 'Dish: Churchkhela', detail: 'Walnut candy in grape juice.', price: '8.00 GEL' },
  { type: 'dish', title: 'Dish: Pelamushi', detail: 'Traditional grape juice pudding.', price: '10.00 GEL' },
  { type: 'dish', title: 'Dish: Honey Cake', detail: 'Layered soft cake with honey and cream.', price: '14.00 GEL' },
  { type: 'dish', title: 'Dish: Homemade Napoléon', detail: 'Crispy puff pastry with vanilla custard.', price: '16.00 GEL' },

  // 🍷 Georgian Wines
  { type: 'category', title: 'Category: Georgian Wines', detail: '7 options available' },
  { type: 'dish', title: 'Dish: Saperavi (Glass)', detail: 'Dry red wine with rich berry aromas.', price: '9.00 GEL' },
  { type: 'dish', title: 'Dish: Saperavi (Bottle)', detail: 'Full bottle of traditional dry red wine.', price: '38.00 GEL' },
  { type: 'dish', title: 'Dish: Kindzmarauli (Glass)', detail: 'Naturally semi-sweet red wine.', price: '10.00 GEL' },
  { type: 'dish', title: 'Dish: Kindzmarauli (Bottle)', detail: 'Full bottle of semi-sweet red wine.', price: '42.00 GEL' },
  { type: 'dish', title: 'Dish: Tsinandali (Glass)', detail: 'Dry white wine, light and refreshing.', price: '8.00 GEL' },
  { type: 'dish', title: 'Dish: Tsinandali (Bottle)', detail: 'Full bottle of premium dry white wine.', price: '35.00 GEL' },
  { type: 'dish', title: 'Dish: Mukuzani (Bottle)', detail: 'Exquisite dry red wine aged in oak barrels.', price: '55.00 GEL' },

  // ☕ Beverages
  { type: 'category', title: 'Category: Beverages', detail: '6 items available' },
  { type: 'dish', title: 'Dish: Espresso', detail: 'Freshly brewed strong coffee.', price: '5.00 GEL' },
  { type: 'dish', title: 'Dish: Cappuccino', detail: 'Espresso with steamed milk foam.', price: '8.00 GEL' },
  { type: 'dish', title: 'Dish: Tea Selection', detail: 'Assorted green, black, or herbal teas.', price: '6.00 GEL' },
  { type: 'dish', title: 'Dish: Mineral Water', detail: 'Refreshing local sparkling mineral water.', price: '3.00 GEL' },
  { type: 'dish', title: 'Dish: Fresh Juice', detail: 'Seasonally available freshly squeezed juice.', price: '10.00 GEL' },
  { type: 'dish', title: 'Dish: Soft Drinks', detail: 'Assorted cold beverages.', price: '4.00 GEL' }
];

const seedMenu = async () => {
  try {
    const count = await MenuItem.countDocuments();
    if (count === 0) {
      await MenuItem.insertMany(initialMenu);
      console.log('✅ Menu seeded successfully into MongoDB!');
    } else {
      console.log('ℹ️ Database already has menu items. Skipping seed.');
    }
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

module.exports = seedMenu;