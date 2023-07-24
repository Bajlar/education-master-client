import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import CartItem from "./CartItem";

const Collages = () => {
  const [collageList, setCollageList] = useState([]);

  useEffect(() => {
    fetch("https://education-master-server.vercel.app/collages")
      .then((res) => res.json())
      .then((data) => {
        setCollageList(data);
      });
  }, []);

  return (
    <div className="my-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collageList.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Collages;
