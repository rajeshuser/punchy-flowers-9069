import React from 'react'
import Header from '../adminComponents/Header/Header'
import styles from "./AdminAddProduct.module.css";
import AdminNavbar from '../adminComponents/Header/AdminNavbar';
const AdminAddProductPage = () => {
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
            <h3>777</h3>
            <p>TOTAL USERS</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.poster}>
            <img src="https://cdn-icons-png.flaticon.com/128/3703/3703259.png" alt="" />
        </div>
        <div className={styles.info}>
            <h3>3000</h3>
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
            <input type="text" placeholder='title' />
            <input type="text" placeholder='image'/>
            <input type="text" placeholder='category' />
            <input type="text" placeholder='rating' />
            <input type="text" placeholder='price' />
            <button>Add</button>
        </form>
    </div>
    
    </div>
  
  )
}

export default AdminAddProductPage

