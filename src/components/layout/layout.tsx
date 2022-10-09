import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ReactNode } from 'react';

export function Layout(props: {
  children: ReactNode
}) {
  return (
    <div className='wrapper'>
      <Header />
      <main className="page-content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
