import { useSelector, useDispatch } from "react-redux"
import { ordered, restoked } from "./cakeSlice";
import { useState } from "react";

export default function CakeView() {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);

  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <input 
            type="number"
            value={value}
            onChange={(e) => setValue(+(e.target.value))}
        />
        <button onClick={() => dispatch(restoked(value))}>Restock cakes</button>
    </div>
  )
}
