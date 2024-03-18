var dogs = [
    {
        id:1,
        name: "Coco",
        breed: "Border Collie",
        age: "6 Months",
        image: "/pet images/d1.png",
        background: "#f1c3b6",
        about:"Coco, the Border Collie: A lively and intelligent companion, known for their boundless energy and keen herding instincts.",
        features:["Male","Energetic","Curious","Sweet","Puppy","Good with Kids","Good with Cats","Trainable"]
        
    },
    {
        id:2,
        name: "Bailey",
        breed: "Siberian Huskey",
        age: "4 Months",
        image: "/pet images/d2.png",
        background: "#f7d8bb",
        about:"Bailey, the Siberian Husky: A spirited and resilient adventurer, known for their striking appearance and friendly, outgoing nature.",
        features:["Male","Loyal","Intelligent","Friendly","Independent","Adventurous","Resilient","Vocal"]
        
    },
    {
        id:3,
        name: " Charlie",
        breed: "Golden Retriever",
        age: "1 year",
        image: "/pet images/d3.png",
        background: "#c7e1d3",
        about:"Charlie, the Golden Retriever: A loyal and affectionate companion, known for their friendly demeanor and intelligent, eager-to-please nature.",
        features:["Female", "Friendly", "Devoted", "Loyal", "Gentle", "Confident", "Reliable", "Playful"]        
    },
    {
        id:4,
        name: " Sheero",
        breed: "Labrador Retriever",
        age: "1 year",
        image: "/pet images/d4.png",
        background: "#93b4a7",
        about:"Sheero, the Labrador Retriever: A friendly and energetic partner, known for their loyal companionship and playful, outgoing personality.",
        features:["Male", "Friendly", "Loyal", "Gentle", "Energetic", "Adaptable", "Playful", "Outgoing"]
    },
    {
        id:5,
        name: "Dexter",
        breed: "Corgi",
        age: "2 Months",
        image: "/pet images/d5.png",
        background: "#f7d8bb",
        about:"Dexter, the Corgi: A bold and loyal friend, known for their intelligence and affectionate, outgoing nature.",
        features:["Male", "Affectionate", "Loyal", "Alert", "Energetic", "Playful", "Friendly", "Strong-willed"]        
    },
    {
        id:6,
        name: "Oliver",
        breed: "Corgi",
        age: "2 months",
        image: "/pet images/d6.png",
        background: "#c7e1d3",
        about:"Oliver, the Corgi: A charming and spirited companion, known for their intelligence and friendly, playful disposition.",
        features:["Female", "Bold", "Tenacious", "Protective", "Adaptable", "Curious", "Happy", "Stubborn"]
    },
    {
        id:7,
        name: "Bella",
        breed: "Pomeranian",
        age: "1.5 years",
        image: "/pet images/d7.png",
        background: "#f1c3b6",
        about:"Bella, the Pomeranian: A vivacious and affectionate fluffball, known for her bold personality and loyal, playful nature.",
        features:["Female", "Alert", "Curious", "Bold", "Loyal", "Energetic", "Friendly", "Intelligent"]
    },
    {
        id:8,
        name: "Max",
        breed: "Corgi",
        age: "4 Months",
        image: "/pet images/d8.png",
        background: "#c7e1d3",
        about:"Max, the Corgi: A lively and intelligent companion, known for his loyal nature and playful, outgoing demeanor.",
        features: ["Male", "Intelligent", "Loyal", "Playful", "Outgoing", "Alert", "Adaptable", "Friendly"]
    },
    {
        id:9,
        name: "Buzo",
        breed: "Golden Retriever",
        age: "2 Months",
        image: "/pet images/d9.png",
        background: "#f7d8bb",
        about:"Buzo, the Golden Retriever: A friendly and gentle soul, known for his loyal companionship and joyful, playful spirit.",
        features:["Male", "Trustworthy", "Even-tempered", "Adaptable", "Patient", "Amiable", "Sociable", "Attentive"]
        
    },
    
    {
        id:10,
        name: "Sam",
        breed: "Golden Retriever",
        age: "2 years",
        image: "/pet images/d10.png",
        background: "#93b4a7",
        about:"Sam, the Golden Retriever: A loyal and affectionate friend, known for his friendly demeanor and gentle, playful nature.",
        features:["Female", "Harmonious", "Affectionate", "Dedicated", "Consistent", "Supportive", "Observant", "Resilient"]
    }
];

