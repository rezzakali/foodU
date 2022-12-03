import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineReviews, MdProductionQuantityLimits } from 'react-icons/md';
import DashboardCard from '../../Dashboard/DashboardCard';
import DashProductCard from '../../Dashboard/DashProductCard';
import burgerImage from '../../public/assets/burger.png';
import foodImage from '../../public/assets/food.png';
import styles from '../../styles/dashboard/DashboardSelection.module.css';

function dashboard() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div>
      <div
        className="d-flex align-item-center justify-content-evenly"
        style={{ width: '100%' }}
      >
        <DashboardCard
          icn={<AiOutlineShoppingCart />}
          title={'Total Orders'}
          count={101}
          bgColor={'#b0f4c7'}
          iconColor={'#3ae374'}
        />
        <DashboardCard
          icn={<FaUsers />}
          title={'Total User'}
          count={2}
          bgColor={'#cbbfff'}
          iconColor={'#9e87ff'}
        />
        <DashboardCard
          icn={<AiFillHeart />}
          title={'Total Wishlist'}
          count={100}
          bgColor={'#ffd9a3'}
          iconColor={'#ff9f1a'}
        />
      </div>
      <br />
      <div
        className="d-flex m-auto align-item-center justify-content-evenly"
        style={{ width: '100%' }}
      >
        <DashboardCard
          icn={<MdProductionQuantityLimits />}
          title={'Total Product'}
          count={45}
          bgColor={'#feb3ca'}
          iconColor={'#fc4c82'}
        />
        <DashboardCard
          icn={<BiCategory />}
          title={'Total Category'}
          count={20}
          bgColor={'#aaeae3'}
          iconColor={'#2bcbba'}
        />
        <DashboardCard
          icn={<MdOutlineReviews />}
          title={'Total Review'}
          count={8}
          bgColor={'#daeaaf '}
          iconColor={'#a3cb38'}
        />
      </div>
      <br />
      <br />
      <div className="p-1">
        <h2>Dashboard Summary</h2>
        <h5>Some Product</h5>
        <br />
        <div className="d-flex align-item-center justify-content-between">
          <DashProductCard
            imge={burgerImage}
            title={'Burger'}
            category={'Burger'}
          />
          <DashProductCard
            imge={foodImage}
            title={'Pizza'}
            category={'Pizza'}
          />
          <DashProductCard
            imge={burgerImage}
            title={'Burger'}
            category={'Burger'}
          />
          <DashProductCard
            imge={foodImage}
            title={'Pizza'}
            category={'Pizza'}
          />
        </div>
      </div>
      <br />
      <h3>Some Users</h3>
      <table className="table text-center shadow rounded border">
        <thead>
          <tr>
            <th scope="col">FULL NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ROLE</th>
            <th scope="col">UPDATE ROLE</th>
            <th scope="col">PROFILE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rezzak Ali</td>
            <td>test@gmail.com</td>
            <td>Admin</td>
            <td>
              <select
                className={`form-select ${styles.dashboard_selection}`}
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
            <td>
              <AiFillDelete style={{ fontSize: '26px', fill: 'red' }} />
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Some Orders</h4>
      <table className="table text-center shadow rounded border">
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
                className={`form-select ${styles.dashboard_selection}`}
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
                className={`form-select ${styles.dashboard_selection}`}
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

export default dashboard;
