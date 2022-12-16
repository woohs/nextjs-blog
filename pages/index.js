import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import { getPostData, getSortedPostsData } from '../lib/post';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const postsData = allPostsData.filter(post => post.title !== 'introduction')
  const introductionPost = await getPostData('introduction');

  return {
    props: {
      postsData,
      introductionPost
    },
  }
}

export default function Home({ postsData, introductionPost }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} dangerouslySetInnerHTML={{ __html: introductionPost.contentHtml }} />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}