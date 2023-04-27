import { useContext } from "react";
import PhoneContext from "../../store/context/PhoneContext/PhoneContext";

const Info = (): JSX.Element => {
  const { status } = useContext(PhoneContext);

  return <span className={`message ${status ? "" : "off"}`}>Calling...</span>;
};

export default Info;
