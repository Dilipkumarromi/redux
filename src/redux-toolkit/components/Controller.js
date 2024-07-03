import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";
import InputGroup from "react-bootstrap/InputGroup";
function Controller() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const update = (e) => {
    console.log("update", e.target.value);
    dispatch(counterActions.update({type:"input", payload: e.target.value }));
  };

  const privacyToggle=()=>{
    dispatch(privacyActions.togglePrivacy())
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
      <div className="col-md-3 m-2">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Input Data</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={update}
          />
        </InputGroup>
      </div>
      <button className="btn btn-danger" onClick={update}>
        +7
      </button>

      <button className="btn btn-info" onClick={update}>

      </button>
    </>
  );
}

export default Controller;
