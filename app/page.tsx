import Image from "next/image";
import PortfolioList from "./components/navbar/PortfolioList";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 grid-rows-2 h-screen">
        <section className="col-span-1 row-span-1 flex flex-col justify-center">
          <h1>Hello!</h1>
          <p>I'm Myles, a full stack developer based in Manchester, UK</p>
        </section>
        <section className="col-start-2 row-span-2 content-center flex flex-col justify-center ">
          <h3>Portfolio</h3>
          <PortfolioList />
        </section>
      </div>
    </main>
  );
}
