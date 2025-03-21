import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/counterslice";

function Counter() {
  const [Range, setRange] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log('Range');
  console.log(Range);
  

  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100 flex-column mt-2 ">
        <h3 style={{ fontSize: "70px", color: "black" }}>{count}</h3>

        <div className="mt-4 ">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement(Number(Range)))}
          >
            Decrement
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="btn btn-success ms-3"
            onClick={() => dispatch(increment(Number(Range)))}
          >
            Increment
          </button>
        </div>
      </div>
      <input
        type="text"
        className=" form-control mt-3 w-100"
        placeholder="enter range"
        style={{ borderColor: "blue" }}
        onChange={(e) => setRange(e.target.value)}
      />
    </>
  );
}

export default Counter;
