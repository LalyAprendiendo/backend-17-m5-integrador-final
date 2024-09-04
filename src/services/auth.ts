import { NextFunction, Request, Response } from "express";
import StudentsService from "./students";
import { v4 as uuidv4 } from "uuid";
import AuthModel from "../models/auth";
import createHash from "../utils/create-hash";

class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const studentId = await StudentsService.create({
        name: data.name,
        email: data.email,
      });
      const authDb = await AuthModel.read();
      const token = createHash(uuidv4());
      authDb.auth.push({
        id: uuidv4(),
        studentId: studentId,
        password: createHash(data.password),
        token: token,
      });
      AuthModel.write(authDb);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async login(data: { email; password }) {
    try {
      const student = await StudentsService.getByEmail(data.email);
      const studentAuth = await AuthService.getByStudentId(student.id);

      if (studentAuth.password != createHash(data.password)) {
        throw new Error("Estudiante no encontrado");
      }
      return studentAuth.token;
    } catch (error) {
      throw error;
    }
  }
  static async getByStudentId(studentId) {
    try {
      const db = await AuthModel.read();
      const student = db.auth.find((student) => student.studentId == studentId);
      if (!student) {
        throw new Error("Estudiante no encontrado");
      }
      return student;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;