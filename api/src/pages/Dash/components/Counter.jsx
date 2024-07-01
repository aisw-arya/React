import { useSelector,useDispatch } from "react-redux";
import { decrement,increment, selectCountValue} from "../../../store/counter";

export default function Counter(){
    const count = useSelector(selectCountValue)
    const dispatch =useDispatch()
    return(
        <div>
            <div>
            <button aria-label="Increment" onClick={() =>dispatch(increment())}>
                increment
            </button>
            <span>{count}</span>
            <button aria-label="Decrement" onClick={() =>dispatch(decrement())}>
                decrement
            </button>
            </div>
        </div>

    );
}