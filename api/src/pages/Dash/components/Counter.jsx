import { useSelector,useDispatch } from "react-redux";
import { decrement,increment, selectCountValue} from "../../../store/counter";

import Button from '@mui/material/Button';
export default function Counter(){
    const count = useSelector(selectCountValue)
    const dispatch =useDispatch()
    return(
        <div>
            <div>
            <Button variant="outlined" color="success" aria-label="Increment" onClick={() =>dispatch(increment())}>
                increment
            </Button>
            <span>{count}</span>
            <Button variant="outlined" color="error"aria-label="Decrement" onClick={() =>dispatch(decrement())}>
                decrement
            </Button>
        
            </div>
        </div>

    );
}