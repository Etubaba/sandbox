import React from "react";
import Child from "../components/Child";

export const Mycontext = React.createContext();

export default function Home() {
  const president = ["Obi", "Tinubu"];

  return (
    <div className="flex justify-center items-center">
      <Mycontext.Provider value={president}>
        <Child />
      </Mycontext.Provider>
    </div>
  );
}
