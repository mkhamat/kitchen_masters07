export default function NavBar() {
  return (
    <div className="flex justify-between items-center max-w-[375px] m-auto">
      <div className="flex flex-col">
        <object data="/logo.svg" type=""></object>
        <object data="/logo-name.svg" type=""></object>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <a
              href="/"
              className="text-[#684C45] text-sm font-[500] uppercase mr-5"
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href="/catalogue"
              className="text-[#684C45] text-sm font-[500] uppercase"
            >
              Каталог
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <a href="" className="mr-2">
          <object data="/whatsapp.svg" type="image/svg+xml" />
        </a>
        <a href="">
          <object data="/telegram.svg" type="image/svg+xml" />
        </a>
      </div>
    </div>
  );
}
