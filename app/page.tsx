import PortfolioList from "./components/navbar/PortfolioList";

export default function Home() {
  return (
    <main className="flex items-center h-full">
      <section className="grid grid-cols-2 gap-x-16 w-full">
        <div className="col-start-1 flex flex-col justify-evenly gap-5">
          <h1 className="text-9xl text-periwinkle">
            <span className="transition ease-in hover:drop-shadow-glowLight">
              Hello!
            </span>
          </h1>
          <p className="text-5xl">
            <span className="transition ease-in hover:drop-shadow-glowLight">
              <span className="text-periwinkle">I'm Myles Smith</span>, a full
              stack developer based in Manchester, UK
            </span>
          </p>
        </div>
        <div className="col-start-2 flex flex-col justify-evenly">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <PortfolioList />
        </div>
      </section>
    </main>
  );
}
