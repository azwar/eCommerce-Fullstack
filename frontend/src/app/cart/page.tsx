import ExtraSale from "@/components/ExtraSale";
import LatestProduct from "@/components/LatestProduct";
import ListProduct from "@/components/ListProduct";
import ShoppingCart from "@/components/ShoppingCart";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-1 min-h-screen flex-col items-center px-5 py-6 bg-gray-100">
      <ShoppingCart />
    </main>
  );
}
