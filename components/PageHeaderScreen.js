import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styles from '../styles/pageHeaderScreen/Index.module.css';

const PageHeaderScreen = ({ pageName }) => {
  return (
    <div className={`${styles.header}`}>
      <h1 className="text-center">{pageName}</h1>
      <div className={`${styles.header_link}`}>
        <Link href="/">Home</Link>
        <span>
          <IoIosArrowForward />
          {pageName}
        </span>
      </div>
    </div>
  );
};

export default PageHeaderScreen;
