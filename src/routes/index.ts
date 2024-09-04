import { Router } from "express";
import authRouter from "./auth"
import studentsRouter from "./students";
import checkToken from "../middlewares/check-token";

const indexRouter = Router()

indexRouter.use("/auth", authRouter)
indexRouter.use("/students",checkToken, studentsRouter)


export default indexRouter