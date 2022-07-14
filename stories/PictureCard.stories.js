import React from "react";
import PictureCard from "../src/components/PictureCard/PictureCard.tsx";

export default {
  title: "Picture Card",
  component: PictureCard,
};

export function Normal() {
  return (
    <div style={{ width: "1000px", height: "500px" }}>
      <PictureCard image="/images/Img2.png" alt="mountains"></PictureCard>
    </div>
  );
}

// export function Hover() {
//   return (
//     <>
//       <Button variant="hover">{`Item`}</Button>
//       <Button variant="hover">{`Item  >`}</Button>
//       <Button variant="hover">{`<  Item`}</Button>
//       <Button variant="hover">{`<  Item  >`}</Button>
//       <Button variant="hoverShort">{`>`}</Button>
//     </>
//   );
// }

// export function Active() {
//   return (
//     <>
//       <Button variant="active">{`Item`}</Button>
//       <Button variant="active">{`Item  >`}</Button>
//       <Button variant="active">{`<  Item`}</Button>
//       <Button variant="active">{`<  Item  >`}</Button>
//       <Button variant="activeShort">{`>`}</Button>
//     </>
//   );
// }
