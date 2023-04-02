import React, { useEffect, useState } from 'react'
import axios from "axios";
import AdminNavbar from "../adminComponents/Header/AdminNavbar"
import Header from "../adminComponents/Header/Header";
import AdminProductCard from '../adminComponents/Header/productcard/AdminProductCard';
import styles from "./adminProducts.module.css"

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

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
 
  useEffect(() => {
     getProducts()
     getUsers()
  },[]);
  return (
    
    <div>
        <div className={styles.navbar}>
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
              {/* <div className={styles.searchbar}>
                <input type="text" placeholder='search products '/>
                <button>search</button>
              </div> */}
              <div className={styles.productcard}>
                 {products?.map((el,i)=>{
                    return <AdminProductCard key={i} {...el}/> 
                 }) }
              </div>
           </div>
      
        </div>
    </div>

  )
}

export default AdminProducts