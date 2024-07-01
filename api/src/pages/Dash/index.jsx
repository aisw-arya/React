import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../store/product"; 
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData.data);
  const isLoading = useSelector((state) => state.productData.status);
  const navigate=useNavigate();
  const handleClick =() =>{
      navigate('/');
  }
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        <>
        <button onClick={handleClick}>back</button>
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Product Listing</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {productData.map((data) => (
            <div
              key={data.id}
              style={{
                width: "200px", 
                padding: "10px", 
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden", borderRadius: "8px" }}>
                <img
                  src={data.image} 
                  alt={data.title} 
                  style={{
                    width: "100%", 
                    height: "100%",                     
                  }}
                />
              </div>
              <h3 style={{ marginBottom: "10px", fontSize: "1rem" }}>{data.title}</h3>
              <p style={{ fontSize: "0.9rem" }}><strong>Price:</strong> ${data.price}</p>
              <p style={{ fontSize: "0.9rem" }}><strong>Rating:</strong> {data.rating.rate}</p>
            </div>
          ))}
        </div>
      </div>
      </>
      )}
    </>
  );
};

export default Dashboard;
