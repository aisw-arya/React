import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../store/outlet.js";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Form from "../Form";

const Dashboard = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.outletData.data);
  const isLoading = useSelector((state) => state.outletData.status);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        <>
          <Button variant="outlined" color="secondary" onClick={handleClick}>Back</Button>
          <Button variant="outlined" color="secondary" onClick={openModal}>Add Product</Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: "2rem" }}>The Ladies Shop</h1>
            <h2>Because You Need It</h2>
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
                      alt={data.product_name}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <h3 style={{ marginBottom: "10px", fontSize: "1rem" }}>{data.product_name}</h3>
                  <p style={{ fontSize: "0.9rem" }}><strong>Price:</strong> ${data.price}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Form openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen}/>
    </>
  );
};

export default Dashboard;
