import Button from "../Button";
import MeetingSvg from "../svg-components/MeetingSvg";

function MeetingSection() {
  const content = {
    subtitle: "What Are You Looking For?",
    titleMain: "Get Started Now",
    details:
      "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.",
    btn: {
      link: "#",
      title: "Let's have a meeting",
    },
  };
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>{content.subtitle}</span>
                  <br />
                  <span className="text-3xl font-normal md:text-[40px]">
                    {content.titleMain}
                  </span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  {content.details}
                </p>
                <Button title={content?.btn?.title} link="" type="ctaBtn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <MeetingSvg type="left" />
        </span>
        <span className="absolute bottom-0 right-0">
          <MeetingSvg type="right" />
        </span>
      </div>
    </section>
  );
}

export default MeetingSection;
