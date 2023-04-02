import React, { useEffect, useState } from 'react'
import Header from '../adminComponents/Header/Header'
import styles from "./AdminAddProduct.module.css";
import AdminNavbar from '../adminComponents/Header/AdminNavbar';
import axios from 'axios';
const AdminAddProductPage = () => {
    const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

 
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");


  const getProducts = ()=>{
    try {
      axios.get(`https://dummyjson.com/products`)
      .then((res)=>setProducts(res.data.products))
      .catch((err)=>console.log(err))
      // return response.data;
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  }
  const getUsers = ()=>{
    try {
      axios.get(`https://dummyjson.com/users`)
      .then((res)=>setUsers(res.data.users))
      .catch((err)=>console.log(err))
      // return response.data;
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  }

  const addProduct = () =>{
    const payload = {
        category,
        image,
        price,
        rating,
        title
      };

      axios.post(`https://dummyjson.com/products/add`,payload)
      .then(res=>alert("Product added"))
      .catch(err=>console.log(err))

      getProducts();
  }
 
  useEffect(() => {
     getProducts()
     getUsers()
  },[]);
  return (
    <div className={styles.add}>
    <div>
       <AdminNavbar/> 
    </div>
    <div className={styles.home}>
      <div className={styles.header}>
        <Header/>
      </div>
    <div className={styles.right}>
    <div className={styles.cardMain}>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>{users.length}</h3>
            <p>TOTAL USERS</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/3703/3703259.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>{products.length}</h3>
            <p>TOTAL PRODUCTS</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/6815/6815043.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>120</h3>
            <p>TOTAL ORDERS</p>
        </div>
    </div>
      </div>
    </div>
      
    </div>
    <div className={styles.feilds}>
        <h1>ADD PRODUCT</h1>
        <form action="">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          placeholder="image"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="price"
        />
        <input
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          type="number"
          placeholder="rating"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          placeholder="category"
        />
            <button onClick={addProduct()}>Add</button>
        </form>
    </div>
    
    </div>
  
  )
}

export default AdminAddProductPage

