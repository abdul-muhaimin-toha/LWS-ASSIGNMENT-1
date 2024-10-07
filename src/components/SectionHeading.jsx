function SectionHeading({ topTitle, heading, subHeading }) {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="text-primary mb-2 block text-lg font-semibold">
            {topTitle}
          </span>
          <h2 className="text-dark mb-3 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white">
            {heading}
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
