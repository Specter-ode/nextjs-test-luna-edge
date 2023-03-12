import Layout from '@/Layout/Layout';
import { NextPage } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
  return (
    <Layout title="Page not founded">
      <h1 className="mb-[40px] text-center text-[30px] text-error-color">Error 404</h1>

      <Link
        href={'/'}
        className="mx-auto block w-[200px] rounded-[6px] border-2 border-accent-color py-[10px] text-center text-[20px] text-accent-color  hover:bg-accent-color hover:text-main-bgcolor"
      >
        Back to Main
      </Link>
    </Layout>
  );
};

export default ErrorPage;
