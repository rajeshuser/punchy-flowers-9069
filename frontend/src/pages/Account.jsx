import React from "react";
import "./Accounts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderRct from "./Slider";

const Data = [
  {
    id: 1,
    desc: "Redeem Apple Gift Cards into your account or add money directly anytime. Then use your balance to buy all things Apple — products, accessories, apps, games, music, movies, TV shows, iCloud, and more.",
    name: "Your Apple Account Balance: $0.00",
  },
  {
    id: 2,
    desc: "Track, modify, or cancel an order or make a return.",
    name: "Your Orders",
  },
  {
    id: 3,
    desc: "Whether you’re shopping online or in the Apple Store, you can easily save products you’re interested in and follow up on your progress here.",
    name: "Your Saves",
  },
];

const slider1 = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Accounts() {
  return (
    <div className="accountDiv">
      <div className="topPart">
        <h2 style={{ fontWeight: 400 }}>Account</h2>
        <hr style={{ color: "rgba(255, 255, 255, 0.897)" }} />
        <h1 style={{ fontWeight: 200 }}>Hi, Gaurav.</h1>
      </div>

      <div style={{ padding: 80 }} className="devices">
        <h1 style={{ fontWeight: 600 }}>Your Device</h1>
        <p style={{ fontWeight: 20 }}>
          You're signed in to 1 device with gauravsinghwork72@gmail.com.
        </p>
        <img
          style={{ width: 250, padding: 40 }}
          src="https://i.ibb.co/jLj59xt/online-infobox-3x.png"
          alt="online-infobox-3x"
          border="0"
        />
        <h3 style={{ fontWeight: 600 }}>Gaurav's MacBook Air</h3>
        <p>MacBook Air 13″</p>
        <a
          style={{
            textDecoration: "none",
            color: "rgb(96, 114, 249)",
          }}
          href=""
        >
          Get Started &gt;
        </a>
        <br />
        <br />
        <br />
        <p>
          Don't see your device here? To link a device or make changes, view
          your{" "}
          <a
            style={{
              textDecoration: "none",
              color: "rgb(96, 114, 249)",
            }}
            href=""
          >
            Apple ID settings.
          </a>
          <br />
          <br />
        </p>
        <hr style={{ color: "rgba(255, 255, 255, 0.897)" }} />
        <div style={{ display: "flex", gap: 20, padding: 30 }}>
          <img
            style={{ height: 50, alignItems: "center" }}
            src="https://i.ibb.co/n7pYR00/finance-currency-GEO-US.jpg"
            alt="finance-currency-GEO-US"
            border="0"
          />
          <p>
            See the trade-in value of your device instantly. Trade it in for
            credit toward a new purchase, an Apple Store Gift Card or <br />{" "}
            recycle it for free with Apple Trade in. <br />
            <a
              style={{
                textDecoration: "none",
                color: "rgb(96, 114, 249)",
              }}
              href=""
            >
              See how it works{" "}
            </a>
          </p>
        </div>
      </div>
      <Slider
        style={{
          backgroundColor: "rgb(243, 247, 251)",
          display: "flex",
          padding: "40px",
          gap: "100px",
          marginTop: "-100px",
        }}
        {...slider1}
      >
        {Data.map((item) => (
          <SliderRct name={item.name} desc={item.desc} />
        ))}
      </Slider>

      <div style={{ padding: "100px" }} className="botton">
        <h1 style={{ fontWeight: 600 }}>Account Settings</h1>
        <div style={{ display: "flex" }}>
          <h2 style={{ fontWeight: 500 }}>Shipping</h2>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}>Shipping address</p>
              <li>Gaurav Singh</li>
              <li>India</li>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Edit
                </a>
              </li>
            </ul>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}> Contact Information</p>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ fontWeight: 500 }}>Payment</h2>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}>Billing contact</p>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Edit
                </a>
              </li>
            </ul>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}>Billing address</p>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Edit
                </a>
              </li>
            </ul>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}>Payment method</p>
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ fontWeight: 500 }}>Privacy</h2>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ul style={{ listStyleType: "none" }}>
              <p style={{ fontWeight: 600 }}>Personal Information</p>
              <li>
                <p>
                  Personal information You're in control of your personal
                  information and can manage your data or delete your account{" "}
                  <br /> at any time. Apple is committed to protecting your
                  privacy.
                </p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Manage my personal Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ fontWeight: 500 }}>Apple ID</h2>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p>gauravsinghwork72@gmail</p>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(96, 114, 249)",
                  }}
                  href=""
                >
                  Manage Apple ID
                </a>
                <br />
                <br />
                <p>
                  Your Apple ID is the account you use to access Apple services
                  like the App Store, Apple Music, <br /> iCloud, iMessage,
                  FaceTime, and more
                </p>
                <br />
                <br />
                <img
                  style={{ width: "300px" }}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/stripofapps-2018-icon?wid=656&hei=68&fmt=jpeg&qlt=95&.v=1548353257225"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
