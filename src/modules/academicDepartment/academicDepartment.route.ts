import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentControllers } from './academicDepartment.controller';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  academicDepartmentControllers.createAcademicDepartment,
);
router.get('/', academicDepartmentControllers.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidation,
  ),
  academicDepartmentControllers.updateAcademicDepartment,
);
export const AcademicDepartmentRouters = router;
