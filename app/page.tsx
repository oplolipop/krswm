import Main_calendar from "@/components/Main_calendar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill = "white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill = "purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill = "blue" />
        <Main_calendar />
      </div>
    </main>
  );
}
