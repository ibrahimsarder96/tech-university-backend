import { Request, Response } from "express";
import { studentServices } from "./student.service";

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      messege: "students read successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await studentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      messege: "student reachive successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
};
