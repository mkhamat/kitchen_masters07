import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import SimpleSlider from "../components/Carousel";
import NavBar from "../components/Navbar";
import directus from "./api/directus";

const Home = () => {
  const [sale, setSale] = useState<any>([]);

  const fetch = async () => {
    const res1 = await directus.items("sale1").readByQuery();
    const res2 = await directus.items("sale2").readByQuery();
    setSale([res1.data, res2.data]);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Head>
        <title>Kitchen Masters</title>
        <meta
          name="description"
          content="Изготовление мебели на заказ в Нальчике и КБР"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="lg:flex">
        <div className=" p-6 text-center bg-[url('/header-mobile.png')] bg-cover h-screen lg:bg-none lg:bg-[#A5B697] lg:w-[60%] lg:max-w-[600px]">
          <NavBar />
          <div className="py-24">
            <img className="hidden lg:inline" src="/logo-big.png" alt="" />
            <h1 className="font-[700] text-4xl text-[#252A2E] text-center lg:text-[#fff]">
              Изготовление мебели{" "}
            </h1>
            <p className="font-[300] text-xl text-center lg:text-[#fff]">
              По индвидуальному заказу
            </p>
          </div>
          <Link href="/catalogue">
            <a className="bg-[#66A018] text-[#fff] font-[500] py-3 px-10">
              Перейти в каталог
            </a>
          </Link>
        </div>
        <div className="hidden lg:block bg-[url('/header-pic.png')] bg-cover h-screen w-full relative">
          <div className="max-w-[300px] bg-[#EFF0EB] p-4 shadow absolute bottom-[30%] right-[20%]">
            <h3 className="text-[#252A2E] font-[700] text-xl text-center uppercase p-4">
              Мы небольшая группа людей с Нальчика, любящих свою работу
            </h3>
          </div>
        </div>
      </header>
      <section>
        <h2 className="text-[#252A2E] font-[700] text-3xl text-center py-8">
          Что мы можем
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 p-10">
          <div className="flex justify-between py-10 mx-auto items-center">
            <object data="/work-1.svg" type=""></object>
            <div className="font-[700] text-xl text-center ml-16">
              Шкафы купе
            </div>
          </div>
          <div className="flex justify-between py-10 mx-auto items-center">
            <object data="/work-2.svg" type=""></object>
            <div className="font-[700] text-xl text-right md:text-center ml-4">
              Кухонная мебель
            </div>
          </div>
          <div className="flex justify-between py-10 mx-auto items-center">
            <object data="/work-3.svg" type=""></object>
            <div className="font-[700] text-xl text-right md:text-center ml-4">
              Шкафы для прихожей
            </div>
          </div>
          <div className="flex justify-between py-10 mx-auto items-center ">
            <object data="/work-4.svg" type=""></object>
            <div className="font-[700] text-xl text-center ml-4">
              Мебель для офиса
            </div>
          </div>
          <div className="flex justify-between py-10 mx-auto items-center">
            <object data="/work-5.svg" type=""></object>
            <div className="font-[700] text-xl text-center ml-4">
              Гардеробные
            </div>
          </div>
          <div className="flex justify-between py-10 mx-auto items-center">
            <object data="/work-6.svg" type=""></object>
            <div className="font-[700] text-xl text-center ml-4">
              Мебель для детской
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/about-section-bg.png')] lg:bg-[url('/about-bg-desk.png')] bg-cover h-screen relative">
        <h2 className="text-[#252A2E] font-[700] text-3xl lg:text-5xl text-center lg:text-left lg:ml-48 p-8">
          О нас
        </h2>
        <div className="max-w-[65%] bg-[#EFF0EB] p-4 shadow lg:max-w-[500px] lg:absolute right-[10%] bottom-[30%]">
          <h3 className="text-[#252A2E] font-[700] text-3xl lg:text-6xl text-center p-4">
            С 2010 года
          </h3>
          <p className="font-[300] text-xl lg:text-3xl text-center">
            производим кухни по индивидуальному дизайну и пожеланиям заказчиков.
          </p>
          <h3 className="text-[#252A2E] font-[700] text-3xl lg:text-6xl text-center p-4">
            Более 1000
          </h3>
          <p className="font-[300] text-xl lg:text-3xl text-center">
            реализованных проектов
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-stretch relative">
        {/* <h2 className="text-[#252A2E] font-[700] text-3xl text-center p-16 absolute top-[-15%] left-[-2%]"> Товары по акции
        </h2> */}
        {sale.length && (
          <>
            <div className="bg-[#EFF0EB] w-[100%] px-10 py-16">
              <div className="flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col justify-center items-center lg:items-start">
                  <p className="text-[#7D8E66] font-extralight text-4xl text-center lg:text-left">
                    {sale[0].title}
                  </p>
                  <p className="text-[#7D8E66] font-bold text-4xl py-10">
                    {sale[0].price} ₽
                  </p>
                  <a className="bg-[#66A018] text-[#fff] font-[500] py-3 px-10">
                    Заказать
                  </a>
                </div>
                <div>
                  <img
                    className="w-[500px] h-[400px] object-cover p-10"
                    src={`/assets/${sale[0].image}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-[#7D8E66] flex flex-col-reverse lg:flex-row px-10 py-16">
              <div className="flex flex-col justify-center items-center lg:items-start">
                <p className="text-white font-extralight text-4xl text-center lg:text-left">
                  {sale[1].title}
                </p>
                <p className="text-white font-bold text-4xl py-10">
                  {sale[1].price} ₽
                </p>
                <a className="bg-white text-[#66A018] font-[500] py-3 px-10">
                  Заказать
                </a>
              </div>
              <div>
                <img
                  className="w-[500px] h-[400px] object-cover p-10"
                  src={`/assets/${sale[1].image}`}
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </section>
      <section className="lg:flex justify-around mt-14">
        <div className="flex mb-12">
          <object className="w-[50px] mr-6" data="/call.svg" type=""></object>
          <div className="flex flex-col">
            <p className="text-[#252A2E] font-[700] text-3xl pb-6">Звоните</p>
            <p className="font-[300] text-3xl">+ 7 (988) 936 60 54</p>
          </div>
        </div>
        <div className="flex">
          <object className="w-[50px] mr-6" data="/write.svg" type=""></object>
          <div className="flex flex-col">
            <p className="text-[#252A2E] font-[700] text-3xl pb-6">Пишите</p>
            <p className="font-[300] text-2xl">kitchen_masters07@mail.ru</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-[#252A2E] font-[700] text-3xl text-center py-8">
          Готовые работы
        </h2>
        <SimpleSlider />
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
    </div>
  );
};

export default Home;
