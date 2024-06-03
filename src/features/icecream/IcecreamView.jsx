import { useSelector, useDispatch } from "react-redux"
import { ordered, restoked } from "./icecreamSlice";

export default function IcecreamView() {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    return (
      <div>
          <h2>Number of ice creams - {numOfIcecreams}</h2>
          <button onClick={() => {dispatch(ordered(1))}}>Order ice creams</button>
          <button onClick={() => {dispatch(restoked(5))}}>Restock ice creams</button>
      </div>
    )
  }
  