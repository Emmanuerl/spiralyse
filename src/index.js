import { app } from "./app";
import { connetToMongodb } from "./config/mongoose";
import dotenv from "dotenv";

dotenv.config();

async function boostrap() {
  try {
    await connetToMongodb(process.env.MONGO_DB_URI);
    console.log("successfuly connected to mongo DB");
    app.listen(process.env.PORT, () => {
      console.log("application running on port", process.env.PORT);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

boostrap();
