import Button from "./Button";

function AboutContent({ content }) {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 max-w-[540px] lg:mb-0">
        <h2 className="text-dark mb-5 text-3xl font-bold leading-tight sm:text-[40px] sm:leading-[1.2] dark:text-white">
          {content.title}
        </h2>
        {content.details.map((paragraph, i) => (
          <p
            key={i}
            className="text-body-color dark:text-dark-6 mb-6 text-base leading-relaxed"
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
