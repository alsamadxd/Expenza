import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name,setName] = useState("");
  const [datetime,setDatetime] = useState("");
  const [desc,setDesc] = useState("");
  const [price,setPrice] = useState("");
  const [transactions, setTransactions] = useState("");

  useEffect(()=>{
    getTransaction().then(setTransactions);
    
    // (transactions=>{
    // transactions.map((el)=>{
    //   console.log(el.name);  
    // });
      
    
  },[])

  useEffect(()=>{
    getTransaction().then(setTransactions);  
  },[name])

  async function getTransaction(){
    const url = "http://localhost:3000/api/transactions" || "not_defined";
    const response=await fetch(url);
    return await response.json();
     
  }
  function addNewTransaction(e){
    e.preventDefault()
    // const url = process.env.REACT_APP_API_URL+'/transaction';
    const url = "http://localhost:3000/api/transaction" || "not_defined";

    // console.log(url);
    
    fetch(url,{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({name,desc,datetime,price})
    }).then(res=>{
      res.json().then(json=>{
        setName("")
        setDatetime("")
        setDesc("")
        setPrice("")
        console.log('restult', json);   
      })
    })
  }

  let balance=0;
  for (const transaction of transactions) {
    balance+=transaction.price;
  }

  return (
    <>
      <div className="main">
        <h1>
          {balance}<span>.00$</span>
        </h1>

        <form onSubmit={addNewTransaction}>
          <div className="basic">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item name"
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
          <div className="price">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price $$"
            />
          </div>
          <button type="submit" className="">
            Add New Transaction
          </button>
        </form>
        <div className="transactions">
          
          {
          (transactions.length > 0) && (transactions.map((transaction) => {
            return (
              <div className="transaction ">
                <div className="left ">
                  <div className="name">{transaction.name}</div>
                  <div className="desc">{transaction.desc}</div>
                </div>
                <div className="right ">
                  <div
                    className={
                      "price " + (transaction.price < 0
                        ? "text-red-500"
                        : "text-green-400")
                    }
                  >
                    {transaction.price}
                  </div>
                  <div className="datetime">{transaction.datetime}</div>
                </div>
              </div>)
              }))
            }
        </div>
      </div>
    </>
  );
}

export default App;
