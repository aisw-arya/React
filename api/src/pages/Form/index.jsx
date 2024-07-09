import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { postForm } from "../../store/form";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "90%",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  }
};

const Form = ({openModal,closeModal,modalIsOpen}) => {
  const initialData = {
    product_name: "",
    price: "",
    category_name: "",
    image: ""
  };

  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialData);


  const handleAddData = (e) => {
    e.preventDefault();
    dispatch(postForm({
      data: product
    }));
    closeModal();
  };

  return (
    <>
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Product Modal"
      >
        <div className="modal-content">
          <h2>Add Product</h2>
          <form onSubmit={handleAddData}>
            <label>Product Name:</label>
            <input
              type="text"
              value={product.product_name}
              onChange={(event) =>
                setProduct({ ...product, product_name: event.target.value })
              }
              required
            />
            <br></br>
            <br></br>
            <label>Category Name:</label>
            <input
              type="text"
              value={product.category_name}
              onChange={(event) =>
                setProduct({ ...product, category_name: event.target.value })
              }
              required
            />
            <br></br>
            <br></br>
            <label>Image URL:</label>
            <input
              type="text"
              value={product.image}
              onChange={(event) =>
                setProduct({ ...product, image: event.target.value })
              }
              required
            />
            <br></br>
            <br></br>
            <label>Price:</label>
            <input
              type="number"
              value={product.price}
              onChange={(event) =>
                setProduct({ ...product, price: event.target.value })
              }
              required
            />
            <br></br>
            <br></br>
            <div className="modal-buttons">
              <button type="submit">Add Product</button>
              <button type="button" onClick={closeModal}>Close</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
    </>
  );
  
};

export default Form;