var cats = [
    {
        id:1,
        name: "Chloe",
        breed: "American Shorthair",
        age: "8 weeks",
        image: "/pet images/c1.png",
        background: "#f1c3b6",
        about:"Chloe, the American Shorthair: A picture of graceful domesticity, blending playful curiosity with a serene, companionable nature.",
        features:["Male", "Playful", "Curious", "Serene", "Companionable", "Laid-back", "Affectionate", "Sociable"]
    },
    {
        id:2,
        name: "Misty",
        breed: "British Shorthair",
        age: "9 weeks",
        image: "/pet images/c2.png",
        background: "#f7d8bb",
        about:"Misty, the British Shorthair: Exuding quiet confidence and cozy charm, she embodies the breed's plush, laid-back elegance.",
        features:["Female", "Confident", "Cozy", "Plush", "Laid-back", "Elegant", "Affectionate", "Sturdy"]
        
    },
    {
        id:3,
        name: "Kitty",
        breed: "Persian",
        age: "6 weeks",
        image: "/pet images/c3.png",
        background: "#c7e1d3",
        about:"Persian Kitty: A fluffy bundle of peace and luxury, personifying the breed's serene elegance and plush comfort.",
        features:["Female", "Luxurious", "Elegant", "Fluffy", "Serene", "Affectionate", "Quiet", "Graceful"]
    },
    {
        id:4,
        name: "Jasper",
        breed: "Tabby",
        age: "11 weeks",
        image: "/pet images/c4.png",
        background: "#93b4a7",
        about:"Jasper, the Tabby: A vibrant and spirited character, showcasing the classic tabby's adventurous and affectionate nature.",
        features:["Male", "Spirited", "Adventurous", "Affectionate", "Curious", "Energetic", "Sociable", "Playful"]
    },
    {
        id:5,
        name: "Oliver",
        breed: "American Shorthair",
        age: "7 weeks",
        image: "/pet images/c5.png",
        background: "#f7d8bb",
        about:"Oliver, the American Shorthair: An embodiment of calm confidence and all-American charm, known for his friendly and easygoing nature.",
        features:["Male", "Confident", "Friendly", "Easygoing", "Adaptable", "Playful", "Intelligent", "Independent"]
    },
    {
        id:6,
        name: "Luna",
        breed: "Scottish Fold",
        age: "9 weeks",
        image: "/pet images/c6.png",
        background: "#c7e1d3",
        about:"Luna, the Scottish Fold: A serene and charming companion, known for her unique folded ears and affectionate, tranquil demeanor.",
        features:["Female", "Charming", "Affectionate", "Tranquil", "Unique", "Playful", "Loyal", "Adaptable"]
    },
    {
        id:7,
        name: "Bella",
        breed: "Maine Coon",
        age: "11 weeks",
        image: "/pet images/c7.png",
        background: "#f1c3b6",
        about:"Bella, the Maine Coon: A majestic and friendly presence, combining the breed's characteristic gentle nature with a playful and loving spirit.",
        features:["Female", "Friendly", "Gentle", "Playful", "Loving", "Intelligent", "Sociable", "Robust"]
    },
    {
        id:8,
        name: "Milo",
        breed: "British Shorthair",
        age: "9 weeks",
        image: "/pet images/c8.png",
        background: "#c7e1d3",
        about:"Milo, the British Shorthair: A symbol of understated elegance and comforting steadiness, known for his amiable and composed nature.",
        features:["Female", "Steady", "Understated", "Elegant", "Composed", "Affectionate", "Loyal", "Relaxed"]
    },
    {
        id:9,
        name: "Daisy",
        breed: "Persian",
        age: "8 weeks",
        image: "/pet images/c9.png",
        background: "#f7d8bb",
        about:"Daisy, the Persian: A vision of quiet grace and plush elegance, known for her gentle disposition and luxurious, serene charm.",
        features:["Female", "Graceful", "Plush", "Elegant", "Serene", "Affectionate", "Quiet", "Luxurious"]
    },    
    {
        id:10,
        name: "Max",
        breed: "Tabby",
        age: "10 weeks",
        image: "/pet images/c10.png",
        background: "#93b4a7",
        about:"Max, the Tabby: An adventurous and affectionate explorer, embodying the spirited and friendly essence of the classic tabby cat.",
        features:["Male", "Affectionate", "Spirited", "Friendly", "Curious", "Independent", "Vocal", "Playful"]
    }
];

