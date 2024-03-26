import React from "react"

interface ITagButton {
    tag: string;
    onClick?: () => void;
}

export default function ButtonTag({ onClick, tag } : ITagButton): React.JSX.Element {
  return (
    <button className="btn btn-xs btn-outline rounded-full border-white text-white px-3 mx-1">{tag}</button>
  )
}

