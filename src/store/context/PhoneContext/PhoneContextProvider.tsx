import { useState, PropsWithChildren } from "react";
import PhoneContext from "./PhoneContext";
import { PhoneContextStructure } from "../../types";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);
  const [isCalling] = useState<boolean>(false);

  const addDigit = (digit: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }
    setPhoneNumber([...phoneNumber, digit]);
  };

  const emptyPhoneNumber = (): void => {
    setPhoneNumber([]);
  };

  const phoneContextStore: PhoneContextStructure = {
    phoneNumber,
    isCalling,
    addDigit,
    emptyPhoneNumber,
  };

  return (
    <PhoneContext.Provider value={phoneContextStore}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
