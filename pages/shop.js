import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlineUnorderedList } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import Button from '../components/Button';
import PageHeaderScreen from '../components/PageHeaderScreen';
import styles from '../styles/shop/Index.module.css';

function shop() {
  return (
    <div className="m-5">
      <PageHeaderScreen pageName={'Shop'} />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-9">
          <div className="d-flex align-items-center justify-content-between">
            <p>Showing results</p>

            <div className="d-flex align-items-center justify-flex-end">
              <div className="d-flex">
                <AiOutlineUnorderedList
                  className={`me-1 ${styles.icon_of_sort}`}
                />
                <HiOutlineSquares2X2
                  className={`me-3 ${styles.icon_of_sort}`}
                />
              </div>
              <div>
                <Form.Select
                  aria-label="Default select example"
                  className={`${styles.select}`}
                >
                  <option>Default Sorting</option>
                  <option value="high">High to low</option>
                  <option value="low">Low to high</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="rounded mt-5" style={{ backgroundColor: '#00a149' }}>
            <p className="text-white p-2 text-center">
              No products were found matching your selection.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="border rounded">
            <h6 className="p-2 fw-bold">Caterories</h6>
          </div>
          <br />
          <Button title={'Clear Filter'} />
          <br />
          <br />
          <div
            className="border p-2 rounded"
            style={{ backgroundColor: '#fff7e2' }}
          >
            <input
              type="text"
              placeholder="Search product"
              className={`${styles.input_field}`}
            />
            <AiOutlineSearch className={`${styles.icon}`} />
          </div>
          <br />
          <br />
          <h6 className="fw-bold">Best Deals</h6>
        </div>
      </div>
    </div>
  );
}

export default shop;
