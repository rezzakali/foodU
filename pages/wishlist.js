import React from 'react';
import PageHeaderScreen from '../components/PageHeaderScreen';

const wishlist = () => {
  return (
    <div>
      <PageHeaderScreen pageName={'Wishlist'} />
      <br />
      <br />
      <br />
      <div
        className="rounded mt-5"
        style={{
          backgroundColor: '#00a149',
          width: '50%',
          margin: 'auto',
        }}
      >
        <p className="text-white p-2 text-center">
          You are not wishlist any product
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default wishlist;
