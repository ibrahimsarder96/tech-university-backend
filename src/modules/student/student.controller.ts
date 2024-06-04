import { studentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    messege: "students read successfully",
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params.studentId;
  const result = await studentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    messege: "student reachive successfully",
    data: result,
  });
});

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
};
