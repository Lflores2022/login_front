import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddProduct = () => {

  const [name, setName] = useState("")
  const [addres, setAddres] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [CURP, setCURP] = useState("")
  const [NSS, setNSS] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const saveProduct = async(e)=>{
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/products',{ 
        name: name,
        addres: addres,
        phoneNumber: phoneNumber,
        CURP: CURP,
        NSS: NSS
      })
      navigate('/products')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div>
    <h1 className="title">Products</h1>
    <h2 className="subtitle">Add New Prodcut</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={saveProduct}>
            <p className='has-text-centered'>{msg}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Product Name"
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Addres</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={addres}
                  onChange={(e)=> setAddres(e.target.value)}
                  placeholder="Addres"
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">TELEFONO</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={phoneNumber}
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                  placeholder="Telefono"
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
                  onChange={(e)=> setCURP(e.target.value)}
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
                  onChange={(e)=> setNSS(e.target.value)}
                  placeholder="NSS"
                ></input>
              </div>
            </div>
            <div className="field">
            <div class="control">
            <button 
            type='submit'
            className="button is-success">
                Save
              </button>
            </div> 
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormAddProduct