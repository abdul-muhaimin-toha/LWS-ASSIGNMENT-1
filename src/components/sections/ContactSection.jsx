import ContactCard from "../ContactCard";
import ContactForm from "../ContactForm";

function ContactSection() {
  const contents = {
    subHeading: "CONTACT US",
    heading: "Let's talk about your problem.",
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark" />
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2" />
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  {contents.subHeading}
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  {contents.heading}
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <ContactCard iconType="map">
                  <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                    Our Location
                  </h5>
                  <p className="text-base text-body-color dark:text-dark-6">
                    401 Broadway, 24th Floor, Orchard Cloud View, London
                  </p>
                </ContactCard>
                <ContactCard iconType="message">
                  <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                    How Can We Help?
                  </h5>
                  <p className="text-base text-body-color dark:text-dark-6">
                    info@yourdomain.com
                  </p>
                  <p className="mt-1 text-base text-body-color dark:text-dark-6">
                    contact@yourdomain.com
                  </p>
                </ContactCard>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
