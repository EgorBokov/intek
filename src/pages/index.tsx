import { NextPage } from 'next';
import Head from 'next/head';
import { ProductPresentation } from '@/components/features/ProductPresentation';

const App: NextPage = () => {
  return (
      <>
          <Head>
              <title>Интек | Официальный дистрибьютор 1С в России</title>
          </Head>
          <div>
              <ProductPresentation />
          </div>
      </>
  );
}

export default App;