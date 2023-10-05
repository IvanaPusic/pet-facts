import { useField } from 'formik';

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <>
      <label>
        <span className='text-sm text-secondary'>{label}</span>
        <select
          {...field}
          {...props}
          className='px-[5rem] py-[1rem] rounded-md border border-secondary focus:ring-1 focus:border-blue-400 outline-none'
        />
      </label>
      <span
        className={meta.error && meta.touched ? 'text-pink-600 text-sm' : ''}
      >
        {meta.error}{' '}
      </span>
    </>
  );
};

export default CustomSelect;
