import React, {useState} from "react";
import axios from 'axios'
const AddProduct = () => {
  const [name,setName] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [types,setTypes] = useState([])
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const data = {name , price , description , imageUrl , types}
    axios.put(process.env.REACT_APP_BACKEND_URL + '/manager/add-product' , {
      data
    })
    .then(res => console.log(res.data.data))
    .catch(err => console.log(err))
     
  }
  
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <label htmlFor="name">Name</label>
      <input value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="name" id="name" />
      <label htmlFor="imageUrl">imageUrl</label>
      <input value={imageUrl} onChange={(e)=> {setImageUrl(e.target.value)}} placeholder="imageUrl" id="imageUrl" />
      <label htmlFor="price">price</label>
      <input value={price} onChange={(e)=> {setPrice(e.target.value)}} placeholder="price" id="price" />
      <label htmlFor="description">description</label>
      <input value={description} onChange={(e)=> {setDescription(e.target.value)}} placeholder="description" id="description" />
      <label htmlFor="types">types</label>
      <select onClick={() => {
         const selected = [];
         for (const option of document.getElementById('types').options) {
             if (option.selected) {
                 selected.push(option.value);
             }}
         setTypes(selected)
      }} id="types" multiple >
        <option  value="Best_Sellers">Best Sellers</option>
        <option value="Clothing">Clothing</option>
        <option value="Office">Office</option>
        <option value="Home">Home</option>
        <option value="Sport">Sport</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProduct;
