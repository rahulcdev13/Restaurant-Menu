import React, { useEffect, useState } from "react";
import "../App.css";
const Home = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);
    document.title = `Title Chat Increment ${data}`;
  };

  useEffect(() => {
    console.log("helloooo");
    increment();
  }, []);
  return (
    <>
      <div className="main">
        <p>{count}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INCREMENT
        </button>
        <span></span>
        <span></span>
        <span></span>
        <button
          className="btn btn-danger"
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(0);
          }}
        >
          DESCREMENT
        </button>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="main">
        <p>{data}</p>
        <button className="btn btn-danger" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
};

export default Home;
