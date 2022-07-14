import { Button, PictureCard } from "@krtech-digital/krtech-ui";
import Image from "next/image";
// import hero from "../public/Img2.png";
import React from "react";
const Index = () => {
  return (
    <div className="App">
      <PictureCard image="/images/Img2.png" alt="Mountain"></PictureCard>
      {/* <Image
        src="/images/Img1.png"
        alt="page"
        width={500}
        height={500}
        layout="fill"
      ></Image> */}
    </div>
  );
};

export default Index;
