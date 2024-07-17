import express from 'express';
import { studentControllers } from './student.controller';
import { studentValidations } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.student),
  studentControllers.getAllStudent,
);
router.get('/:id', studentControllers.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentControllers.updateStudent,
);
router.delete('/:id', studentControllers.deleteStudent);

export const StudentRoutes = router;
