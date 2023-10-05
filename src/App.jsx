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
  // const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(['cookieConsent']);

  return (
    <section className='overflow:hidden'>
      {/* {isOpen && (
        <div className='fixed top-0 left-0 h-screen w-full bg-white z-10'>
          modal
        </div>
      )} */}
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
