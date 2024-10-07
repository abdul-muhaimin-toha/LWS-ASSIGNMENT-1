import AboutContent from "./AboutContent";
import AboutGallery from "./AboutGallery";

function AboutSection() {
  const content = {
    title: "Innovative Tools for Real Estate Excellence",
    details: [
      "The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market with interactive guides and personalized consultations led by industry experts.",
      "The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.",
    ],
    btnLink: {
      title: "Know More",
      link: '"javascript:void(0)"',
    },
    yearOfExperience: "09",
    images: [
      "/public/images/about/about-image-01.jpg",
      "/public/images/about/about-image-02.jpg",
    ],
  };

  return (
    <section
      id="about"
      className="bg-gray-1 dark:bg-dark-2 pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <AboutContent content={content} />
            <AboutGallery
              experience={content.yearOfExperience}
              images={content.images}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
