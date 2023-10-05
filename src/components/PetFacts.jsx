import cat from '../assets/facts-img.png';
import dog from '../assets/facts-img2.png';

const PetFacts = () => {
  return (
    <section className='pet-facts-section'>
      <h1 className='pet-facts-title'>Daily pet facts - Love!</h1>
      <div className='pl-[0.94rem] pr-[1rem] '>
        <article className='cat-card'>
          <div className='cat-img-placeholder'>
            <img src={cat} alt='cat' className='block' />
          </div>
          <div>
            <h2 className=' cat-card-header'>The cat</h2>
            <p className='cat-card-text  '>
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
        <article className='dog-card'>
          <div className='dog-card-placeholder'>
            <img src={dog} alt='dog' className='block' />
          </div>
          <div>
            <h2 className='dog-card-header'>The dog</h2>
            <p className='dog-card-text'>
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
