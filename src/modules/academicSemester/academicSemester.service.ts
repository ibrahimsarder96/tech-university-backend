import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicServiceIntoDB = async (paylod: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[paylod.name] !== paylod.code) {
    throw new Error("Semester code Invelid");
  }
  const result = await AcademicSemester.create(paylod);
  return result;
};
const getAllAcademicServiceIntoDB = async () => {
  const result = await AcademicSemester.find();
  console.log(result)
  return result;
};
const singleGetAcademicServiceIntoDB = async (id: string) => {
  console.log(id)
  const result = await AcademicSemester.findOne({_id: id});
  return result;
};
const updateAcademicServiceIntoDB = async (id: string, payload: Partial<TAcademicSemester>) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({_id: id}, payload, {
    new: true
  });
  return result;
};
export const academicSemesterServices = {
  createAcademicServiceIntoDB,
  getAllAcademicServiceIntoDB,
  singleGetAcademicServiceIntoDB,
  updateAcademicServiceIntoDB
};