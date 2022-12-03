import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from '../components/mainFooter/footer';
import Navbar from '../components/Navbar';
import DashNavbar from '../Dashboard/DashNavbar';
import Sidebar from '../Dashboard/Sidebar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState(true);

  return (
    <>
      {admin ? (
        <>
          <Head>
            <title>FoodU</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <SessionProvider session={pageProps.session}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </SessionProvider>
        </>
      ) : (
        <>
          <Head>
            <title>Dashboard</title>
          </Head>
          <DashNavbar />
          <div style={{ marginTop: '-15px' }}>
            <div id="sidebar">
              <Sidebar />
            </div>
            <div style={{ marginLeft: '275px', paddingTop: '10px' }}>
              <Component {...pageProps} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MyApp;