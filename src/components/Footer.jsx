const Footer = () => {
  return (
    <footer className='footer '>
      <div className='footer-wrapper'>
        <div className='flex flex-col justify-center align-center text-center'>
          <h5 className='footer-heading'>pet-facts.com</h5>
          <ul>
            <li className='link'>
              <a href='#'>About us</a>
            </li>
            <li className='link'>
              <a href='#'>careers</a>
            </li>
            <li className='link'>
              <a href='#'>faq</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center align-center text-center'>
          <h5 className='footer-heading'>our brands</h5>
          <ul>
            <li className='link'>
              <a href='#'>super coat</a>
            </li>
            <li className='link'>
              <a href='#'>fancy feast</a>
            </li>
            <li className='link'>
              <a href='#'>pro plan</a>
            </li>
            <li className='link'>
              <a href='#'>beyond</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center align-center text-center'>
          <h5 className='footer-heading'>contact us</h5>
          <ul>
            <li className='link'>
              <a href='#'>contact us</a>
            </li>
            <li className='link'>
              <a href='#'>terms & conditions</a>
            </li>
            <li className='link'>
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
