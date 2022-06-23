import { Button, NavigationBar } from "@krtech-digital/krtech-ui";
import Link from "next/link";
import { useRouter } from "next/router";
// import Button from "../src/components/Button/Button";
const Index = () => {
  const buttons = [
    {
      url: "/",
      name: "home",
      active: true,
    },
    {
      url: "/about",
      name: "about",
      active: false,
    },
  ];
  const router = useRouter();
  return (
    <div className="App">
      <a href="/">Homepage</a>
      <br />
      <Link href="/about">Components</Link>
      <NavigationBar buttons={buttons} router={router}></NavigationBar>
      <br />
      <br />
    </div>
  );
};
export default Index;