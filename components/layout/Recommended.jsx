"use client";

import { useAppContext } from "@/app/context/AppContext";
import RecommendedCard from "../common/RecommendedCard";

function Recommended() {
  const { recommendedDisplayArray } = useAppContext();

  return (
    <section
      className="w-full h-auto flex justify-between mb-5 items-center py-1 px-4 overflow-y-auto hidden-scrollbar"
      style={{}}
    >
      {recommendedDisplayArray.map((item) => (
        <RecommendedCard
          title={item.type}
          image={item.src}
          key={item.id}
          id={item.id}
        />
      ))}
    </section>
  );
}

export default Recommended;
