import React from 'react'
import axios from "axios";
import styles from "./adminProductCard.module.css"
const AdminProductCard = ({  brand,
  category,
  description,
  image,
  price,
  quantity,
  rating,
  title,
  type,
  _id,}) => {
    const deleteProduct = async (id) => {
      try {
        return await axios.delete(`../product/delete/${id}`, {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    const getProducts = async ()=>{
      try {
          return await axios.get(`../product/get`, {
            headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          });
        } catch (err) {
          console.log(err);
        }
  }
    
    const handleDelete = (id) => {
      deleteProduct(id)
        .then((res) => {
          getProducts();
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className={styles.productcard}>
      <div className={styles.left}>
      <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_525,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png" alt="" />
      </div>
      <div className={styles.right}>
      <div className={styles.title}>
        <h3>Nike Air Force 1 '07</h3>
      </div>
      <div className={styles.id}>
          <p>product id : </p>
         <p> 124578963254789</p>
      </div>
      <div className={styles.numbers}>
        <p>category : Mens Shoes</p>
        <div>
            <p>315</p>
            <p>quantity remaining</p>
        </div>
      </div>
      <div className={styles.btn}>
         <button onClick={()=>handleDelete(_id)}>DELETE</button>
      </div>
      </div>
    </div>
  )
}

export default AdminProductCard