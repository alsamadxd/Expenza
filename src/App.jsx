import { useState } from "react";
import "./App.css";

function App() {
  const [name,setName] = useState("");
  const [datetime,setDatetime] = useState("");
  const [desc,setDesc] = useState("");

  function addNewTransaction(){
    
  }

  return (
    <>
      <div className="main">
        <h1>
          $500 <span>.00</span>
        </h1>

        <form onSubmit={addNewTransaction}>
          <div className="basic">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="transaction"
            />
            <input
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </div>
          <div className="description">
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="description"
            />
          </div>
          <button type="submit" className="">
            Add New Transaction
          </button>
        </form>
        <div className="transactions">
          <div className="transaction ">
            <div className="left ">
              <div className="name">S24 Ultra</div>
              <div className="desc">Got it under heavy discount</div>
            </div>
            <div className="right ">
              <div className="price text-red-500">-$400</div>
              <div className="datetime">2077-12-21 15:45</div>
            </div>
          </div>
          <div className="transaction ">
            <div className="left ">
              <div className="name">4090 OC </div>
              <div className="desc">Got it under heavy discount</div>
            </div>
            <div className="right ">
              <div className="price text-green-400">+$800</div>
              <div className="datetime">2077-12-21 15:45</div>
            </div>
          </div>
          <div className="transaction ">
            <div className="left">
              <div className="name">S24 Ultra</div>
              <div className="desc">Got it under heavy discount</div>
            </div>
            <div className="right">
              <div className="price text-red-500">-$400</div>
              <div className="datetime">2077-12-21 15:45</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
