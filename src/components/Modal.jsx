import close from '../assets/close.png';
import completed from '../assets/completed.svg';
const Modal = ({ closeModal }) => {
  return (
    <section className='w-screen h-screen fixed top-0 left-0 bg-white z-10 flex flex-col justify-center align-middle gap-7 overflow-hidden '>
      <h1 className='text-xl text-center text-secondary '>Uspješna prijava!</h1>
      <div className='h-[15rem] w-[15rem] mx-auto'>
        <img src={completed} alt='' />
      </div>
      <button onClick={closeModal} className='w-4 h-4 fixed top-4 right-4'>
        <img src={close} alt='closed-btn' />
      </button>
    </section>
  );
};

export default Modal;
