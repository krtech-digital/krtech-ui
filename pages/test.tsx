import { Loading } from "@krtech-digital/krtech-ui";

const Test = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100vw`,
        height: `100vh`,
      }}
    >
      <Loading variant="loading" />
      <Loading variant="loading-gray" />
    </div>
  );
};

export default Test;
