import { createContext, useState } from "react";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider(props) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    setIsOn(true);
    console.log("Light on")
  };
  
  const switchOff = () => {
    setIsOn(false);
    console.log("Light off")
  };

  return (
    <BulbContext.Provider
      value={
        {
          isOn, switchOn, switchOff
        }
      }
    >
      {props.children}
    </BulbContext.Provider>
  );
}
