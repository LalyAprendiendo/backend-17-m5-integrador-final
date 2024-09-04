import { NextFunction, Request, Response, Router } from "express";
import StudentsController from "../controllers/students";

const studentsRouter = Router();

// studentsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
//   StudentsController.getAll(req, res, next);
// });

// studentsRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
//   StudentsController.getById(req, res, next);
// });

// studentsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
//   StudentsController.create(req, res, next);
// });

// studentsRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
//   StudentsController.updateById(req, res, next);
// });

// studentsRouter.delete(
//   "/:id",
//   (req: Request, res: Response, next: NextFunction) => {
//     StudentsController.deleteById(req, res, next);
//   }
//);

export default studentsRouter;