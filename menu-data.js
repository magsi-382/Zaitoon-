// Menu content. Each dish is "Name|price|note". Leave the price empty to show "Ask".
const PO="Pre order",HF="Half, full";
const M=[
["Mutton karahi","",[
"Zaitoon Special Mutton Karahi|2540|"+HF,"Mutton Shahi Karahi|2290|"+HF,"Mutton Shinwari Karahi|2290|"+HF,"Mutton Peshawri Karahi|2290|"+HF,"Mutton Brown Karahi|2290|"+HF,"Mutton White Karahi|2440|"+HF]],
["Lamb karahi","",[
"Zaitoon Special Lamb Karahi|2540|"+HF,"Lamb Shahi Karahi|2290|"+HF,"Lamb Shinwari Karahi|2290|"+HF,"Lamb Peshawari Karahi|2290|"+HF,"Lamb Brown Karahi|2290|"+HF,"Lamb White Karahi|2440|"+HF]],
["Chicken karahi","",[
"Chicken Zaitoon Karahi|1440|"+HF,"Chicken Shahi Karahi|1330|"+HF,"Chicken Shinwari Karahi|1330|"+HF,"Chicken Peshawari Karahi|1330|"+HF,"Chicken Green Karahi|1330|"+HF,"Chicken Brown Karahi (Dry)|1330|"+HF,"Chicken White Karahi|1440|"+HF,"Chicken Makhni White|1440|"+HF]],
["Handi","",[
"Mutton Bbq Handi|2440|"+HF,"Chicken Reshmi Handi|1640|"+HF,"Chicken Bbq Handi|1540|"+HF]],
["Mandi and khaddi","",[
"Mutton Mandi|1690|1, 2 or 4 person","Chicken Mandi|1640|2 or 4 person","Balochi Khaddi Kabab (Salim Bakra)||","Balochi Khaddi Kabab, each kg||","Live Desi Murgha||"]],
["Rice and pulao","",[
"Zaitoon Special Beef Pulaw||"+PO,"Zaitoon Special Mutton Pulaw||"+PO,"Beef Kabli Pulaw||"+PO,"Mutton Kabli Pulaw||"+PO,"Fish Special Pulaw||"+PO,"Matka Biryani Chicken||"+PO,"Matka Biryani Beef||"+PO,"Kalmi Tikka Biryani||"+PO,"Special Mandi Rice||"]],
["BBQ and grill","",[
"Bar-B-Q Platter Full|7790|","Junior Bbq Platter|5490|","Turkish Kabab Platter||","Mutton Ribs|4050|"+PO,"Mutton Chops|2130|","Lahori Chargha|2490|","Beef Bihari Boti|990|","Beef Afghani Namkeen Boti|990|","Beef Seekh Kabab|990|","Beef Gola Kabab|990|","Chicken Afghani Namkeen Boti|1020|","Chicken Bihari Boti|990|","Chicken Balochi Boti|990|","Chicken Malai Boti|990|","Chicken Reshmi Kabab|990|","Chicken Turkish Kabab|990|","Cheese Kabab|990|","Chandan Kabab|990|","Kalmi Tikka|990|4 pcs","Chicken Tikka Chest|520|","Chicken Tikka Leg|460|","Chicken Malai Tikka|590|"]],
["Mutton specials","",[
"Mutton Namkeen Rosh|1440|","Mutton Fry|880|"+PO,"Mutton Brain Masala|790|","Mutton Qeema|795|"+PO,"Mutton Kaleji|445|"+PO,"Mutton Paya|600|2 pcs","Larmin||"+PO]],
["Daal and vegetables","",[
"Palak Paneer|750|"+PO,"Daal Makhni|780|","Daal Mash|360|","Daal Chana|340|","Daal Moong|320|","Daal Ghotala|390|","Anda Chola|390|"+PO,"Chola|295|"+PO,"Lobia Red|350|"+PO,"Lobia White|350|"+PO,"Vegetable Of The Day|320|Mix vegetable, aalu palak, bhindi, piaz karela, tori, gawar phalli, aalu mattar"]],
["Fish","",[
"Grilled Boneless Fish|1540|","Lahori Fish|1540|","Fish & Chips|990|"]],
["Chinese","",[
"Chinese Platter|1780|","Chicken Chow Mein|620|","Vegetable Chow Mein|410|","Bar Bq Shashlik|980|","Chicken Shashlik|960|","Chicken Manchurian|960|","Chicken Dry Chilli|980|","Black Pepper Chicken|980|","Chicken Jalfrezi|980|","Hot & Sour Chicken|980|","Chicken Szechuan|980|","Shanghai Spicy Chicken|980|","Cashew Chicken|980|","Dragon Chicken|980|","Almond Chicken|980|","Mongolian Chicken|980|","Beef Chilli Dry|980|","Singaporean Rice|980|","Chicken Fried Rice|595|","Egg Fried Rice|495|","Vegetable Fried Rice|440|","Garlic Fried Rice|395|","Plain Rice|265|1 portion"]],
["Pasta","",[
"Alfredo Pasta|890|","Chicken Red Pasta|780|"]],
["Pizza","",[
"Afghani Pizza|945|","Zaitoon Special Pizza|945|","Kabab Bites Pizza|945|","Crispy Pizza|945|","Super Supreme Pizza|525|","Peri Peri Pizza|575|Spicy","Special Supreme Pizza|1245|","Crown Crust Pizza|895|","Twister Pizza With Large Fries|1495|","Italian Pizza|1695|","Extra Large Pizza|2395|","Four In One Family Pizza|2999|","Chicken Tikka Smokey|795|","Arabic|895|","Chicken Tikka Pizza|495|","Chicken Malai Boti Pizza|495|","Chicken Fajita Pizza|495|","Chicken Pepperoni Pizza|525|","Vegetable Pizza|415|","Kababi Feast|495|Beef","Cheesy Lover|525|"]],
["Steaks","",[
"Zaitoon Special Steak|1280|","Mexican Steak|1090|","Mushroom Steak|1090|"]],
["Sandwiches","",[
"Zaitoon Special Sandwich|695|","Chicken Club Sandwich|590|","Chicken Bbq Sandwich|640|","Vegetable Sandwich|390|"]],
["Burgers and broast","",[
"Zinger Burger|590|","Zinger Burger With Cheese|695|","Jalapeno Burger|580|","Mushroom Burger|560|","Chicken Classic Burger|510|","Beef Classic Burger|510|","Chicken Broast Quarter|590|","Chicken Broast Half|1090|","Chicken Broast Full|2090|"]],
["Soups and starters","",[
"Chicken Corn Soup|260|","Hot & Sour Soup|290|","Dhaka Chicken|740|","Pizza Fries|440|","Plain Fries|290|","Masala Fries|290|","Mayo Garlic Fries|290|"]],
["Salads and raita","",[
"Green Salad|170|","Special Raita|180|","Russian Salad|730|"]],
["Naan and bread","",[
"Chicken Reshmi Naan|380|","Cheese Naan|380|","Zaitoon (Olive) Naan|110|","Afghani Naan|90|","Roghni Naan|90|","Garlic Naan|90|","Kabli Kulcha|90|","Plain Naan|50|","Desi Roti|50|","Chapati|40|"]],
["Eggs","",[
"Pakistani Omelette|220|","Fry Omelette|120|","Half Fry|90|","Boiled Egg|60|"]],
["Paratha and puri","",[
"Chicken Paratha|490|","Aalu Cheese Paratha|320|","Cheese Paratha|320|","Aalu Paratha|220|","Special Puri Paratha|150|","Tandoori Paratha|130|","Shahi Lacha Paratha|120|","Wheat Paratha|120|","Sulemani Paratha|100|","Halwa & 2 Puri|190|","One Puri|80|"]],
["Tea and water","",[
"Zaitoon Special Milk Tea|160|","Special Zaitoon|110|Olive tea","Green Tea|100|","Soft Drink|140|Can or pet","Mineral Water Large|140|","Mineral Water Small|80|"]],
["Lassi","",[
"Special Salt & Sweet Lassi|220|","Seasonal Mango Lassi|350|","Mint Lassi|320|"]],
["Shakes","",[
"Pineapple Shake|430|","Strawberry Shake|430|","Blueberry Shake|430|","Oreo Shake|430|","Mango Shake|430|","Nutella Shake|430|","Caramel Crunch Shake|430|","Vanilla Shake|430|","Fruit Shake||Mix and match to your taste"]],
["Cold drinks","",[
"Milk Rose|350|","Kulfi Falooda|350|","Zaitoon Falooda|390|","Pina Colada|340|","Blueberry Colada|340|","Special Cold Coffee|340|","Strawberry Lemonade|340|","Blueberry Lemonade|340|","Peach Lemonade|340|","Fresh Lime|250|","Lemon Mint Glacier|340|","Strawberry Margarita|350|","Mint Margarita|350|"]],
["Desserts","",[
"Special Kheer|230|","Special Kunafa|980|","Malai|300|","Ice Cream||Vanilla, strawberry, pineapple, chocolate, blueberry, caramel crunch, pistachio, mango, tutti frutti"]]
];
