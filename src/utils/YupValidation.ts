import * as Yup from 'yup';
import { containsNumber, containsSpecialCharacter, containsUppercase } from '../../common/validation/lib/StringValidation';

// Ideally use '@common/validation/lib/YupValidators';

export const minLength = 8;
export const passwordValidation = Yup.string()
    .required('Password is required')
    .test('containsUppercase', 'Password needs at least one uppercase letter', containsUppercase)
    .test('containsNumber', 'Password needs at least one number', containsNumber)
    .test('containsSpecialCharacter', 'Password needs at least one special character', containsSpecialCharacter)
    .min(minLength, `Please enter a password which is at least ${minLength} characters`);

export const emailValidation = Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address');
