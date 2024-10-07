import FeatureSvg from "./svg-components/FeatureSvg";

function FeatureCard({ feature }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="group mb-12">
        <div className="bg-primary relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px]">
          <span className="bg-primary absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-opacity-20 duration-300 group-hover:rotate-45" />
          <FeatureSvg type={feature.iconType} />
        </div>
        <h4 className="text-dark mb-3 text-xl font-bold dark:text-white">
          {feature.title}
        </h4>
        <p className="text-body-color dark:text-dark-6 mb-8 lg:mb-9">
          {feature.details}
        </p>
        <a
          href=""
          className="text-dark hover:text-primary dark:hover:text-primary text-base font-medium dark:text-white"
        >
          {feature?.btn?.title}
        </a>
      </div>
    </div>
  );
}

export default FeatureCard;
