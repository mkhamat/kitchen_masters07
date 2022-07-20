import Head from "next/head";
import NavBar from "../components/Navbar";

export default function CataloguePage() {
  return (
    <>
      <Head>
        <title>Каталог - Kitchen Masters</title>
        <meta name="description" content="Каталог кухонной мебели в Нальчике" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="">
        <div className="p-6 text-center bg-[url('/ct-bg-sm.png')] lg:bg-[url('/ct-bg.png')] bg-cover h-screen">
          <NavBar white />
          <div className="py-24">
            <h1 className="font-[700] text-4xl text-center text-[#fff]">
              Каталог
            </h1>
          </div>
        </div>
      </header>
      <section>
        <div className="grid grid-cols-1 max-w-[300px] lg:grid-cols-4 lg:max-w-[900px] m-auto p-8">
          <FilterItem title="Кухни" icon={"/work-2.svg"} selected />
          <FilterItem title="Шкафы" icon={"/work-1.svg"} />
          <FilterItem title="Фурнитура" icon={"/work-6.svg"} />
          <FilterItem title="Техника" icon={"/work-4.svg"} />
        </div>
      </section>
      <section>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-[1400px] m-auto">
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
          <CatalogueItem
            title='Шкаф купе "Дизель"'
            description="Изготовление до 7 дней"
            price="12500"
            img="/image 2.png"
          />
        </div>
        <Pagination count={10} page={1} />
      </section>
      <section className="bg-[#c1b8b2] flex flex-col-reverse lg:flex-row items-center justify-center my-14 p-6">
        <div className="p-10">
          <img src="/sale2.png" alt="" />
        </div>
        <div>
          <p className="text-black font-extralight text-4xl text-center lg:text-left">
            Духовой шкаф Maunfeld AEOH.749B2
          </p>
          <p className="text-black font-bold text-4xl py-10">33999 ₽</p>
          <a className="bg-[#66A018] text-white font-[500] py-3 px-10">
            Заказать
          </a>
        </div>
      </section>
      <footer className="flex flex-col justify-center items-center">
        <img src="/logo-big.png" alt="" />
        <img src="/name-big.png" alt="" />
        <nav>
          <ul className="flex my-6">
            <li className="text-[#222] text-sm font-[500] uppercase mr-5">
              <a href="/">Главная</a>
            </li>
            <li className="text-[#222]  text-sm font-[500] uppercase">
              <a href="/catalogue">Каталог</a>
            </li>
          </ul>
        </nav>
        <p className="text-[#222]  text-sm font-[500] ">+ 7 (988) 936 60 54</p>
        <div className="flex my-6">
          <a href="" className="mr-2">
            <object data="/whatsapp.svg" type="image/svg+xml" />
          </a>
          <a href="">
            <object data="/telegram.svg" type="image/svg+xml" />
          </a>
        </div>
      </footer>
    </>
  );
}

function FilterItem({
  selected,
  icon,
  title,
}: {
  selected?: boolean;
  icon: string;
  title: string;
}) {
  return (
    <div
      className={`border-[#8E8178] p-2 border-[1px] flex justify-between lg:justify-around items-center font-[500] hover:bg-slate-200 min-h-[80px] ${
        selected && "bg-[#A5B697] border-[#A5B697]"
      } `}
    >
      <span className={selected ? "text-[#fff]" : "text-[#8E8178]"}>
        {title}
      </span>
      <object data={icon} type=""></object>
    </div>
  );
}

function CatalogueItem({
  title,
  description,
  price,
  img,
}: {
  title: string;
  description: string;
  price: string;
  img: string;
}) {
  return (
    <div className="catalogue-shadow w-[390px] flex flex-col items-center">
      <img src={img} alt="" />
      <p className="text-[#252A2E] font-[700] text-2xl py-2">{title}</p>
      <p className="text-[#252A2E] text-lg font-[300]">{description}</p>
      <p className="text-[#252A2E] text-2xl py-2 font-[700]">От {price} руб.</p>
      <div className="bg-[#66A018] text-center text-[#fff] p-3 self-stretch">
        ОФОРМИТЬ ЗАКАЗ
      </div>
    </div>
  );
}

function Pagination({ count, page }: { count: number; page: number }) {
  return (
    <div>
      <ul className="m-auto text-center">
        <span className="border-[1px] px-3 py-1 text-xl border-[#7D8E66] text-[#7D8E66]">
          {"<"}
        </span>
        <a
          className="border-[1px] px-3 py-1 text-xl border-[#7D8E66] text-[#7D8E66] mx-2"
          // key={i}
          // onClick={(e) => handlePageChange(e, p)}
          // className={`${styles.page} ${active && styles.active}`}
        >
          {1}
        </a>
        <a
          className="border-[1px] px-3 py-1 text-xl border-[#7D8E66] text-[#7D8E66] mx-2"
          // key={i}
          // onClick={(e) => handlePageChange(e, p)}
          // className={`${styles.page} ${active && styles.active}`}
        >
          {2}
        </a>
        <a
          className="border-[1px] px-3 py-1 text-xl border-[#7D8E66] text-[#7D8E66] mx-2"
          // key={i}
          // onClick={(e) => handlePageChange(e, p)}
          // className={`${styles.page} ${active && styles.active}`}
        >
          {3}
        </a>
        <span className="border-[1px] px-3 py-1 text-xl border-[#7D8E66] text-[#7D8E66]">
          {">"}
        </span>
      </ul>
    </div>
  );
}

// function Pagination({ count, page }: { count: number, page: number }) {
//   let pages = Array(Math.floor(count / 18)).fill(1); // кол-во страниц

//   const getRange = () => {
//       let start = Math.floor((page - 1) / 5) * 5;
//       return new Array(5).fill(1).map((_, idx) => start + idx + 1).filter(v => v < pages.length + 2)
//   }

//   console.log(getRange());

//   const history = useHistory()
//   const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
//       e.preventDefault()
//       history.push(`/news/${page}`)
//   }

//   const handlePrev = () => page > 1 && history.push(`/news/${~~page - 1}`)
//   const handleNext = () => page < pages.length && history.push(`/news/${~~page + 1}`)

//   return (
//       <div className={styles.pagination}>
//           <ul className={styles.pages}>
//               <a onClick={handlePrev} className={`${styles.prev} ${styles.page} ${page == 1 ? styles.disabled : ''}`}>{"<"}</a>
//               {getRange().map((p: any, i: any) => {
//                   let active = (p == page)
//                   return (
//                       <a key={i} onClick={(e) => handlePageChange(e, p)} className={`${styles.page} ${active && styles.active}`}>{p}</a>
//                   )
//               })}
//               <a onClick={handleNext} className={`${styles.prev} ${styles.page} ${page == pages.length + 1 && styles.disabled}`}>{">"}</a>
//           </ul>
//       </div>
//   )
// }
