import FAQSvg from "./svg-components/FAQSvg";

function FAQCard() {
  return (
    <div className="mb-12 flex lg:mb-[70px]">
      <div className="bg-primary mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
        <FAQSvg type="question" />
      </div>
      <div className="w-full">
        <h3 className="text-dark mb-6 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          Is TailGrids Well-documented?
        </h3>
        <p className="text-body-color dark:text-dark-6 text-base">
          It takes 2-3 weeks to get your first blog post ready. That includes
          the in-depth research &amp; creation of your monthly content ui/ux
          strategy that we do writing your first blog post.
        </p>
      </div>
    </div>
  );
}

export default FAQCard;
