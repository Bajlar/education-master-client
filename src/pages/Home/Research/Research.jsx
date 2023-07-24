import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Container from '../../../components/Container/Container';

const Research = () => {
  return (
    <>
      <div className="my-8 px-4">
        <SectionTitle heading={"Research Paper Links"}></SectionTitle>
      </div>
      <Container>
        <ul className="text-lg text-center underline text-blue-600">
          <a
            href="https://www.collegeboard.org/"
            target="_blank"
            rel="noreferrer"
          >
            PQR College
          </a>
          <li>
            <a
              href="https://www.commonapp.org/"
              target="_blank"
              rel="noreferrer"
            >
              RST Institute
            </a>
          </li>
          <li>
            <a href="https://www.ed.gov/" target="_blank" rel="noreferrer">
              ABC University
            </a>
          </li>
          <li>
            <a
              href="https://www.collegeconfidential.com/"
              target="_blank"
              rel="noreferrer"
            >
              LMN University
            </a>
          </li>
          <li>
            <a
              href="https://www.niche.com/colleges/"
              target="_blank"
              rel="noreferrer"
            >
              XYZ College
            </a>
          </li>
          <li>
            <a
              href="https://www.princetonreview.com/"
              target="_blank"
              rel="noreferrer"
            >
              EFG Institute
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Research;