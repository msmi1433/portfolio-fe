import PortfolioList from "./components/navbar/PortfolioList";

export default function Home() {
  return (
    <main className="flex items-center xl:h-full py-10 xl:mt-0 xl:my-0">
      <section className="w-full flex xl:flex-row flex-col gap-5">
        <div className="xl:w-3/6 flex flex-col justify-center gap-8">
          <h1 className="xl:text-9xl text-6xl ml-[-4.5px] xl:ml-[-8.5px] text-periwinkle">
            <span className="transition ease-in hover:drop-shadow-glowLight">
              Hello!
            </span>
          </h1>
          <p className="xl:text-5xl text-2xl">
            <span className="transition ease-in hover:drop-shadow-glowLight">
              <span className="text-periwinkle">I'm Myles Smith</span>, a full
              stack developer based in Manchester, UK.
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 xl:w-3/6">
          <p className="text-xl">
            I recently finished the Northcoders software development bootcamp,
            where I gained experience working with a range of technologies and
            frameworks, including{" "}
            <span className="text-periwinkle">
              JavaScript, TypeScript, React, PSQL and Express
            </span>
            . I'm now looking to put my skills to work by{" "}
            <span className="text-periwinkle">
              building exciting products that provide an exceptional experience
              for users
            </span>
            .
          </p>
          <PortfolioList />
        </div>
      </section>
    </main>
  );
}
