import React from 'react';
import styles from '../../styles/dashboard/Allorder.module.css';

function allorders() {
  return (
    <div className="m-2">
      <h1>All orders</h1>
      <div className="row shadow p-4 border rounded m-auto">
        <div className="col">
          <input
            type="text"
            placeholder="search by user email"
            className={`w-100 rounded ${styles.search_by_email}`}
          />
        </div>
        <div className="col">
          <select
            className={`form-select ${styles.dashboard_allorder_search}`}
            aria-label=".form-select-sm example"
          >
            <option selected>Delivered</option>
            <option value="processing">Processing</option>
            <option value="pending">Pending</option>
            <option value="cancel">Cancel</option>
          </select>
        </div>
      </div>
      <br />
      <table className="table shadow text-center rounded">
        <thead>
          <tr>
            <th scope="col">EMAIL</th>
            <th scope="col">TIME</th>
            <th scope="col">METHOD</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test@gmail.com</td>
            <td>1/12/2022</td>
            <td>COD</td>
            <td>$185</td>
            <td>Delivered</td>
            <td>
              <select
                className={`form-select ${styles.dashboard_allorder_search}`}
                aria-label=".form-select-sm example"
              >
                <option selected>Delivered</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
                <option value="cancel">Cancel</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>test@gmail.com</td>
            <td>1/12/2022</td>
            <td>COD</td>
            <td>$185</td>
            <td>Delivered</td>
            <td>
              <select
                className={`form-select ${styles.dashboard_allorder_search}`}
                aria-label=".form-select-sm example"
              >
                <option selected>Delivered</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
                <option value="cancel">Cancel</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default allorders;
