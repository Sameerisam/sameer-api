import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error hai server running sai pahly", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DataBase connection failed!!!!", err);
  });
