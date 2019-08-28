const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { searchItems } = require('../db');
const app = express();

//MIDDLEWARE

app.use(express.static(path.join(__dirname, '../public')));

//ROUTES

app.get('/api/search/items', (req, res) => {
  searchItems.find()
    .exec()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      console.error(err);
    });
});

//SERVER START

app.listen(3003, () => {
  console.log('Server is listening on port: 3003');
});


//SEEDING CODE FOR DUMMY DATABASE

// const items = ['Harry Potter\'s Wand', 'Hermione Granger\'s Wand', 'The Elder Wand', 'Voldemort\'s Wand', 'The Remote Control Wand', 'Draco Malfoy\'s Wand', 'Snape\'s Wand', 'Marauder\'s Map', 'Time Turner', 'Invisibility Cloak', 'Wizard\'s Chess', 'Bertie Bott\'s', 'Chocolate Frog', 'SUNMALL Vintage Legend Aladdin Lamp Magic Genie Wishing Light,Collectable Rare Classic Arabian Costume Props Lamp Tabletop Decor Crafts for Home/Wedding Decoration&Gift for Party/Halloween/Birthday', 'WEISIPU Aladdin Magic Genie Lamps - Vintage Incense Burners Magic Genie Light Lamp for Home Table Decoration/Party/Halloween/Birthday (Gold-Blue)', 'Led Rainbow Projector - Rainbow Projector LED Light Reflection - Rainbow Maker for Children Gift', 'Brightech Eclipse LED Floor Lamp - Super Bright & Dimmable Modern Light For Living Room Or Office Tasks - Contemporary, Tall Standing Pole Lamps - Cool Look, Adjustable-Position Ring Lighting - Black', 'Sound Activated Party Lights with Remote Control Disco lights Dj Lighting SOLMORE Disco Ball 9 Colors Strobe Lamp 7 Modes Stage Par Light Club Party Gift Kids Birthday Wedding Home Karaoke Dance', 'BOSQUEEN Cartoon Book Lamp, Novelty LED Night Light for Kids ，Folding Table Lamp for Birthday Home Decor Bathroom Office Meeting Room Living Room (Cat)', 'Creative 3D Glow LED Night Light Secret Magic Lamp 7 Colors Optical Illusion Lamp Touch Sensor Perfect for Home Party Festival Decor Great Gift Idea (Magic Lamp)', 'Bedside Table Lamp, Aooshine Minimalist Solid Wood Table Lamp Bedside Desk Lamp With Square Flaxen Fabric Shade for Bedroom, Dresser, Living Room, Kids Room, College Dorm, Coffee Table, Bookcase', 'Bedoo Pressie Birthday Gift Delightful Cat Lamp Magic 3D Illusion 7 Colors Touch Switch USB Insert LED Light Christmas Present and Party Decoration', 'AUSAYE LED Night Light Plug in Lamp Mushroom Night Light 7-Color Changing Magic Mini Pretty Mushroom-Shaped Night Lights for Adults Kids NightLight', 'YUNNI Plasma Ball Light 6 Inch Plasma Lamp, Lightning Ball Touch & Sound Sensitive, Glass Magic Ball Lamp Nebula Sphere Globe Novelty Toy for Decorations/Kids/Bedroom/Gifts (AC Powered, Plug-in)', 'Lava the Original 16.3-Inch Silver Base Lamp with Yellow Wax in Purple Liquid', 'Aladdin Disney Magic Genie Lamp, Lights Up & Shakes!', 'Aladdin Lamp Fuel - 64oz', 'Feuerhand Hurricane Lantern - German Made Oil Lamp - 10" with Care Pack (Black)', 'Felix Felicis', 'Polyjuice Potion', 'Pacific Giftware Medieval Fantasy Double Sentinel Dragons Sculptural Wall Floating Shelf', 'Harry Potter Collectible Quidditch Set', 'Harry Potter Child\'s Deluxe Quidditch Robe, Large', 'Harry Potter Keeper Figure', 'Harry Potter Seeker Figure', 'Harry Potter Chaser Figure', 'Harry Potter Beater Figure A', 'Harry Potter Beater Figure B', 'Harry Potter Quaffle for Quidditch', 'Harry Potter Bludger for Quidditch', 'Harry Potter Seeker for Quidditch', 'Harry Potter Quidditch Rule Book', 'Nimbus 2000', 'Harry Potter Griffindor Quidditch Jersey', 'Harry Potter Ravenclaw Quidditch Jersey', 'Harry Potter Hufflepuff Quidditch Jersey', 'Harry Potter Slytherin Quidditch Jersey', 'Lofbaz Women\'s Smocked Waist Aladdin Genie 2 in 1 Harem Pants Jumpsuit', 'Forum Novelties 42-Inch Purple Genie Vest Costume', 'Forum Novelties Felt Fez Hat', 'Forum Novelties Desert Prince Arabian Pants', 'INFLATABLE WIZARD HAT FOR CATS by Accoutrements', 'Elope Fancy Purple Wizard Hat'];

// app.all('/seed', () => {
//   for (let i = 0; i < items.length; i++) {
//     const doc = new searchItems({
//       _id: mongoose.Types.ObjectId(),
//       searchId: i,
//       itemName: items[i]
//     });
//     doc.save((err, res) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log('DB Seeded');
//     });
//   }
//   return;
// });