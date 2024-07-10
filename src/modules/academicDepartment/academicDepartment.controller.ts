import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { academicDepartmentServices } from './academicDepartment.sevice';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Department is a create successfully',
    data: result,
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getAllAcademicDepartmentIntoDB();
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Department all retrieved successfully',
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await academicDepartmentServices.getSingleAcademicDepartmentIntoDB(
      departmentId,
    );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Single Department retrieved successfully',
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await academicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body,
    );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Update Department successfully',
    data: result,
  });
});
export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
