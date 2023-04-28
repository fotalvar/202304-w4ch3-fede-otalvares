import { useContext } from "react";
import Key from "../Key/Key";
import PhoneContext from "../../store/context/PhoneContext/PhoneContext";

const Keyboard = (): JSX.Element => {
  const { isCalling, addDigit, emptyPhoneNumber } = useContext(PhoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <Key
            text="1"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("1")}
          />
          <Key
            text="2"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("2")}
          />
          <Key
            text="3"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("3")}
          />
          <Key
            text="4"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("4")}
          />
          <Key
            text="5"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("5")}
          />
          <Key
            text="6"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("6")}
          />
          <Key
            text="7"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("7")}
          />
          <Key
            text="8"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("8")}
          />
          <Key
            text="9"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("9")}
          />
          <Key
            text="0"
            isDisabled={isCalling}
            isBig={false}
            actionOnclick={() => addDigit("0")}
          />
          <Key
            text={"Delete"}
            isDisabled={isCalling}
            isBig={true}
            actionOnclick={emptyPhoneNumber}
          />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
