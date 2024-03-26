import React from "react"
import ButtonTag from "./TagButton";
import Image from "next/image";
import Link from "next/link";

export interface IProductItem {
  id: number,
  title: string;
  writer: string;
  coverImage: string;
  point_price: number;
  active: boolean;
  tag: string[],
  priceTier: number,
}

export default function ItemProduct({ data }: { data: IProductItem }): React.JSX.Element {
  const {title, point_price, tag, writer, coverImage} = data;
  return (
    <Link href="#">
      <div className="card w-full px-0 rounded-xl shadow-sm shadow-slate-400 bg-white">
        <h1 className="card-title text-lg px-3 py-2 line-clamp-1">
          {title}
        </h1>
        <div className="avatar">
          <div className="w-full border-t-stone-400 border-t-2 border-b-stone-400 border-b-2">
            <Image src={coverImage} 
              alt={title} height={100} width={100} />
          </div>
        </div>
        <div className="flex p-2 justify-between flex-col md:flex-row space-y-1 md:space-y-0">
          {/* <h2 className="card-title text-sm">
          {data.title}
        </h2> */}
          <span className="text-lg">${point_price}.00</span>
          <div className="flex text-sm justify-center items-center">
            <p className="text-center">by {writer}</p>
          </div>
          <div className="fle flex-row">
            {tag.map((item, i) => (
              <button className="btn btn-primary btn-outline btn-xs" key={i}>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

