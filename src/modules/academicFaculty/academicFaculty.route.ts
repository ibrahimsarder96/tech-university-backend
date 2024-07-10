import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidaions } from './academicFaculty.Validation';
import { facultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidaions.createAcademicFacultyValidation),
  facultyControllers.createAcademicFaculty,
);
router.get('/', facultyControllers.getAllAcademicFaculty);
router.get('/:semesterId', facultyControllers.getSingleAcademicFaculty);
router.patch(
  '/:semesterId',
  validateRequest(academicFacultyValidaions.updateAcademicFacultyValidation),
  facultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRouters = router;
