import React from "react";
import AlertButton from "../src/components/AlertButton/AlertButton.tsx";

export default {
  title: "Alert Button",
  component: AlertButton,
};

export function Message() {
  return (
    <>
      <AlertButton variant="message" heading="YOU’VE GOT MESSAGE!" message="Check your inbox :)"></AlertButton>
    </>
  );
}

export function Success() {
  return (
    <>
      <AlertButton variant="success" heading="SUCCESS!" message="Congrats, your message has been sent!"></AlertButton>
    </>
  );
}

export function AlertError() {
  return (
    <>
      <AlertButton variant="alert-error" heading="SOMETHING WENT WRONG :(" message="We are so sorry, can you try again?"></AlertButton>
    </>
  );
}

export function AlertSuccess() {
  return (
    <>
      <AlertButton variant="alert-success" heading="ALL SET!" message="Well done, you’re all set! "></AlertButton>
    </>
  );
}

export function Info() {
  return (
    <>
      <AlertButton variant="info" heading="OUR PRIVACY POLICY" message="Our Privacy Policy Generator makes it easy to generate a Privacy Policy for your website, app, ecommerce store, SaaS or any projects where you need. Our agreements and policies are free. We sell optional premium agreements with additional clauses."></AlertButton>
    </>
  );
}
