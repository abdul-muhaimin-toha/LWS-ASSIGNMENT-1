import Button from "./Button";

function AboutContent({ content }) {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 max-w-[540px] lg:mb-0">
        <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
          {content.title}
        </h2>
        {content.details.map((paragraph, i) => (
          <p
            key={i}
            className="mb-6 text-base leading-relaxed text-body-color dark:text-dark-6"
          >
            {paragraph}
          </p>
        ))}
        <Button title={content.btnLink.title} link="" type="blueBtn" />
      </div>
    </div>
  );
}

export default AboutContent;
