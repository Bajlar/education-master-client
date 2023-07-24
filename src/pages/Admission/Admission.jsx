import React from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="my-8">
      <Container>
        <ul className="text-lg text-center underline text-blue-600">
          <li>
            <Link to="/information">PQR College</Link>
          </li>
          <li>
            <Link to="/information">RST Institute</Link>
          </li>
          <li>
            <Link to="/information">ABC University</Link>
          </li>
          <li>
            <Link to="/information">LMN University</Link>
          </li>
          <li>
            <Link to="/information">XYZ College</Link>
          </li>
          <li>
            <Link to="/information">EFG Institute</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Admission;