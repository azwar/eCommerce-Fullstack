import React from "react"
import ItemProduct, { IProductItem } from "./ItemProduct"

interface IExtraSale {
}

export default function ExtraSale({ } :IExtraSale): React.JSX.Element {
  return (
    <div className="card w-full bg-primary text-primary-content p-1 rounded-lg">
      <div className="flex flex-row card-body pt-2 pb-3 px-3">
        <div className="w-full">
          <h2 className="card-title text-white">Extra Discount</h2>
          <div className="py-2 text-sm">Get extra discount only for this month</div>
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

