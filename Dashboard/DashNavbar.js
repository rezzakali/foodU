import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiMoon, HiSun } from 'react-icons/hi';

function DashNavbar() {
  return (
    <>
      <Navbar
        bg="light"
        expand={'lg'}
        className="mb-3 sticky-top shadow-sm m-auto"
        style={{ height: '5%' }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls />
          <Navbar.Brand className="fw-bold fs-4">Dashboard</Navbar.Brand>

          <div style={{ marginRight: '10px', float: 'right' }}>
            <span className="mx-4">
              <HiMoon />
              <HiSun />
            </span>
            <Image
              src="/pic.png"
              width={100}
              height={100}
              style={{
                objectFit: 'cover',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
              }}
              alt="user_pic"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default DashNavbar;
