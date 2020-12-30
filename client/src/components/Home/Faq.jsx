import react from 'react';

const Faq = () => {
  return (
    <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
      <div className="container px-0 mx-auto sm:px-5">
        <h3 className="mx-6 mt-1 text-xl font-bold text-left text-primary-dark sm:text-3xl md:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>

        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:rounded-lg sm:shadow md:w-2/3">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
            Is this title?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Yes. This is Title LOL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
