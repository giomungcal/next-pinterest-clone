import { useAppContext } from "@/app/context/AppContext";
import React from "react";

function RecommendedCard({ title, image, id }) {
  const { handleRecommendedClick } = useAppContext();
  const cardColors = ["#D4CCC0", "#E8E4E8", "#C6C6C5", "#BDBAB8", "#CDC1BB"];
  const colorIndex = id % cardColors.length;
  return (
    <div
      style={{ backgroundColor: cardColors[colorIndex] }}
      className={`min-w-[299px] mr-4 flex p-2 border items-center rounded-3xl cursor-pointer`}
      onClick={() => handleRecommendedClick(title)}
    >
      <div className="w-[92px] h-[94px] flex p-2 ">
        <img
          src={image}
          alt=""
          className="p-1 h-full w-full object-cover rounded-full"
        />
      </div>
      <div>
        <p className="text-left text-sm">More ideas for</p>
        <h2 className="text-left text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default RecommendedCard;
