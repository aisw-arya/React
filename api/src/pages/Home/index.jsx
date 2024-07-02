import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
function Greeting(){
    const navigate=useNavigate();
    const handleClick =() =>{
        navigate('/dash');
    }

    const handleClickConter =()=>{
        navigate('/counter');
    }
    return(
    <>
    <div id="background">
    <h1>......Welcome......</h1>

    <Button onClick={handleClick} variant="contained">Product Details</Button>
    </div>
    <Button variant="outlined" color="error"onClick={handleClickConter}>counter</Button>
    </>
    )
}

export default Greeting;