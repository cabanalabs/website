import { Navigation, Footer } from '../../components';

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className='relative'>{children}</main>
      <Footer />
    </>
  );
};
