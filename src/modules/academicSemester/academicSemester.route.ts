import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidaions } from './academicSemester.validation';
import { semesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidaions.createAcademicSemesterValidation),
  semesterControllers.createAcademicSemester,
);
router.get('/', semesterControllers.getAllAcademicSemester);
router.get('/:semesterId', semesterControllers.getSingleAcademicSemester);
router.patch(
  '/:semesterId',
  validateRequest(academicSemesterValidaions.updateAcademicSemesterValidation),
  semesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRouters = router;
