const Form = ({
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors,
  touched,
  isSubmitting,
}) => {
  console.log(errors.name);
  return (
    <section className='flex flex-col justify-center align-center bg-primary'>
      <form onSubmit={handleSubmit}>
        <label className='relative block'>
          <input
            className=' peer placeholder:text-open-sans placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm'
            placeholder='Name'
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p
            className={
              errors.name && touched.name
                ? 'peer-invalid:visible text-pink-600 text-sm'
                : 'invisible '
            }
          >
            {errors.name}
          </p>
        </label>
        <label className='relative block'>
          <input
            className=' peer placeholder:text-open-sans placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm'
            placeholder='Email'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p
            className={
              errors.email && touched.email
                ? 'peer-invalid:visible text-pink-600 text-sm'
                : 'invisible '
            }
          >
            {errors.email}
          </p>
        </label>
        <label
          htmlFor='countries'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          <select
            id='animals'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleChange}
            onBlur={handleBlur}
            required
          >
            <option value={values.animals[0]}>Mačka</option>
            <option value={values.animals[1]}>Pas</option>
            <option value={values.animals[2]}>Hrčak</option>
          </select>
          {errors.animals && (
            <p className='text-pink-600 text-sm'>{errors.animals}</p>
          )}
        </label>

        <button
          type='submit'
          disabled={isSubmitting}
          className='disabled px-10 py-3 text-white font-bold bg-secondary rounded-md'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
