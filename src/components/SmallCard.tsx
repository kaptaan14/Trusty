import React, { ReactNode } from "react";

type SmallCardProps = {
  imageSource: string;
  title: string;
};

const SmallCard: React.FC<SmallCardProps> = ({ imageSource, title }) => {
  return (
    <div className="w-full  p-4">
      <div className="flex flex-col items-center border border-line rounded-2xl pb-8">
        <div className="m-3  rounded-t-2xl bg-secondary">
          <img src={imageSource} alt="" className=""/>
        </div>
        <div className="pb-4 p-3">
          <p className="text-2xl text-center font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
