import express from 'express';
import { studentControllers } from './student.controller';
import { studentValidations } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', studentControllers.getAllStudent);
router.get('/:id', studentControllers.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentControllers.updateStudent,
);
router.delete('/:id', studentControllers.deleteStudent);

export const StudentRoutes = router;
