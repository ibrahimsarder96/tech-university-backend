import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { studentRoutes } from "../modules/student/student.route";
import { semesterRouter } from "../modules/academicSemester/academicSemester.route";
import { facultyRouter } from "../modules/academicFaculty/academicFaculty.route";
import { departmentRouter } from "../modules/academicDepartment/academicDepartment.route";
import { courseRouter } from "../modules/course/course.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { FacultyRoutes } from "../modules/faculty/faculty.route";
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
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/faculties",
    route: FacultyRoutes,
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
  {
    path: "/courses",
    route: courseRouter,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
