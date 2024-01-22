import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser"
const app = express();
import UserSchema from "./user.model.js";
const PORT = 3000;
// app.use(express.json());
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// JWT Brcrypt ---

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Use path.join to create the correct file path
  res.render("index");
});


app.post("/signup", async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, username, email, password } = req.body;
    console.log(req)

    // Create a new user instance using the Mongoose model
    const newUser = new UserSchema({ name, username, email, password });

    // Save the user data to the MongoDB database
    const savedUser = await newUser.save();

    // Respond with the saved user data
    console.log("saved user",savedUser)
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error"); // You might want to handle errors more gracefully
  }
});

// testing post method from postman
app.post("/new", (req, res) => {
  res.json({ name: "Ajay" });
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT} PORT`);
});
