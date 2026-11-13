import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
    path: "./.env",
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("Server error:", error);
            throw error;
        });

        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exitCode = 1;
    }
};

startServer();