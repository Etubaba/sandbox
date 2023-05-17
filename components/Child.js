import React, {
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import { Mycontext } from "../pages";
import Button from "./Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showCount: false };
    case "toggle":
      return { count: state.count, showCount: !state.showCount };
    default:
      return state;
  }
};

const Child = () => {
  const president = useContext(Mycontext);
  const buttonRef = useRef();
  const [data, setData] = useState("the dummy data");

  //useMemo hooks implementation

  const fetchData = () => {
    //api fetching
    return data;
  };

  //const itDoesntRecall=useMemo(()=>fetchData(data),[dependency for refetch]

  //it is similar to useCallback, which memorizes data, while useCallback memorize a function

  //useCallback impementation

  const anyFuction = useCallback(() => {
    //api fetching
    return data;
  }, [data]);

  const [state, dispatch] = useReducer(reducer, { count: 0, showCount: false });

  return (
    <div>
      <p>context My canditate id :{president[0]}</p>
      <p>{state.count}</p>

      {/* using use reducer */}
      <button
        style={{
          padding: "5px",
          backgroundColor: "red",
          border: "none",
          borderRadius: "5px",
          color: "white",
        }}
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggle" });
        }}
      >
        Reducer button
      </button>
      {state.showCount && "JAJAJA"}
      <br />
      {/* how to change state of a child component from parent without using setState props */}
      <button
        style={{
          margin: "10px",
          padding: "5px",
          backgroundColor: "green",
          border: "none",
          borderRadius: "5px",
          color: "white",
        }}
        onClick={() => buttonRef.current.alterToggle()}
      >
        toggle from parent
      </button>
      <br />
      {/* the component most be wrapped in a forwardRef before it can work */}
      <Button ref={buttonRef} />
    </div>
  );
};

export default Child;
