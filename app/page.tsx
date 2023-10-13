import PortfolioList from "./components/navbar/PortfolioList";

export default function Home() {
  return (
    <main className="flex items-center h-full">
      <section className="grid grid-cols-2 gap-x-16 w-full">
        <div className="col-start-1 flex flex-col justify-evenly gap-5">
          <h1 className="text-9xl text-left transition ease-in delay-350 hover:drop-shadow-glow">
            Hello!
          </h1>
          <p className="text-5xl text-left transition ease-in delay-350 hover:drop-shadow-glow">
            I'm Myles, a full stack developer based in Manchester, UK
          </p>
        </div>
        <div className="col-start-2 flex flex-col justify-evenly">
          <p className="transition ease-in-out delay-350 hover:drop-shadow-glow">
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
