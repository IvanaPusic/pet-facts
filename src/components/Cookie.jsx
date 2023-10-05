import { useCookies } from 'react-cookie';

const Cookie = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);

  const giveCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' });
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
      <button className='btn-secondary' onClick={giveCookieConsent}>
        Accept
      </button>
    </div>
  );
};

export default Cookie;
