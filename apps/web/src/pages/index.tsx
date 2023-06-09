import Head from "next/head";
import { Button } from "ui";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

export default function Home() {

  function showAlert() {
    alert("Hallo");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>&#127814;&#x1F9D7; SaarClimb - Boulder & Workout</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          SaarClimb
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            &#128170; Boulder & Workout &#128170;
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button backgroundColor={"red"} label={"Primary SolidButton"} onClick={showAlert} primary={true} size={"medium"}/>
        </div>
      </main>
    </div>
  );
}
