import { useField } from 'formik';

const CustomEmail = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <label className='block'>
      <span className='block text-sm font-medium text-secondary capitalize'>
        {label}
      </span>
      <input
        {...field}
        {...props}
        className='peer px-[5rem] py-[1rem] rounded-md border border-secondary focus:ring-1 focus:border-blue-400 outline-none'
      />
      <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
        {meta.error}
      </p>
    </label>
  );
};

export default CustomEmail;
