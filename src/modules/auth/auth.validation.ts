import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    password: z.string(),
  }),
});
const changePassword = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'User old password is required!',
    }),
    newPassword: z.string({
      required_error: 'User new password is required!',
    }),
  }),
});
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});
export const authValidations = {
  loginValidationSchema,
  refreshTokenValidationSchema,
  changePassword,
};
