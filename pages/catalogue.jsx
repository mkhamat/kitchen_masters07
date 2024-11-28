import Head from "next/head";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import OrderModal from "../components/Modal.jsx";
import directus from "./api/directus";

export default function CataloguePage() {
  const menuItems = [
    { title: "Кухни", icon: "/work-2.svg" },
    { title: "Шкафы", icon: "/work-1.svg" },
    { title: "Мебель для детской", icon: "/work-6.svg" },
    { title: "Техника", icon: "/work-4.svg" },
  ];
  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState([]);
  const [sale, setSale] = useState();
  const [page, setPage] = useState(1);

  const [modalSwitch, setModalSwitch] = useState(false);
  const [feedback, setFeedback] = useState({
    name: null,
    email: null,
    number: null,
    item: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("directus/mailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Заявка с сайта <orders@kitchen-masters07.com>",
        to: "info@kitchen-masters07.com",
        subject: `Заявка: ${feedback.item}`,
        template: {
          name: "default-template",
          data: {
            name: `${feedback.name}`,
            number: `${feedback.number}`,
            email: `${feedback.email}`,
          },
        },
      }),
    });
    alert("Заявка успешно отправлена!");
    closeModal();
  };

  const closeModal = () => {
    setFeedback({
      name: null,
      email: null,
      number: null,
      item: null,
    });
    setModalSwitch(false);
  };
  const openModal = () => {
    setModalSwitch(true);
  };

  const handleOrder = (itemName) => {
    setFeedback({ ...feedback, item: itemName });
    openModal();
  };

  const fetchItems = async (type) => {
    const sale = await directus.items("sale3").readByQuery();
    const res = await directus.items("catalogue").readByQuery({
      limit: 6,
      page: page,
      filter: {
        _and: [{ type: { _eq: type } }],
      },
    });
    setItems(res.data);
    setSale(sale.data);
  };

  useEffect(() => {
    fetchItems(selected);
  }, [selected, page]);

  return (
    <>
      <Head>
        <title>Каталог | Кухни и мебель в Нальчике, изготовление на заказ в Нальчике и Кабардино-Балкарии | Kitchen Masters 07</title>
        <meta
          name="description"
          content="Выбор готовых вариантов мебели и кухни в Нальчике, заказ по номеру телефона + 7 (988) 936 60 54"
        />
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
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[500px] max-w-[300px] lg:grid-cols-4 lg:max-w-[900px] m-auto p-8">
          {menuItems.map((item, i) => {
            return (
              <FilterItem
                key={item + i}
                title={item.title}
                icon={item.icon}
                selected={i == selected}
                set={() => {
                  setSelected(i);
                  setPage(1);
                }}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-[1400px] m-auto">
          <OrderModal
            modalSwitch={modalSwitch}
            closeModal={closeModal}
            item={feedback.item}
            setFeedback={setFeedback}
            feedback={feedback}
            handleSubmit={handleSubmit}
          />
          {items &&
            items.map((item) => (
              <CatalogueItem
                key={item.title + 1}
                title={item.title}
                description={item.description}
                img={item.image}
                price={item.price}
                handleOrder={handleOrder}
              />
            ))}
        </div>
        <Pagination page={page} setPage={setPage} items={items} limit={6} />
      </section>
      <section className="bg-[#c1b8b2] flex flex-col-reverse lg:flex-row items-center justify-center my-14 p-6">
        {sale && (
          <>
            <div className="p-10">
              <img
                className="w-[500px] h-[400px] object-cover"
                src={`/assets/${sale.image}`}
                alt={sale.title}
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-black font-extralight text-4xl text-center lg:text-left">
                {sale.title}
              </p>
              <p className="text-black font-bold text-4xl py-10">
                {sale.price} ₽
              </p>
              <button
                onClick={() => handleOrder(sale.title)}
                className="bg-[#66A018] text-white font-[500] py-3 px-10"
              >
                Заказать
              </button>
            </div>
          </>
        )}
      </section>
      <footer className="flex flex-col justify-center items-center">
        <img src="/logo-big.png" alt="Логотип" />
        <img src="/name-big.png" alt="Логотип" />
        <nav>
          <ul className="flex my-6">
            <li className="text-[#222] text-sm font-[500] uppercase mr-5">
              <Link href="/">Главная</Link>
            </li>
            <li className="text-[#222]  text-sm font-[500] uppercase">
              <Link href="/catalogue">Каталог</Link>
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

function FilterItem({ selected, icon, title, set }) {
  return (
    <div
      onClick={set}
      className={`border-[#8E8178] p-2 border-[1px] flex justify-between lg:justify-around items-center font-[500]
       hover:bg-slate-200 min-h-[80px] cursor-pointer ${
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

function CatalogueItem({ title, description, price, img, handleOrder }) {
  return (
    <div className="catalogue-shadow flex flex-col items-start w-[300px] md:w-[350px]">
      <img
        className="w-[350px] h-[300px] object-cover"
        src={`/assets/${img}`}
        alt={title+' '+price+' руб.'}
      />
      <div className="p-2">
        <p className="text-[#252A2E] font-[700] text-2xl py-2">{title}</p>
        <p className="text-[#252A2E] text-lg font-[300]">{description}</p>
        <p className="text-[#252A2E] text-2xl py-2 font-[700]">
          От {price} руб.
        </p>
      </div>
      <div
        onClick={() => handleOrder(title)}
        className="bg-[#66A018] text-center text-[#fff] p-3 self-stretch mt-auto"
      >
        ОФОРМИТЬ ЗАКАЗ
      </div>
    </div>
  );
}

function Pagination({ page, setPage, limit, items }) {
  const isLastPage = items.length < limit;
  const handlePrev = () => {
    if (page >= 2) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (!isLastPage) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div>
      <ul className="m-auto text-center">
        {page >= 2 && (
          <button
            onClick={handlePrev}
            className={`border-[1px] px-3 py-1 w-[300px] lg:mr-10 text-xl border-[#7D8E66] text-[#7D8E66]`}
          >
            {"Предыдущая страница"}
          </button>
        )}
        {!isLastPage && (
          <button
            onClick={handleNext}
            className={`border-[1px] px-3 w-[300px] py-1 text-xl border-[#7D8E66] text-[#7D8E66]`}
          >
            {"Следующая страница"}
          </button>
        )}
      </ul>
    </div>
  );
}
