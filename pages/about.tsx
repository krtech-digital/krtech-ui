import { Button } from "@krtech-digital/krtech-ui";
import { InputField } from "@krtech-digital/krtech-ui"

const About = () => {
  return (
    <div className="App" style={{margin: "10px"}}>
      <InputField inputLabel="input" placeholder="Enter your email"></InputField>
      <InputField inputLabel="e-mail" placeholder="Enter your email"></InputField>
      <InputField inputLabel="message" placeholder="Enter your message..."></InputField>
      <InputField inputLabel="name" placeholder="Enter your name"></InputField>
    </div>
  );
};

export default About;
