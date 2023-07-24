import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SingleCart from "./SingleCart";

const CollageCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://education-master-server.vercel.app/collages")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="my-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cartItems.slice(0, 3).map((item) => (
            <SingleCart key={item._id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CollageCart;
