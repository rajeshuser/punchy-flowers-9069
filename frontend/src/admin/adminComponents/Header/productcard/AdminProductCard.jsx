import React from 'react'
import axios from "axios";
import styles from "./adminProductCard.module.css"
const AdminProductCard = ({
  category,
  thumbnail,
  price,
  rating,
  title,
  id}) => {
    const handleDelete = (id) => {
      axios.delete(`https://dummyjson.com/products/${id}'`)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
      alert("product deleted")
    };
    
  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
      <img src={thumbnail} alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.id}>
          <p>product id : </p>
         <p>{id}</p>
      </div>
      <div className={styles.numbers}>
        <p>category : {category}</p>
        <div>
            <p>{price}</p>
            <p>price</p>
        </div>
      </div>
      <div className={styles.btn}>
         <button onClick={()=>handleDelete(id)}>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminProductCard