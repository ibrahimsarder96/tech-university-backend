import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { studentRoutes } from "../modules/student/student.route";
import { semesterRouter } from "../modules/academicSemester/academicSemester.route";

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
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
