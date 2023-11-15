export function Navigation() {
  return (
    <header className="bg-white py-4 px-4">
      <nav className="flex items-center justify-between">
          <div className="flex items-center">
          <a href="/">
          <img className="w-16" src="img/language.png" alt="" />
          </a>
            <a className="text-xl ml-8 relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href="/">
              Translatee
            </a>
            <a className="text-xl ml-8 relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href="/">
              About me
            </a>
          </div>
          <div className="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/LisovskiyIvan">
              <img className="mr-10 w-14 transition ease-in-out delay-50  hover:scale-110  duration-300 cursor-pointer" src="img/logo.png" alt="github link" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://t.me/daymewannabe">
              <img className="mr-6 w-14 transition ease-in-out delay-50  hover:scale-110  duration-300 cursor-pointer" src="img/paper.png" alt="tg link" />
            </a>
          </div>
      </nav>
    </header>
  );
}
