import {useState} from 'react';

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
  
 
        return (
          <>
          <div style={{padding:"30px", textAlign:"center",fontFamily:"Arial, sans-serif" ,backgroundColor:"#f2f2f2", minHeight:"100vh"}}>
            <h1 style={{color:"green"}}>Calculator🧮</h1>
            <input
            type="number"
            placeholder="First Number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{padding:"10px", margin:5, width:120}}
            />
            <input
            type="number"
            placeholder="Second Number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{padding:"10px", margin:5, width:120}}
            />
            <div style={{marginTop:15}}>
              <button onClick={()=>setResult(Number(num1)+Number(num2))} style={btnStyle}>+</button>
              <button onClick={()=>setResult(Number(num1)-Number(num2))}style={btnStyle}>-</button>
              <button onClick={()=>setResult(Number(num1)*Number(num2))} style={btnStyle}>*</button>
              <button onClick={()=>{
                if(Number (num2)===0)setResult("Error: Division by zero");
                else setResult(Number(num1)/Number(num2))}} style={btnStyle}>/</button>
            </div>
            <h2 style={{marginTop:15 , backgroundColor:"white",padding:15, display:"inline-block"}}>Result: {result}</h2>
            <br/>
            <button onClick={()=>{setNum1(""); setNum2(""); setResult(0)}} style={btnStyle}>Clear</button>

          </div>
          </>

         
         
    );
     
}

const btnStyle = {
  padding: "10px 20px",
  margin: "5px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
};
export default App;

