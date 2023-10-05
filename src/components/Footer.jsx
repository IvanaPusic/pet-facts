const Footer = () => {
  return (
    <footer className='bg-dark px-[0.94rem] flex flex-col justify-center align-middle md:px-[10.31rem] pb-[5rem] '>
      <div
        className='pt-[2.25rem] grid grid-cols-1 justify-center align-center md:grid-cols-3 gap-[1.88rem] md:pt-[5rem] pb-[5.94rem] 
      '
      >
        <div className='text-white  flex flex-col justify-center align-center text-center'>
          <h5 className='text-white text-[1.10894rem] uppercase font-bold leading-[2.21788rem] tracking-[0.00494rem] pb-[1.5rem]'>
            pet-facts.com
          </h5>
          <ul>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>About us</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>careers</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>faq</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center align-center text-center'>
          <h5 className='text-white text-[1.10894rem] uppercase font-bold leading-[2.21788rem] tracking-[0.00494rem] pb-[1.5rem]'>
            our brands
          </h5>
          <ul>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>super coat</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>fancy feast</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>pro plan</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>beyond</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center align-center text-center'>
          <h5 className='text-white text-[1.10894rem] uppercase font-bold leading-[2.21788rem] tracking-[0.00494rem] pb-[1.5rem]'>
            contact us
          </h5>
          <ul>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>contact us</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>terms & conditions</a>
            </li>
            <li className='text-white text-[1.10894rem]  leading-[2.21788rem] tracking-[0.00494rem] transition ease-in-out hover:translate-x-1'>
              <a href='#'>privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-white max-w-[57.5rem] text-center'>
        Copyright is a legal right, existing in many countries, that grants the
        creator of an original work exclusive rights to determine whether, and
        under what conditions, this original work may be used by others.
      </p>
    </footer>
  );
};

export default Footer;
