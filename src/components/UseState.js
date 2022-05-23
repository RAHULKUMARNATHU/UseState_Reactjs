import React , {useState} from "react";

export default function UseState() {
    const [count , setCount] = useState(0);
    const increament = () => {
        setCount(prevCount => prevCount+1);
    }

    const decreament = () => {
        setCount(prevCount => prevCount-1);
    }

  return (
    <div>
        <button onClick={increament} > +</button>
        <span>{count}</span>
        <button onClick={decreament} > - </button>
    </div>
  )
}
