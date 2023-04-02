// import Cardcomponent from "../adminComponents/card/Cardcomponent";
import Header from "../adminComponents/Header/Header";
// import Navbar from "../adminComponents/Header/Navbar";
import styles from "./home.module.css";
import PieChart from "react-pie-graph-chart";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Home = () => {
  // console.log("Asif")
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

  console.log(users);
  // alert(added)
  const data = [
    ["Element", "Amount", { role: "style" }],
    ["Products", products.length, "#ed0331"], // RGB value
    ["Users", users.length, "#ed0331"], // English color name
    ["Orders", 19.3, "#ed0331"],
    // ["Platinum", 21.45, "color: #ed0331"], // CSS-style declaration
  ];
  return (
    <>
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
        </div>
      </div>

      <div>
        <Chart
          className={styles.chartGoogleColumn}
          chartType="ColumnChart"
          width="90%"
          height="400px"
          data={data}
        />
      </div>
      <div className={styles.graphs}>
        <PieChart
          data={[
            {
              type: "Products",
              value: 235,
              color: "#ed0331",
            },
            {
              type: "Bicycle",
              value: 165,
              color: "#131921",
            },
          ]}
        />
        <PieChart
          className={styles.pieone}
          data={[
            {
              type: "Products",
              value: 235,
              color: "#ed0331",
            },
            {
              type: "Bicycle",
              value: 165,
              color: "#131921",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
