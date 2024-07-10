import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Academic Semester Create Successfully',
    data: result,
  });
});
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllAcademicSemesterIntoDB();
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Academic All Semester receive Successfully',
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await academicSemesterServices.getSingleAcademicSemesterIntoDB(semesterId);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Single Academic Semester receive Successfully',
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await academicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Update Academic Semester receive Successfully',
    data: result,
  });
});

export const semesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
