import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  console.log('test', req.user);
  const result = await AuthServices.loginUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login Successfully!',
    data: result,
  });
});
const changeUserPassword = catchAsync(async (req, res) => {
  const { ...password } = req.body;
  const result = await AuthServices.changePassword(req.user, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User password change Successfully!',
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrieved succesfully!',
    data: result,
  });
});
export const AuthControllers = {
  loginUser,
  changeUserPassword,
  refreshToken,
};
