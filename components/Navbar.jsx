import Link from "next/link";

export default function NavBar({ white }) {
  return (
    <div className="flex justify-between items-center max-w-[375px] m-auto lg:max-w-[600px] lg:m-0">
      {white ? (
        <div className="flex-col">
          <img src="/logo.svg" type=""/>
          <img src="/logo-name-white.svg" type=""></img>
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:hidden">
            <img src="/logo.svg" type=""></img>
            <img src="/logo-name.svg" type=""></img>
          </div>
          <div className="hidden lg:flex">
            <img src="/logo-name-white.svg" type=""></img>
            <img src="/logo.svg" type=""></img>
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
          <a href="https://wa.me/79889366054" target={'_blank'} rel="noreferrer" className="mx-2">
            <object data="/whatsapp-white.svg" type="image/svg+xml"/>
          </a>
          <a href="https://t.me/Kitchenmasters07" target={'_blank'}  rel="noreferrer">
            <object data="/telegram-white.svg" type="image/svg+xml" />
          </a>
        </div>
      ) : (
        <>
          <div className="flex lg:hidden">
            <a href="https://wa.me/79889366054" target={'_blank'}  rel="noreferrer" className="mr-2">
              <object data="/whatsapp.svg" type="image/svg+xml" />
            </a>
            <a href="https://t.me/Kitchenmasters07" target={'_blank'}  rel="noreferrer">
              <span>
                <object data="/telegram.svg" type="image/svg+xml" />
              </span>
            </a>
          </div>
          <div className="hidden lg:flex">
            <a href="https://wa.me/79889366054" target={'_blank'}   rel="noreferrer" className="mr-2">
              <object data="/whatsapp-white.svg" type="image/svg+xml" />
            </a>
            <a href="https://t.me/Kitchenmasters07" target={'_blank'}  rel="noreferrer">
              <object data="/telegram-white.svg" type="image/svg+xml" />
            </a>
          </div>{" "}
        </>
      )}
    </div>
  );
}
