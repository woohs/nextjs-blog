import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id);
  return {
    props: {
      postData
    }
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData?.title}</h1>
        <div className={utilStyles.lightText}>{postData?.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
      </article>
    </Layout>
  );
}
