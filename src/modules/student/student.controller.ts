import { studentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const getAllStudent = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await studentServices.getAllStudentsFromDB(query);
  res.status(200).json({
    success: true,
    messege: 'students retrieved successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    messege: 'student retrieved successfully',
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(id, student);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Student update Successfully!',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.deleteStudentintoDB(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'student delete successfully',
    data: result,
  });
});

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
