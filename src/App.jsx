import { useEffect, useState } from 'react';
import {
  Cookie,
  Footer,
  FormComponent,
  Gallery,
  Hero,
  Modal,
  PetFacts,
} from './components';

function App() {
  const [cookie, setCookie] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // get cookies
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cookie'))) {
      setCookie(false);
    }
  }, [cookie]);

  // set cookies
  const handleCookie = () => {
    localStorage.setItem('cookie', JSON.stringify(cookie));
    setCookie(false);
    console.log(localStorage);
  };

  // openModal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className='overflow-hidden'>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <Hero />
      <PetFacts />
      <Gallery />
      <FormComponent openModal={openModal} />
      <Footer />
      {cookie && <Cookie handleCookie={handleCookie} />}
    </section>
  );
}

export default App;
