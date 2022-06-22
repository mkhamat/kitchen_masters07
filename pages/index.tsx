import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/Navbar";

const Home: NextPage = () => {
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
      <header className="text-center bg-[url('/header-mobile.png')] bg-cover h-screen">
        <NavBar />
        <div className="p-24">
          <h1 className="font-[700] text-4xl text-[#252A2E] text-center">
            Изготовление мебели{" "}
          </h1>
          <p className="font-[300] text-xl text-center">
            По индвидуальному заказу
          </p>
        </div>
        <a className="bg-[#66A018] text-[#fff] font-[500] py-3 px-10">
          Перейти в каталог
        </a>
      </header>
      <section>
        <h2 className="text-[#252A2E] font-[700] text-3xl text-center p-8">
          Что мы можем
        </h2>
        <div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-1.svg" type=""></object>
            <div className="font-[700] text-xl">Шкафы купе</div>
          </div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-2.svg" type=""></object>
            <div className="font-[700] text-xl">Кухонная мебель</div>
          </div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-3.svg" type=""></object>
            <div className="font-[700] text-xl">Шкафы для прихожей</div>
          </div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-4.svg" type=""></object>
            <div className="font-[700] text-xl">Мебель для офиса</div>
          </div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-5.svg" type=""></object>
            <div className="font-[700] text-xl">Гардеробные</div>
          </div>
          <div className="flex justify-between p-10 mx-auto">
            <object data="/work-6.svg" type=""></object>
            <div className="font-[700] text-xl">Мебель для детской</div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/about-section-bg.png')] bg-cover h-screen relative">
        <h2 className="text-[#252A2E] font-[700] text-3xl text-center p-8">
          О нас
        </h2>
        <div className="max-w-[65%] bg-[#EFF0EB] p-4 shadow">
          <h3 className="text-[#252A2E] font-[700] text-3xl text-center p-4">
            С 2010 года
          </h3>
          <p className="font-[300] text-xl text-center">
            производим кухни по индивидуальному дизайну и пожеланиям заказчиков.
          </p>
          <h3 className="text-[#252A2E] font-[700] text-3xl text-center p-4">
            Более 1000
          </h3>
          <p className="font-[300] text-xl text-center">
            реализованных проектов
          </p>
        </div>
      </section>
      <section>
        //TODO
        <h2 className="text-[#252A2E] font-[700] text-3xl text-center p-16">
          Товары по акции
        </h2>
      </section>
      <section>
        <div className="flex justify-center">
          <object className="w-[50px]" data="/call.svg" type=""></object>
          <div>
            <p className="text-[#252A2E] font-[700] text-3xl p-8">Звоните</p>
            <p className="font-[300] text-3xl">+ 7 (988) 936 60 54</p>
          </div>
        </div>
        <div className="flex justify-center">
          <object className="w-[50px]" data="/write.svg" type=""></object>
          <div>
            <p className="text-[#252A2E] font-[700] text-3xl p-8">Пишите</p>
            <p className="font-[300] text-3xl">kitchen_masters07@mail.ru</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
