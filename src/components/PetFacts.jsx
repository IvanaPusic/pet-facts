import cat from '../assets/facts-img.png';
import dog from '../assets/facts-img2.png';

const PetFacts = () => {
  return (
    <section className='pet-facts-section'>
      <h1 className='text-center text-2xl text-secondary min-w-[21.5625rem] pb-[2rem] leading-[3.3125rem] tracking-[0.01275rem]'>
        Daily pet facts - Love!
      </h1>
      <div className='pl-[0.94rem] pr-[1rem] '>
        <article className=' animate-from-left flex flex-col pb-[3.75rem] justify-center align-middle lg:mt-[6.44rem] lg:flex-row lg:justify-center lg:align-middle lg:gap-[1.88rem]'>
          <div className=' lg:transition ease-in-out lg:hover:scale-125 min-w-[21.5625rem] md:mx-auto min-h-[21.5625rem] lg:max-h-[21.5625rem] lg:max-w-[21.5625rem]  xl:max-w-[27.8125rem] xl:max-h-[27.8125rem]'>
            <img src={cat} alt='cat' className='block' />
          </div>
          <div className=''>
            <h2 className=' lg:text-left pb-[1.81rem] pt-[1.88rem] lg:pt-0 text-center text-secondary text-xl tracking-[0.01rem]'>
              The cat
            </h2>
            <p className='text-secondary text-large leading-[1.875rem] tracking-[0.00556rem] min-w-[21.5625rem] xl:max-w-[39.6875rem]  '>
              Cats have been domesticated for around 4,000 years. While they
              were once valued for their hunting abilities, they are now valued
              for their companionship and loving behaviour. While not well
              known, the collective nouns used for cats and kittens are a
              clowder of cats and a kindle of kittens. Our domestic cats are
              known as little cats. They differ from large cats such as lions
              and tigers because they are naturally active at night and can
              purr. Cats are now the most popular pet in the UK and in the US.
            </p>
          </div>
        </article>
        <article className='animate-from-right flex flex-col justify-center align-middle lg:mt-[6.44rem] lg:flex-row-reverse lg:pb-[6.25rem] lg:justify-center lg:align-middle lg:gap-[1.88rem]'>
          <div className=' lg:transition ease-in-out lg:hover:scale-125 min-w-[21.5625rem] min-h-[21.5625rem] lg:max-h-[21.5625rem] lg:max-w-[21.5625rem] md:mx-auto xl:max-w-[27.8125rem] xl:max-h-[27.8125rem]'>
            <img src={dog} alt='dog' className='block' />
          </div>
          <div className=''>
            <h2 className=' lg:text-left pb-[1.81rem] pt-[1.88rem] lg:pt-0 text-center text-secondary text-xl tracking-[0.01rem]'>
              The dog
            </h2>
            <p className='text-secondary text-large leading-[1.875rem] tracking-[0.00556rem] min-w-[21.5625rem] xl:max-w-[39.6875rem]  '>
              Domestic dogs have been companions to people for more than 15,000
              years. There are more than 400 different breeds of dogs. PAWS or
              your local animal shelter has a wide variety of breeds available
              for adoption. The most popular types are the non-pedigree. They
              are extra special because they are one-of-a-kind! In general,
              small dogs live longer than large dogs. Small dogs such as
              terriers may live 20 years. Giant dogs like Great Danes may live
              eight years. The average lifespan for a mixed breed dog is 13 to
              14 years. By making sure dogs have good food, regular veterinary
              care, shelter and a loving family, they will live longer,
              healthier lives.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PetFacts;
