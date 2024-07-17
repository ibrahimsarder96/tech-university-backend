import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicSemesterRouters } from '../modules/academicSemester/academicSemester.route';
import { CourseRouters } from '../modules/course/course.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { AcademicFacultyRouters } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRouters } from '../modules/academicDepartment/academicDepartment.route';
import { loginRoutes } from '../modules/auth/auth.route';
const router = express.Router();

const modulesRoute = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/semesters',
    route: AcademicSemesterRouters,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRouters,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRouters,
  },
  {
    path: '/courses',
    route: CourseRouters,
  },
  {
    path: '/semester-registration',
    route: SemesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: OfferedCourseRoutes,
  },
  {
    path: '/user-login',
    route: loginRoutes,
  },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
