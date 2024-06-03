import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { studentRoutes } from "./modules/student/student.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/students", studentRoutes);
app.use('/',(req:Request, res: Response) =>{
    res.status(200).json({
        success: true,
        messege: 'welcome to tech university backend',
      });
})
export default app;
