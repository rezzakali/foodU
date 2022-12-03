import Image from 'next/image';
import React from 'react';
import styles from '../../styles/dashboard/Allorder.module.css';

function allusers() {
  return (
    <div className="m-2">
      <h1>All users</h1>
      <div className="row shadow p-4 border rounded m-auto">
        <input
          type="text"
          placeholder="search by name, email or user role"
          className={`w-100 rounded ${styles.search_by_email}`}
        />
      </div>
      <br />
      <table className="table shadow text-center rounded">
        <thead>
          <tr>
            <th scope="col">FULL NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ROLE</th>
            <th scope="col">UPDATE ROLE</th>
            <th scope="col">PROFILE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rezzak Ali</td>
            <td>test@gmail.com</td>
            <td>Admin</td>
            <td>
              <select
                className={`form-select ${styles.dashboard_allorder_search}`}
                aria-label=".form-select-sm example"
              >
                <option selected>Admin</option>
                <option value="user">User</option>
              </select>
            </td>
            <td>
              <Image
                src="/pic.png"
                width={100}
                height={100}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default allusers;
