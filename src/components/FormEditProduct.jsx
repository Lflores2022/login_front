import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CURP, setCURP] = useState("");
  const [NSS, setNSS] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        const { name, addres, phoneNumber, CURP, NSS } = response.data;
        setName(name);
        setAddres(addres);
        setPhoneNumber(phoneNumber);
        setCURP(CURP);
        setNSS(NSS);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        name: name,
        addres: addres,
        phoneNumber: phoneNumber,
        CURP: CURP,
        NSS: NSS
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Edit Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={addres}
                    onChange={(e) => setAddres(e.target.value)}
                    placeholder="Address"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">CURP</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={CURP}
                    onChange={(e) => setCURP(e.target.value)}
                    placeholder="CURP"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">NSS</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={NSS}
                    onChange={(e) => setNSS(e.target.value)}
                    placeholder="NSS"
                  ></input>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