var birds = [
    {
        id:1,
        name: "Seraphina",
        breed: "Homing Pigeon",
        age: "6 months",
        image: "/pet images/b1.png",
        background: "#f1c3b6",
        about:"Seraphina, the Homing Pigeon: A symbol of resilience and natural beauty, known for her remarkable navigational skills and peaceful demeanor.",
        features:["Resilient", "Graceful", "Intelligent", "Loyal", "Peaceful", "Navigational", "Social", "Enduring"]
        
    },
    {
        id:2,
        name: "Sunny",
        breed: "Peach shaped lovebird",
        age: "1 year",
        image: "/pet images/b2.png",
        background: "#f7d8bb",
        about:"Sunny, the Peach-faced Lovebird: A vibrant and affectionate character, radiating joy and companionship with a playful and curious nature.",
        features:["Vibrant", "Affectionate", "Joyful", "Companionable", "Playful", "Curious", "Social", "Energetic"]
        
    },
    {
        id:3,
        name: "Angel",
        breed: "White Dove",
        age: "6 months",
        image: "/pet images/b3.png",
        background: "#c7e1d3",
        about:"Angel, the White Dove: An emblem of purity and peace, known for her gentle nature and graceful, soothing presence.",
        features:["Peaceful", "Gentle", "Graceful", "Soothing", "Purity", "Loyal", "Friendly", "Tranquil"]
    },
    {
        id:4,
        name: "Lemmy",
        breed: "Cockatiel",
        age: "10 months",
        image: "/pet images/b4.png",
        background: "#93b4a7",
        about:"Lemmy, the Cockatiel: A charming and lively spirit, known for his engaging personality and bright, cheerful disposition.",
        features:["Charming", "Lively", "Engaging", "Cheerful", "Social", "Intelligent", "Vocal", "Affectionate"]
    },
    {
        id:5,
        name: "Aurora",
        breed: "Major Mitchell's Cockatoo",
        age: "3 years",
        image: "/pet images/b5.png",
        background: "#f7d8bb",
        about:"Aurora, the Major Mitchell's Cockatoo: A splendid and regal beauty, known for her striking appearance and strong, loving personality.",
        features:["Splendid", "Regal", "Striking", "Loving", "Vocal", "Intelligent", "Sociable", "Confident"]
    },
    {
        id:6,
        name: "Buttercup",
        breed: "Lutino Cockatiel",
        age: "1 year",
        image: "/pet images/b6.png",
        background: "#c7e1d3",
        about:"Buttercup, the Lutino Cockatiel: A radiant and affectionate companion, known for her sunny disposition and captivating, playful charm.",
        features:["Radiant", "Affectionate", "Sunny", "Captivating", "Playful", "Social", "Curious", "Friendly"]

    },
    {
        id:7,
        name: "Pepper",
        breed: "Cockatiel",
        age: "8 months",
        image: "/pet images/b7.png",
        background: "#f1c3b6",
        about:"Pepper, the Cockatiel: A spirited and endearing character, known for his lively antics and engaging, friendly nature.",
        features: ["Spirited", "Endearing", "Lively", "Engaging", "Friendly", "Curious", "Vocal", "Intelligent"]
    },
    {
        id:8,
        name: "Azure",
        breed: "Ring-necked Parakeet",
        age: "1.5 years",
        image: "/pet images/b8.png",
        background: "#93b4a7",
        about:"Azure, the Ring-necked Parakeet: A vibrant and charismatic figure, known for his dazzling colors and sociable, talkative nature.",
        features:["Vibrant", "Charismatic", "Dazzling", "Sociable", "Talkative", "Intelligent", "Curious", "Adaptable"]
    },
    {
        id:9,
        name: "Lemony",
        breed: "Lutino Cockatiel",
        age: "9 months",
        image: "/pet images/b9.png",
        background: "#c7e1d3",
        about:"Lemony, the Lutino Cockatiel: A sunny and affectionate friend, known for his cheerful chirps and delightful, playful antics.",
        features:[ "Sunny", "Affectionate", "Cheerful", "Playful", "Chirpy", "Curious", "Social", "Engaging"]
    },
    
    {
        id:10,
        name: "Snowy and Flake",
        breed: "Budgerigars(Budgies)",
        age: "4 months",
        image: "/pet images/b10.png",
        background: "#f1c3b6",
        about:"Snowy and Flake, the Budgerigars: A pair of charming and sociable birds, known for their snowy white feathers and playful, energetic personalities.",
        features:[ "Charming", "Sociable", "Snowy", "Playful", "Energetic", "Curious", "Talkative", "Adaptable"]

    },
    {
        id:11,
        name: "Sky and Mist",
        breed: "Pacific Parrotlets",
        age: "7 months",
        image: "/pet images/b11.png",
        background: "#f7d8bb",
        about:"Sky and Mist, the Pacific Parrotlets: A dynamic duo of petite and vibrant birds, known for their cheerful chirps and affectionate, playful interactions.",
        features: ["Dynamic", "Petite", "Vibrant", "Cheerful", "Affectionate", "Playful", "Curious", "Social"]

    },
    {
        id:12,
        name: "Aqua and Breeze",
        breed: "Pacific Parrotlets",
        age: "11 months",
        image: "/pet images/b12.png",
        background: "#93b4a7",
        about:"Aqua and Breeze, the Pacific Parrotlets: A delightful pair embodying the tranquility of oceanic hues, with their playful chirps and sociable, energetic presence.",
        features:["Delightful", "Tranquil", "Playful", "Sociable", "Energetic", "Chirpy", "Curious", "Adaptable"]
    }
];

