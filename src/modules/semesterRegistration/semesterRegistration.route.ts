import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { semesterRegistrationController } from './semesterRegistration.controller';
import { semesterRegistrationValidation } from './semesterRegistration.Validation';
const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    semesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  semesterRegistrationController.createSemesterRegistration,
);
router.get('/', semesterRegistrationController.getAllSemesterRegistration);
router.get(
  '/:id',
  semesterRegistrationController.getSingleSemesterRegistration,
);
router.patch(
  '/:id',
  validateRequest(
    semesterRegistrationValidation.updateSemesterRegistrationValidationSchema,
  ),
  semesterRegistrationController.updateSemesterRegistration,
);
router.delete(
  '/:id',
  semesterRegistrationController.deleteSemesterRegistration,
);

export const SemesterRegistrationRoutes = router;
