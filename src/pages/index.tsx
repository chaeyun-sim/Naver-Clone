import { useEffect, useState } from 'react';
import { css } from '../../styled-system/css';
import LeftSection from '../components/Home/LeftSection';
import RightSection from '../components/Home/RightSection';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';
import TopSearchBar from '../components/base/TopSearchBar';

const Main = () => {
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const specificHeight = 278;

    if (currentScrollPos > specificHeight) {
      setKeyword('');
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {show && <TopSearchBar keyword={keyword} onSetKeyword={setKeyword} />}
      <Layout>
        <div className={container}>
          <Header keyword={keyword} onSetKeyword={setKeyword} />
          <main className={main}>
            <section className={sectionLeft}>
              <LeftSection />
            </section>
            <section className={sectionRight}>
              <RightSection />
            </section>
          </main>
        </div>
      </Layout>

      <Footer />
    </div>
  );
};

export default Main;

const container = css({
  height: '100%',
  width: '100%',
});

const main = css({
  height: '100%',
  display: 'flex',
  gap: '3rem',
  marginBottom: '6rem',
  marginTop: '4.3rem',
  padding: '0 3rem',
});

const sectionLeft = css({
  width: '83rem',
});

const sectionRight = css({
  width: '42rem',
});
