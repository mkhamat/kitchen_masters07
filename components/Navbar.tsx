import Link from "next/link";

export default function NavBar({ white }: { white?: boolean }) {
  return (
    <div className="flex justify-between items-center max-w-[375px] m-auto lg:max-w-[600px] lg:m-0">
      {white ? (
        <div className="flex-col">
          <object data="/logo.svg" type=""></object>
          <object data="/logo-name-white.svg" type=""></object>
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:hidden">
            <object data="/logo.svg" type=""></object>
            <object data="/logo-name.svg" type=""></object>
          </div>
          <div className="hidden lg:flex">
            <object data="/logo-name-white.svg" type=""></object>
            <object data="/logo.svg" type=""></object>
          </div>
        </>
      )}
      <nav>
        <ul className="flex">
          <li
            className={`text-[${
              white ? "#fff" : "#684C45"
            }] lg:text-[#fff] text-sm font-[500] uppercase mr-5`}
          >
            <Link href="/">Главная</Link>
          </li>
          <li
            className={`text-[${
              white ? "#fff" : "#684C45"
            }] lg:text-[#fff] text-sm font-[500] uppercase`}
          >
            <Link href="/catalogue">Каталог</Link>
          </li>
        </ul>
      </nav>

      {white ? (
          <div className="flex">
            <a href="" className="mx-2">
              <object data="/whatsapp-white.svg" type="image/svg+xml" />
            </a>
            <a href="">
              <object data="/telegram-white.svg" type="image/svg+xml" />
            </a>
          </div>
      ) : (
        <>
          <div className="flex lg:hidden">
            <a href="" className="mr-2">
              <object data="/whatsapp.svg" type="image/svg+xml" />
            </a>
            <a href="">
              <object data="/telegram.svg" type="image/svg+xml" />
            </a>
          </div>
          <div className="hidden lg:flex">
            <a href="" className="mr-2">
              <object data="/whatsapp-white.svg" type="image/svg+xml" />
            </a>
            <a href="">
              <object data="/telegram-white.svg" type="image/svg+xml" />
            </a>
          </div>{" "}
        </>
      )}
    </div>
  );
}
