import { Navigation, Footer } from '../../components';

export const PageLayout = ({ children }) => {
  return (
    <div className="parallax">
      <Navigation />
      <main className='relative'>{children}</main>
      <Footer />
    </div>
  );
};
