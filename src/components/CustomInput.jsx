import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label className='block'>
      <span className='block text-sm font-medium text-secondary capitalize'>
        {label}
      </span>
      <input
        {...field}
        {...props}
        className='peer border border-secondary px-[5rem] py-[1rem] rounded-md focus:ring-1 focus:border-blue-400 outline-none'
      />
      <p
        className={
          meta.error && meta.touched
            ? 'mt-2 invisible peer-invalid:visible text-pink-600 text-sm'
            : 'text-pink-600'
        }
      >
        {meta.error}
      </p>
    </label>
  );
};

export default CustomInput;
