import { Collapse } from "@krtech-digital/krtech-ui";

const Index = () => {
  return (
    <div className="App" style={{ width: `80%`, margin: `auto` }}>
      <Collapse
        title="Main title"
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Venenatis a condimentum vitae sapien pellentesque. Convallis aenean et tortor at risus viverra adipiscing. Massa placerat duis ultricies lacus sed turpis tincidunt id. Rutrum tellus pellentesque eu tincidunt. Hac habitasse platea dictumst quisque sagittis purus. Egestas purus viverra accumsan in nisl nisi scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in."
        }
        active={true}
      />
    </div>
  );
};

export default Index;
