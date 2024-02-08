import { css } from '../../styled-system/css';
import LeftSection from '../components/LeftSection/LeftSection';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const Main = () => {
  return (
    <div className={container}>
      <Header />
      <main className={main}>
        <section className={sectionLeft}>
          <LeftSection />
        </section>
        <section className={sectionRight}>sec1</section>
      </main>
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
});

const sectionLeft = css({
  width: '83rem',
});

const sectionRight = css({
  width: '42rem',
});
