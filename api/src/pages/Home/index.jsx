import { useNavigate } from "react-router-dom";
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
    <button onClick={handleClick}>Product details</button>
    </div>
    <button onClick={handleClickConter}>counter</button>
    </>
    )
}

export default Greeting;