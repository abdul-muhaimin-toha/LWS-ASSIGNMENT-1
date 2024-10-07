import Button from "./Button";

function Navbar() {
  const pageLinks = [
    { id: 0, title: "Home", link: "#home" },
    { id: 1, title: "About", link: "#about" },
    { id: 2, title: "Pricing", link: "#pricing" },
    { id: 3, title: "Blog", link: "blog-grids.html" },
  ];

  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="/public/images/logo/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>
            <ul className="hidden lg:flex">
              {pageLinks.map((pageLink) => (
                <li className="group relative" key={pageLink.id}>
                  <a
                    href={pageLink.link}
                    className="ud-menu-scroll text-dark group-hover:text-primary mx-8 flex py-2 text-base font-medium lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10 dark:text-white"
                  >
                    {pageLink.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="sm:flex">
              <a
                href="signin.html"
                className="flex-1 px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <Button title="Sign Up" link="signup.html" type="hoverNavbtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
