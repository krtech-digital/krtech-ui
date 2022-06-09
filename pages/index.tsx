import { Button , NavigationBar} from "@krtech-digital/krtech-ui";
// import Button from "../src/components/Button/Button";
const Index = () => {
  const buttons = [
    {
      url: 'urltest', 
      name: 'button'
    }
  ]
  return (
    <div className="App">
      <a href="/">Homepage</a>
      <br />
      <a href="/about">Components</a>
      <Button variant="none">Click</Button>
      <NavigationBar buttons={buttons}></NavigationBar>
      <br />
      <br />
    </div>
  );
};

export default Index;
