import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/dashboard/Sidebar.module.css';
import items from '../utils/Dashboard/DashboardData';

function Sidebar() {
  const router = useRouter();

  return (
    <div
      className="shadow-sm"
      style={{
        position: 'fixed',
        height: '100%',
        width: '20%',
      }}
    >
      {items.map((item, id) => (
        <ul
          key={id}
          className={router.pathname == `${item.href}` ? styles.active : ''}
          id={styles.sidebar_ul}
        >
          <li>
            <Link href={item.href}>
              <span>{item.icon}</span> {item.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Sidebar;
