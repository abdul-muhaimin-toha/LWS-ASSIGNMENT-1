function Button({ title, link, type }) {
  let styling;

  if (type === "hoverNavbtn") {
    styling =
      "hover:text-dark rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100";
  }

  if (type === "hoverHeroBtn") {
    styling =
      "hover:text-dark flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white";
  }

  if (type === "whiteHeroBtn") {
    styling =
      "text-dark shadow-1 hover:bg-gray-2 hover:text-body-color inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium transition duration-300 ease-in-out";
  }

  return (
    <a href={link} className={styling}>
      {title}
    </a>
  );
}

export default Button;
