import ContactSvg from "./svg-components/ContactSvg";

function ContactCard({ iconType, children }) {
  return (
    <div className="mb-8 flex w-[330px] max-w-full">
      <div className="mr-6 text-[32px] text-primary">
        <ContactSvg type={iconType} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ContactCard;
