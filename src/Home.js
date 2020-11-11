import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/Launch/Phase2/1500x600_Hero-Tall_np._CB419394629_.jpg"
        alt="amazon prime banner"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="5555"
          price={399.99}
          rating={5}
          title="The Everything Store: Jeff Bezos and the Age of Amazon"
          image="https://images-na.ssl-images-amazon.com/images/I/51uQsD9dyiL._SX320_BO1,204,203,200_.jpg"
        />
        <Product
          id="5566"
          price={14999.99}
          rating={5}
          title="Apple AirPods Pro"
          image="https://images-na.ssl-images-amazon.com/images/I/71tbMyhmxcL._SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5577"
          price={249.99}
          rating={5}
          title="Lakme 9 to 5 Primer + Gloss Nail Colour, Lilac Link, 6 ml"
          image="https://m.media-amazon.com/images/I/517MmA7emIL._AC_UL320_.jpg"
        />
        <Product
          id="5588"
          price={2199.99}
          rating={5}
          title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SX425_.jpg"
        />
        <Product
          id="5599"
          price={49999.99}
          rating={5}
          title="Apple iPhone 11 (64GB) - Black (Includes EarPods, Power Adapter)"
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5500"
          price={79999.99}
          rating={5}
          title="Samsung 138 cm (55 Inches) Q Series 4K UHD QLED Smart TV QA55Q7FNAK (Black) (2018 model)"
          image="https://images-na.ssl-images-amazon.com/images/I/81WuvVxAK8L._SX522_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
