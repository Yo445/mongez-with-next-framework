import { mirage } from "ldrs";

mirage.register();
export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#92722a]">
      <l-mirage size="60" speed="2.5" color="black" />
    </div>
  );
}
