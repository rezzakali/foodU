import React from 'react';

function DashboardCard({ icn, title, count, bgColor, iconColor }) {
  return (
    <div
      className="d-flex border p-2 shadow border rounded "
      style={{ width: '350px' }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          borderRadius: '50%',
          backgroundColor: bgColor,
        }}
      >
        <i style={{ color: iconColor, fontSize: '25px' }}> {icn}</i>
      </div>
      <div className="d-block ms-2">
        <h5>{title}</h5>
        <h2 style={{ lineHeight: '20px' }}>{count}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;
