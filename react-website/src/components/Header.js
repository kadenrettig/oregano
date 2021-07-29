function Header() {
  return (
    <header
      id="top"
      class="fixed w-full bg-green-600 text-white md:flex md:justify-between"
    >
      <a class="font-bold block px-8 py-4" href="#top">
        {" "}
        Kaden Rettig
      </a>
      <nav>
        <ul class="md:flex">
          <li>
            <a
              class="font-bold block px-8 py-4 hover:bg-purple-200"
              href="#hero"
            >
              Welcome
            </a>
          </li>
          <li>
            <a
              class="font-bold block px-8 py-4 hover:bg-purple-200 hover:text-red"
              href="#about"
            >
              {" "}
              About
            </a>
          </li>
          <li>
            <a
              class="font-bold block px-8 py-4 hover:bg-purple-300"
              href="#tech-support"
            >
              {" "}
              Staff
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
