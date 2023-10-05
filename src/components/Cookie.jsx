import { useCookies } from 'react-cookie';

const Cookie = () => {
  const [setCookies] = useCookies(['cookieConsent']);

  const giveCookieConsent = () => {
    setCookies('cookieConsent', true, { path: '/' });
  };
  return (
    <div className=' animate-from-bottom fixed bg-[#e8e6e0] bottom-0 right-0 h-[12rem] w-full z-10 p-[1rem] lg:px-[10.31rem] '>
      <h4 className='pb-[1rem] flex gap-[0.2rem] flex-col text-base max-w-[30rem]'>
        We use cookies to enhance your user experience. By using this website,
        you agree to our use of cookies.
        <span>
          <a href='#' className='decoration-solid'>
            Learn More
          </a>
        </span>
      </h4>
      <button
        className='py-2 px-5 bg-secondary text-white transition ease-in-out hover:translate-x-1 hover:bg-transparent border hover:text-secondary hover:border-secondary rounded-md'
        onClick={giveCookieConsent}
      >
        Accept
      </button>
    </div>
  );
};

export default Cookie;
