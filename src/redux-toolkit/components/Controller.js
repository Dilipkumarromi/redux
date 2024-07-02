import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

function Controller() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const update=()=>{
    dispatch({ type: "update", payload: 7 });
  }
  return (
    <>
      <div className="col-md-12 mt-2">
        <Button className="btn btn-warning" onClick={increment}>
          +
        </Button>
        <Button className="btn btn-success" onClick={decrement}>
          -
        </Button>
      </div>
      <button className="btn btn-danger" onClick={update}>
        +7
      </button>
    </>
  );
}

export default Controller;
