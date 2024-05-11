import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Productlist = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async () =>{
      const response = await axios.get('http://localhost:5000/products')
      setProducts(response.data)
  }

  const deleteProduct = async(productId) =>{
    await axios.delete(`http://localhost:5000/products/${productId}`)
    getProducts();
  }
  return (
    <div>
        <h1 className="title">Prospectos</h1>
      <h2 className="subtitle">Lista de Prospectos</h2>
      <Link to={'/products/add'} className='button is-primary mb-2'>Agregar nuevo</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>CURP</th>
            <th>NSS</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product, index)=>(
          <tr key={product.uuid}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.addres}</td>
            <td>{product.phoneNumber}</td>
            <td>{product.CURP}</td>
            <td>{product.NSS}</td>
            <td>{product.user.name}</td>
            <td>
              <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
              <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
            </td>
          </tr>
        ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Productlist