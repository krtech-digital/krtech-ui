import React from "react";
import Button from "../src/components/Button/Button.tsx";

export default {
  title: "Button",
  component: Button,
};

export function Normal() {
  return (
    <>
      <Button variant="none">{`Item`}</Button>
      <Button variant="none">{`Item  >`}</Button>
      <Button variant="none">{`<  Item`}</Button>
      <Button variant="none">{`<  Item  >`}</Button>
      <Button variant="noneShort">{`>`}</Button>
    </>
  );
}

export function Hover() {
  return (
    <>
      <Button variant="hover">{`Item`}</Button>
      <Button variant="hover">{`Item  >`}</Button>
      <Button variant="hover">{`<  Item`}</Button>
      <Button variant="hover">{`<  Item  >`}</Button>
      <Button variant="hoverShort">{`>`}</Button>
    </>
  );
}

export function Active() {
  return (
    <>
      <Button variant="active">{`Item`}</Button>
      <Button variant="active">{`Item  >`}</Button>
      <Button variant="active">{`<  Item`}</Button>
      <Button variant="active">{`<  Item  >`}</Button>
      <Button variant="activeShort">{`>`}</Button>
    </>
  );
}
