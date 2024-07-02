import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

function Controller() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment())
  };
  const decrement = () => {
    dispatch(counterActions.decrement())
  };
  const update=()=>{
    dispatch(counterActions.update())
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
