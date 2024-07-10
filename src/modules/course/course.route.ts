import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { courseValidaions } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();
router.post(
  '/create-course',
  validateRequest(courseValidaions.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSingleCourse);
router.patch(
  '/:id',
  validateRequest(courseValidaions.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);
router.put(
  '/:courseId/assign-faculty',
  validateRequest(courseValidaions.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);
router.delete(
  '/:courseId/remove-faculty',
  validateRequest(courseValidaions.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesWithCourse,
);
router.delete('/:id', CourseControllers.deleteCourse);
export const CourseRouters = router;
