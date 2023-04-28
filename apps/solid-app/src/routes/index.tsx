import { A } from "solid-start";
import Counter from "~/components/Counter";
import { Button } from "~/components/ui/Button";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
        <br /><br />
        <Button label={"Primary Button"} primary={true}/>
        <br />
        <Button label={"Secondary Button"}/>
        <br />
        <Button label={"Small Button"} backgroundColor={"bg-yellow-200"} size={"small"}/>
        <br />
        <Button label={"Medium Button"} backgroundColor={"bg-red-500"} color={"text-white"} size={"medium"}/>
        <br />
        <Button backgroundColor={"bg-green-600"} color={"text-white"} label={"Large Button"} size={"large"}/>

      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
