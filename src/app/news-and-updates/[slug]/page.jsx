import axios from 'axios'
// import './style.scss'
import Image from 'next/image'


// export async function generateStaticParams() {
//   const res = await fetch('https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news').then((res) => res.json());
//   const news = res.articles.data;
//   return news.map((newsItem) => ({
//     slug: newsItem.slug
//   }));
// }

// export async function generateMetadata() {
//   const getNews = await fetch('https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news/').then((res) => res.json());
//   const getNewsData = getNews.articles.data;
//   return getNewsData
// }

// export async function getServerSideProps({ params }) {
//   const { slug } = params;

//   // Fetch data for the specific post using slug
//   const response = await fetch(`https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news/${slug}`);
//   const news = await response.json();

//   return {
//     props: { news },
//   };
// }

// export async function getServerSideProps({ params }) {
//   const { slug } = params;
// }

// export async function generateStaticParams() {
//   const res = await fetch('https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news').then((res) => res.json());
//   const news = res.articles.data.slug;
//   return news.map((newsItem) => ({
//     slug: newsItem.slug
//   }));
// }

// async function getDataFromStaticParameters() {
//   const getNews = await fetch('https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news/').then((res) => res.json());
//   const getNewsData = getNews.articles.data;
//   return getNewsData
// }

// export const metadata = {
//   title: 'News and Updates',
//   description: 'News and Updates | SMC Sustainability',
// }

export const dynamicParams = true;

// export async function generateMetadata({ params }) {
//   const newsDatas = await generateStaticParams()

//   newsDatas.map((item) => {
//     if (item.slug === slug) {
//       return (
//         {
//           title: item.meta_title,
//           description: item.meta_description
//         }
//       );
//     }
//     return null;
//   })
// }

export async function generateStaticParams() {
  try {
    const response = await axios.get('https://sxrtmwec.forapprovalonly.net/api/article_category/sustainability-news', { revalidate: 0 });
    const newsData = response.data.articles.data;

    return newsData.map((item, index) => ({
      slug: item.slug
    }));

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function Page({ params }) {
  // const newsDatas = await generateStaticParams()'  

  const { slug } = params;
  const response = await axios.get('https://sxrtmwec.forapprovalonly.net/api/article_category/sustainability-news', { revalidate: 0 });
  const newsData = response.data.articles.data;

  return (
    <section className="news-update-container">
      <div className="block-content">
        <div className='description-text'>
          {!newsData ? <div>No available news</div> :
            newsData.map((item, index) => {
              if (item.slug === slug) {
                return (
                  <>
                    <div key={`${index}-${item.slug}`}>
                      <div className="news-title">
                        <h1> {item.title}</h1>
                      </div>
                      <div>
                        {item.teaser_text && (
                          <p dangerouslySetInnerHTML={{ __html: item.teaser_text }} ></p>
                        )}
                        {item.image_webp_url && <img src={`${process.env.NEXT_PUBLIC_API}${item.image_webp_url}`} title={item.title} />}
                        {item.thumbnail_webp_url && <img src={`${process.env.NEXT_PUBLIC_API}${item.thumbnail_webp_url}`} title={item.title} />}
                      </div>
                    </div >
                  </>
                );
              }
              return null;
            })}

        </div>

      </div>
    </section >
  );
}