var rabbits = [
    {
        id:1,
        name: "Tabby",
        breed: "Angora",
        age: "2 months",
        image: "/pet images/r1.png",
        background: "#f1c3b6",
        about:"Tabby, the Angora Rabbit: A fluffy and charming companion, known for their soft fur and gentle, inquisitive nature.",
        features:["Male", "Charming", "Soft", "Gentle", "Inquisitive", "Adaptable", "Playful", "Curious"]        
    },
    {
        id:2,
        name: "Marby",
        breed: "Holland Lop",
        age: "4 months",
        image: "/pet images/r2.png",
        background: "#f7d8bb",
        about:"Marby, the Holland Lop: A sweet and cuddly friend, known for their floppy ears and affectionate, gentle demeanor.",
        features:[ "Female", "Cuddly", "Floppy-eared", "Affectionate", "Gentle", "Adorable", "Playful", "Curious"]
        
    },
    {
        id:3,
        name: "Hazel",
        breed: "Netherland Dwarf",
        age: "2 months",
        image: "/pet images/r3.png",
        background: "#c7e1d3",
        about:"Hazel, the Netherland Dwarf: A petite and charming companion, known for their adorable size and curious, friendly personality.",
        features:["Male", "Charming", "Adorable", "Curious", "Friendly", "Playful", "Alert", "Sociable"]
    },
    {
        id:4,
        name: "ButterScotch",
        breed: "Mini Lop",
        age: "4 months",
        image: "/pet images/r4.png",
        background: "#93b4a7",
        about:"Butterscotch, the Mini Lop: A delightful and cuddly buddy, known for their soft fur and affectionate, playful nature.",
        features:["Male", "Cuddly", "Soft-furred", "Affectionate", "Playful", "Friendly", "Adaptable", "Curious"]
    },
    {
        id:5,
        name: "Loony",
        breed: "Flemish Giant",
        age: "9 months",
        image: "/pet images/r5.png",
        background: "#f7d8bb",
        about:"Loony, the Flemish Giant: A gentle giant with a heart as big as their size, known for their docile nature and affectionate disposition.",
        features:["Male", "Giant", "Docile", "Affectionate", "Loyal", "Majestic", "Graceful", "Adaptable"]
    },
    {
        id:6,
        name: "Misty",
        breed: "Holland Lop",
        age: "5 months",
        image: "/pet images/r6.png",
        background: "#93b4a7",
        about:"Misty, the Holland Lop: A gentle and fluffy companion, known for her endearing personality and irresistibly soft fur.",
        features:["Female", "Fluffy", "Endearing", "Soft-furred", "Friendly", "Curious", "Affectionate", "Adaptable"]

    },
    {
        id:7,
        name: "Caramel",
        breed: "Polish Rabbit",
        age: "5 months",
        image: "/pet images/r7.png",
        background: "#f1c3b6",
        about:"Caramel, the Polish Rabbit: A sleek and charming bunny, known for their elegant appearance and lively, friendly demeanor.",
        features:[ "Male", "Charming", "Elegant", "Friendly", "Lively", "Playful", "Curious", "Adaptable"]
    },
    {
        id:8,
        name: "Sunny",
        breed: "Mini Lop",
        age: "3 months",
        image: "/pet images/r8.png",
        background: "#c7e1d3",
        about:"Sunny, the Mini Lop: A bright and affectionate companion, known for their cheerful disposition and irresistibly soft fur.",
        features:["Male", "Affectionate", "Cheerful", "Soft-furred", "Playful", "Friendly", "Curious", "Adaptable"]
    },
    {
        id:9,
        name: "Bisci",
        breed: "Hallmark Dwarf",
        age: "2 months",
        image: "/pet images/r9.png",
        background: "#f1c3b6",
        about:"Bisci, the Hallmark Dwarf: A tiny bundle of charm, known for their adorable size and playful, curious nature.",
        features:["Male", "Charming", "Adorable", "Playful", "Curious", "Friendly", "Energetic", "Adaptable"]
    },
    
    {
        id:10,
        name: "Snowball",
        breed: "New Zealand White",
        age: "3.5 months",
        image: "/pet images/r10.png",
        background: "#93b4a7",
        about:"Snowball, the New Zealand White: A majestic and gentle giant, known for their snowy fur and calm, affectionate disposition.",
        features:["Female", "Gentle", "Snowy", "Affectionate", "Calm", "Friendly", "Adaptable", "Robust"]
    },

    {
        id:11,
        name: "Cocoa",
        breed: "Rex Rabbit",
        age: "5 months",
        image: "/pet images/r11.png",
        background: "#f7d8bb",
        about:"Cocoa, the Rex Rabbit: A velvety and affectionate companion, known for their luxurious fur and gentle, playful nature.",
        features:["Male", "Affectionate", "Luxurious", "Playful", "Friendly", "Curious", "Adaptable", "Loyal"]
    }
];