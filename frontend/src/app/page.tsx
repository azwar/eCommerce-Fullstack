import ExtraSale from "@/components/ExtraSale";
import LatestProduct from "@/components/LatestProduct";
import ListProduct from "@/components/ListProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 py-6 bg-gray-200">
      <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-2 mb-2 md:px-0 px-2 md:w-full w-screen">
        <ExtraSale />
        <LatestProduct />
      </div>
      <div className="flex md:mx-2 mx-2 md:w-full w-screen mt-4 px-2 md:px-0">
        <ListProduct />
      </div>
    </main>
  );
}
