
import ContainerOne from "./heros/Container1";
import ContainerTwo from "./heros/Container2";


export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <ContainerOne />
      <div className="w-full">
      <ContainerTwo />
      </div>
    </div>
  );
}