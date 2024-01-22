import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Ajay:1234@cluster0.adga2kq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code here, if any, that relies on the successful connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error, such as logging, notifying, or shutting down the application
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  username: {
    type: String,
    required:true
  },
});

export default mongoose.model("User", userSchema);
