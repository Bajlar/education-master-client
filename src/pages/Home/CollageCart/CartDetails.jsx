import React from "react";
import Container from "../../../components/Container/Container";
import { useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        eum obcaecati assumenda veritatis, similique eveniet dolorum ipsam
        provident et soluta mollitia commodi dolores repellendus a totam dolore
        quidem error?
      </Container>
    </div>
  );
};

export default CartDetails;
