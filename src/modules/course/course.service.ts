/* eslint-disable no-console */
import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course.constant';
import { TCourse, TCoursefaculty } from './course.interface';
import { Course, CourseFaculty } from './course.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    'preRequisiteCourses.course',
  );
  return result;
};

const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { preRequisiteCourses, ...courseRemainingData } = payload;
    const updateBasicCourseInfoData = await Course.findByIdAndUpdate(
      id,
      courseRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      },
    );
    if (!updateBasicCourseInfoData) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild update Course!');
    }
    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
      const deletedCourse = preRequisiteCourses
        .filter((el) => el.course && el.isDeleted)
        .map((el) => el.course);
      const deletedPreRequsitCourses = await Course.findByIdAndUpdate(
        id,
        {
          $pull: { preRequisiteCourses: { course: { $in: deletedCourse } } },
        },
        {
          new: true,
          runValidators: true,
          session,
        },
      );
      if (!deletedPreRequsitCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Faild Delete Course!');
      }
      const newPreRequsitCourses = preRequisiteCourses?.filter(
        (el) => el.course && !el.isDeleted,
      );
      const addNewPreRequsitCourses = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourses: { $each: newPreRequsitCourses } },
        },
        {
          new: true,
          runValidators: true,
          session,
        },
      );
      if (!addNewPreRequsitCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Faild New Course Add!');
      }
    }
    const result = await Course.findById(id).populate(
      'preRequisiteCourses.course',
    );
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};
const assignFacultiesWithCourseIntoDB = async (
  id: string,
  payload: Partial<TCoursefaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $addToSet: { faculties: { $each: payload } },
    },
    {
      new: true,
      upsert: true,
    },
  );
  return result;
};
const removeFacultiesFromCourseFromDB = async (
  id: string,
  payload: Partial<TCoursefaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payload } },
    },
    {
      new: true,
    },
  );
  return result;
};
export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
  assignFacultiesWithCourseIntoDB,
  removeFacultiesFromCourseFromDB,
};
