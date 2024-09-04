import { writeFile, readFile } from "jsonfile";

class studentsModel {
  static async write(data) {
    try {
      await writeFile("./src/db/students.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await readFile("./src/db/students.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default studentsModel;