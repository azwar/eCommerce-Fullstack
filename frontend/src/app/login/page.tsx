import ExtraSale from "@/components/ExtraSale";
import LatestProduct from "@/components/LatestProduct";
import ListProduct from "@/components/ListProduct";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 py-6 bg-gray-100">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <h2 className="mb-4">Login</h2>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow border-none" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow border-none" value="password" />
        </label>
        <div className="flex flex-row space-x-4 mt-4">
          <button className="flex btn btn-primary mt-4" >Login</button>
          <button className="flex btn btn-secondary mt-4" >Reset</button>
        </div>
      </div>
    </main>
  );
}
