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
            <FilterItem title='Кухни' icon={'/work-2.svg'} selected/>
            <FilterItem title='Шкафы' icon={'/work-1.svg'}/>
            <FilterItem title='Фурнитура' icon={'/work-6.svg'}/>
            <FilterItem title='Техника' icon={'/work-4.svg'}/>
        </div>
      </section>
    </>
  );
}

function FilterItem({ selected, icon, title}: { selected?: boolean, icon: string, title: string }) {
  return (
    <div className={`border-[#8E8178] p-2 border-[1px] flex justify-between lg:justify-around items-center font-[500] hover:bg-slate-200 ${selected && 'bg-[#A5B697] text-[#fff]'}`}>
      {title}
      <object data={icon} type=""></object>
    </div>
  );
}
