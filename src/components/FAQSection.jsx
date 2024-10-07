import FAQCard from "./FAQCard";
import FAQSvg from "./svg-components/FAQSvg";

function FAQSection() {
  const contents = {
    subHeading: "FAQ",
    heading: "Any Questions? Look Here",
    details:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  return (
    <section className="dark:bg-dark relative z-20 overflow-hidden bg-white pb-8 pt-20 lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                {contents.subHeading}
              </span>
              <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px] dark:text-white">
                {contents.heading}
              </h2>
              <p className="text-body-color dark:text-dark-6 mx-auto max-w-[485px] text-base">
                {contents.details}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FAQCard />
            <FAQCard />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQCard />
            <FAQCard />
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FAQSvg type="bg" color="#13C296" />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FAQSvg type="bg" color="#3758F9" />
        </span>
      </div>
    </section>
  );
}

export default FAQSection;
