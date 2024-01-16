import * as z from 'zod';

// messge
const REQUIRED = "Field name can't be blank";
const LOGIN_ID_LENGTH = 'Login Id must be 6 number digits';

// const
const required = z.string().min(1, { message: REQUIRED });
const requiredNum = z.number().min(1, { message: REQUIRED });
const loginId = z.string().length(6, { message: LOGIN_ID_LENGTH });
const comment = z
  .string()
  .min(1, { message: 'Comment must be at least 1 characters.' })
  .max(250, { message: 'Comment must not exceed 250 characters.' });

export const loginSchema = z.object({
  loginId,
  password: z.string().min(1, { message: 'Please enter password.' }),
});

export const createProductSchema = z.object({
  title: required,
  description: required,
  // price: required,
  // discountPercentage: required,
  // stock: required,
});
