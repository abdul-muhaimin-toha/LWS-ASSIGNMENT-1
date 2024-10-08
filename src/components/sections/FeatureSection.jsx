import FeatureCard from "../FeatureCard";
import SectionHeading from "../SectionHeading";

function FeatureSection() {
  const features = [
    {
      id: 0,
      iconType: "gift",
      title: "Premium Property Listings",
      details:
        "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      btn: {
        title: "Learn More",
        link: "#",
      },
    },
    {
      id: 1,
      iconType: "personalized",
      title: "Personalized Property Matching",
      details:
        "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      btn: {
        title: "Learn More",
        link: "#",
      },
    },
    {
      id: 2,
      iconType: "expert",
      title: "Expert Guidance and Support",
      details:
        "Benefit from the expertise of our dedicated team of real estate professionals.",
      btn: {
        title: "Learn More",
        link: "#",
      },
    },
    {
      id: 3,
      iconType: "virtual",
      title: "Virtual Tours",
      details:
        "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      btn: {
        title: "Learn More",
        link: "#",
      },
    },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionHeading
          topTitle="Features"
          heading="Main Features Of Play"
          subHeading="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
