import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { academicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result =
    await academicSemesterServices.createAcademicServiceIntoDB(req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Academic Semester Create Successfully",
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllAcademicServiceIntoDB();
  res.status(httpStatus.OK).json({
    success: true,
    message: "Academic All Semester receive Successfully",
    data: result,
  });
});

const singleGetAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const result = await academicSemesterServices.singleGetAcademicServiceIntoDB(id);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Single Academic Semester receive Successfully",
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const result = await academicSemesterServices.updateAcademicServiceIntoDB(id, req.body);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Update Academic Semester receive Successfully",
    data: result,
  });
});

export const semesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  singleGetAcademicSemester,
  updateAcademicSemester
};
