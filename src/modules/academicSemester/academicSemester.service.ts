import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (paylod: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[paylod.name] !== paylod.code) {
    throw new Error('Semester code Invelid');
  }
  const result = await AcademicSemester.create(paylod);
  return result;
};
const getAllAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
