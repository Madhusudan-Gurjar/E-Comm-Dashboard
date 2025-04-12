require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/e-commerce");
//mongoose.connect("mongodb+srv://madhusudangurjar99:madhu16123@cluster0.lr72f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));
