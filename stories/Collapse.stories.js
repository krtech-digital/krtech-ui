import React from "react";
import Button from "../src/components/Button/Button.tsx";
import Collapse from "../src/components/Collapse/Collapse";

export default {
  title: "Collapse",
  component: Button,
};

export function Normal() {
  return (
    <div>
      <style jsx>
        {`
          .collapse {
            width: 40%;
          }
        `}
      </style>
      <Collapse
        title="Main title"
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Venenatis a condimentum vitae sapien pellentesque. Convallis aenean et tortor at risus viverra adipiscing. Massa placerat duis ultricies lacus sed turpis tincidunt id. Rutrum tellus pellentesque eu tincidunt. Hac habitasse platea dictumst quisque sagittis purus. Egestas purus viverra accumsan in nisl nisi scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in."
        }
        active={false}
      />
    </div>
  );
}

export function Hover() {
  return (
    <div>
      <style jsx>
        {`
          .arrow-box {
            background: rgba(217, 217, 217, 0.2);
          }
          .collapse {
            width: 40%;
          }
        `}
      </style>
      <Collapse
        title="Main title"
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Venenatis a condimentum vitae sapien pellentesque. Convallis aenean et tortor at risus viverra adipiscing. Massa placerat duis ultricies lacus sed turpis tincidunt id. Rutrum tellus pellentesque eu tincidunt. Hac habitasse platea dictumst quisque sagittis purus. Egestas purus viverra accumsan in nisl nisi scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in."
        }
        active={false}
      />
    </div>
  );
}

export function Active() {
  return (
    <>
      <style jsx>
        {`
          .collapse {
            width: 73%;
          }
        `}
      </style>
      <Collapse
        title="Main title"
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Venenatis a condimentum vitae sapien pellentesque. Convallis aenean et tortor at risus viverra adipiscing. Massa placerat duis ultricies lacus sed turpis tincidunt id. Rutrum tellus pellentesque eu tincidunt. Hac habitasse platea dictumst quisque sagittis purus. Egestas purus viverra accumsan in nisl nisi scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in."
        }
        active={true}
      />
    </>
  );
}
