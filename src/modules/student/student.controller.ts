import { studentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    messege: "students retrieved successfully",
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params.studentId;
  const result = await studentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    messege: "student retrieved successfully",
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(studentId, student);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Student update Successfully!",
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentintoDB(studentId);
  res.status(httpStatus.OK).json({
    success: true,
    message: "student delete successfully",
    data: result,
  });
});

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
