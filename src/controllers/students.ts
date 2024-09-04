import { NextFunction, Request, Response } from "express";

import StudentsService from "../services/students";

class StudentsController {
//   static async getAll(req: Request, res: Response, next: NextFunction) {
//     try {
//       // GET ==> /Students?name=tornillo

//       // req.query == { name:"tornillo" }
//       const data = await StudentsService.getAll;

//       res.status(200).json({ data: data })
//     } catch (error) {
//       next(error);
//     }
//   }

//   static async getById(req: Request, res: Response, next: NextFunction) {
//     try {
//       const data = await StudentsService.getById(req.params.id);

//       res.status(200).json({ data: data })
//     } catch (error) {
//       next(error);
//     }
//   }

//   static async create(req: Request, res: Response, next: NextFunction) {
//     try {
//       const data = await StudentsService.create(req.body);

//       res.status(201).json({ data: data })
//     } catch (error) {
//       next(error);
//     }
//   }

//   static async updateById(req: Request, res: Response, next: NextFunction) {
//     try {
//       await StudentsService.updateById(req.params.id, req.body);

//       res.status(200).json({ message: "Studiante modificado con exito" })
//     } catch (error) {
//       next(error);
//     }
//   }

//   static async deleteById(req: Request, res: Response, next: NextFunction) {
//     try {
//       await StudentsService.(req.params.id);

//       res.status(200).json({ message: "Estudiante eliminado con exito" })
//     } catch (error) {
//       next(error);
//     }
//   }
 }

export default StudentsController;