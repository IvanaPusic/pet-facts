import { Form, Formik } from 'formik';
import { schema } from '../schemas';
import CustomEmail from './CustomEmail';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const FormComponent = () => {
  return (
    <section className='form-section'>
      <h3 className='text-secondary text-xl text-center pb-[2rem] '>
        Choose your pet!
      </h3>
      <Formik
        initialValues={{ name: '', email: '', animals: '' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-[1.25rem] mx-auto'>
            <CustomInput
              label='name'
              name='name'
              type='text'
              placeholder='Enter your username'
            />
            <CustomEmail
              label='email'
              name='email'
              type='email'
              placeholder='Enter your email'
            />
            <CustomSelect name='animals' placeholder='Please select an animal'>
              <option value=''>Please select an animal</option>
              <option value='mačka'>Mačka</option>
              <option value='pas'>Pas</option>
              <option value='hrčak'>Hrčak</option>
            </CustomSelect>
            <button
              disabled={isSubmitting}
              type='submit'
              className='btn-secondary max-w-[7rem]'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormComponent;
