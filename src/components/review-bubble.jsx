import React from "react";

export default function ReviewBubble(props) {
  var stars = [];

  for (let i = 1; i <= props.rating; i++) stars.push("d");

  return (
    <div className={"flex mx-auto"} style={{ width: "550px" }}>
      <img
        className={(props.isRight ? "" : "hidden ") + "rounded-full pr-3"}
        alt="reviewer"
        src={props.person}
        height={118}
      />
      <div
        className="bg-banana-mania rounded-2xl"
        style={{ width: "410px", height: "117px" }}
      >
        <div className="px-9 py-5">
          <p className="text-sm">{props.name}</p>
          <span>
            {stars.map((x, i) => (
              <i key={i} className="bi bi-star-fill text-xs px-px py-0"></i>
            ))}
          </span>
          <p className="font-bold text-xs">{props.ratingWord}</p>
          <p className="text-xs">{props.review}</p>
        </div>
      </div>

      <img
        className={(!props.isRight ? "" : "hidden ") + "rounded-full pl-3"}
        alt="reviewer"
        src={props.person}
        height={118}
      />
    </div>
  );
}
