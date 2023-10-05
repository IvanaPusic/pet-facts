import { useFormik } from 'formik';
import { useState } from 'react';
import { Footer, Form, Gallery, Hero, PetFacts } from './components';
import { schema } from './schemas';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log('submitted');
    setIsOpen(true);
  };

  const {
    values,
    handleChange,
    isSubmitting,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      animals: '',
    },
    validationSchema: schema,
    onSubmit,
  });

  const formikHelpers = {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    onSubmit,
  };
  return (
    <>
      {isOpen && (
        <div className='fixed top-0 left-0 h-screen w-full bg-white z-10'>
          modal
        </div>
      )}
      <Hero />
      <PetFacts />
      <Gallery />
      <Form {...formikHelpers} />
      <Footer />
    </>
  );
}

export default App;
