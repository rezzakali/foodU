import Image from "next/image";
import Link from "next/link";
import { BsFillCartPlusFill } from 'react-icons/bs';
import styles from '../../styles/LeftCard.module.css';

const CardLeft = ({ image, para, price, title }) => {
    return (
        <div className={`col d-flex border my-1 mx-1 w-100 rounded p-1 ${styles.left_card}`}>
            <Image src={image} width={100} height={100} alt='card_image' />
            <div>
                <Link href='#' className={`${styles.title}`}>{title}</Link>
                <p>{para}</p>
                <li className="d-flex justify-content-between">
                    <h6 className="text-warning fw-bold">$ {price}</h6>
                    <div className={`${styles.left_card_cart}`}><BsFillCartPlusFill /></div>
                </li>
            </div>
        </div>
    );
};

export default CardLeft;