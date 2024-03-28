import React from "react"
import ItemProduct, { IProductItem } from "./ItemProduct"

interface IExtraSale {
}

export default function LatestProduct({ } :IExtraSale): React.JSX.Element {
  return (
    <div className="card w-full bg-indigo-800 text-primary-content p-1 rounded-lg">
      <div className="flex flex-row card-body pt-2 pb-3 px-3">
        <div className="w-full">
          <h2 className="card-title text-white">New Product</h2>
          <div className="py-2 text-sm">The latest product that is right for you</div>
          <div className="card-actions justify-start">
            <button className="btn btn-outline btn-sm color-wite text-white border-white">More</button>
          </div>
        </div>
        {/* <div className="w-1/5">
          {sampleData.map((item) => <ItemProduct data={item} key={item.id} />)}
        </div> */}
      </div>
    </div>
  )
}

