import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Required email'),
  name: yup.string().min(3).required('Required name'),
  animals: yup
    .string()
    .oneOf(['mačka', 'pas', 'hrčak'], 'Invalid Job Type')
    .required('Required option'),
});
