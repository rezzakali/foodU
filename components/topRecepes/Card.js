import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import boroBurgerImage from '../../public/assets/boro_burger.png';
import styles from '../../styles/Recepes.module.css';

function TopRecepesCard() {
    return (
        <Card className={`text-center bg-warning m-auto  ${styles.recepes_right_side_card}`}>
            <Card.Body>
                <h2>Super Delicious</h2>
                <Card.Title className={`${styles.title}`}>CHICKEN</Card.Title>
                <Card.Text className='text-white'>
                    CALL US NOW:
                </Card.Text>
                <Card.Text className='text-danger fw-bold'>1-800-555-333</Card.Text>
                <Image src={boroBurgerImage} width={100} height={100} style={{ width: '70%', height: '100%' }} alt='burger_image' />
            </Card.Body>
        </Card>
    );
}

export default TopRecepesCard;