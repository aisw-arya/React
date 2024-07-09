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

    const handleClickProduct =()=>{
        navigate('/product');
    }
    return(
    <>
    <div id="background">
    <h1>......Welcome......</h1>
    <Button variant="contained" color="secondary"onClick={handleClickProduct}>Ladies items</Button>        
    </div>
    <Button variant="outlined" color="error"onClick={handleClickConter}>counter</Button>
    <Button onClick={handleClick} variant="outlined">Product Details</Button>
    </>
    )
}

export default Greeting;