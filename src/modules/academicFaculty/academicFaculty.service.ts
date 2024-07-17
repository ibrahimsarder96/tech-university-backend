import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (paylod: TAcademicFaculty) => {
  console.log(paylod, 'hi');
  const result = await AcademicFaculty.create(paylod);
  return result;
};
const getAllAcademicFacultyIntoDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyIntoDB = async (id: string) => {
  const result = await AcademicFaculty.findOne({ _id: id });
  return result;
};
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const academicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyIntoDB,
  getSingleAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
};
