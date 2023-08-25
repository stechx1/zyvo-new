'use client';
import { PreLoader } from '@/preloader';
import {useState, useEffect} from "react"
import { Navbar } from '.';
import { Footer } from './Footer';

const PageLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <PreLoader />
  ) : (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
