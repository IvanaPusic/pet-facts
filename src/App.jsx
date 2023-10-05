import { useFormik } from 'formik';
import { useCookies } from 'react-cookie';
import { Cookie, Footer, Form, Gallery, Hero, PetFacts } from './components';
import { schema } from './schemas';
function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(['cookieConsent']);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    // console.log('submitted');
    // setIsOpen(true);
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
    <section className='overflow:hidden'>
      {/* {isOpen && (
        <div className='fixed top-0 left-0 h-screen w-full bg-white z-10'>
          modal
        </div>
      )} */}
      <Hero />
      <PetFacts />
      <Gallery />
      <Form {...formikHelpers} />
      <Footer />
      {!cookies.cookieConsent && <Cookie />}
    </section>
  );
}

export default App;
