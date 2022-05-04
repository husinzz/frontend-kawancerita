import React from "react";

export default function Button(props) {
  return (
    <button className={"bg-melon rounded-3xl py-2 px-6 " + props.class }>
      <a className={"text-white"} href={props.to}>
        {props.text}
      </a>
    </button>
  );
}
