import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Academic Faculty Create Successfully',
    data: result,
  });
});
const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFacultyIntoDB();
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Academic All Faculty receive Successfully',
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyIntoDB(semesterId);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Single Academic Faculty receive Successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultyIntoDB(
    semesterId,
    req.body,
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Update Academic Faculty receive Successfully',
    data: result,
  });
});

export const facultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
