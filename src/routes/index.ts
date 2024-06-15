import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { studentRoutes } from "../modules/student/student.route";
import { semesterRouter } from "../modules/academicSemester/academicSemester.route";
import { facultyRouter } from "../modules/academicFaculty/academicFaculty.route";
import { departmentRouter } from "../modules/academicDepartment/academicDepartment.route";
const router = express.Router();

const modulesRoute = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: studentRoutes,
  },
  {
    path: "/semesters",
    route: semesterRouter,
  },
  {
    path: "/faculties",
    route: facultyRouter,
  },
  {
    path: "/academic-departments",
    route: departmentRouter,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
