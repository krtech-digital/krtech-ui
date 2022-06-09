import { Button } from "@krtech-digital/krtech-ui";

import {List} from "@krtech-digital/krtech-ui"
const Index = () => {
  return (
    <div className="App">
      <a href="/">Homepage</a>
      <br />
      <a href="/about">Components</a>
      <br />
      <br />
        <List listType='bulleted'/>
        <List listType='numbered'/>
    </div>
  );
};

export default Index;
