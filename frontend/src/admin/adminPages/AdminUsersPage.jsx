import React, { useEffect, useState } from "react";
import AdminNavbar from "../adminComponents/Header/AdminNavbar";
import Header from "../adminComponents/Header/Header";
import AdminProductCard from "../adminComponents/Header/productcard/AdminProductCard";
import AdminUserCard from "../adminComponents/usercard/AdminUserCard";
import styles from "./adminProducts.module.css";
import axios from "axios";

const AdminUsers = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = () => {
    try {
      axios
        .get(`https://dark-jade-swallow-robe.cyclic.app/products`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
      // return response.data;
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  };
  const getUsers = () => {
    try {
      axios
        .get(`https://dark-jade-swallow-robe.cyclic.app/users`)
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
      // return response.data;
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);
  return (
    <div>
      <div className={styles.navbar}>
        <AdminNavbar />
      </div>
      <div className={styles.home}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.right}>
          <div className={styles.cardMain}>
            <div className={styles.card}>
              <div className={styles.poster}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h3>{users.length}</h3>
                <p>TOTAL USERS</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.poster}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3703/3703259.png"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h3>{products.length}</h3>
                <p>TOTAL PRODUCTS</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.poster}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6815/6815043.png"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h3>120</h3>
                <p>TOTAL ORDERS</p>
              </div>
            </div>
          </div>
          {/* <div className={styles.searchbar}>
                <input type="text" placeholder='search users'/>
                <button>search</button>
              </div> */}
          <div className={styles.productcard}>
            {users?.map((el, i) => {
              return <AdminUserCard key={i} {...el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
