import { useEffect, useState } from 'react';
import {
  Cookie,
  Footer,
  FormComponent,
  Gallery,
  Hero,
  PetFacts,
} from './components';
function App() {
  const [cookie, setCookie] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cookie'))) {
      setCookie(false);
    }
  }, [cookie]);

  console.log(localStorage);
  const handleCookie = () => {
    localStorage.setItem('cookie', JSON.stringify(cookie));
    setCookie(false);
    console.log(localStorage);
  };

  return (
    <>
      <Hero />
      <PetFacts />
      <Gallery />
      <FormComponent />
      <Footer />
      {cookie && <Cookie handleCookie={handleCookie} />}
    </>
  );
}

export default App;
