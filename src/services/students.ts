import studentsModel from "../models/students";
import { v4 as uuidv4 } from "uuid";

class StudentsService {
  static async create(data: { name: string; email: string }) {
    try {
      const studentsDb = await studentsModel.read();
      const id = uuidv4();
      studentsDb.students.push({ name: data.name, email: data.email, id: id });
     studentsModel.write(studentsDb); 
      return id;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await studentsModel.read();
      return db;
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    try {
      const db = await StudentsService.read();

      const student = db.students.find((student) => email == student.email);
      if (!student) {
        throw new Error("Usuario no encontrado");
      }
      return student;
    } catch (error) {
      throw error;
    }
  }
}

export default StudentsService;