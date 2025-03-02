
import ContainerOne from "./heros/Container1";
import ContainerTwo from "./heros/Container2";


export default function Home() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <ContainerOne />
      <div className="w-full bg-[#000000]">
      <ContainerTwo />
      </div>
    </div>
  );
}