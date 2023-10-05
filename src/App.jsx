import { useCookies } from 'react-cookie';
import {
  Cookie,
  Footer,
  FormComponent,
  Gallery,
  Hero,
  PetFacts,
} from './components';
function App() {
  const [cookies] = useCookies(['cookieConsent']);

  return (
    <section className='overflow:hidden'>
      <Hero />
      <PetFacts />
      <Gallery />
      <FormComponent />
      <Footer />
      {!cookies.cookieConsent && <Cookie />}
    </section>
  );
}

export default App;
