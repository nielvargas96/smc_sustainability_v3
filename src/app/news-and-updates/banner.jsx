"use client"

import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// import image_url from '/images/news_update_banner.png'
// import Loading from '../loading';

export async function getLatestNews() {
  const res = await fetch('https://sxrtmwec.forapprovalonly.net/api/article_category/sustainability-news', { cache: 'no-store', }).then((data) => {
    if (!data.ok) throw new Error('Failed data fetch...')
    return data.json()
  });
  return res?.articles?.data || [];
}

export default function NewsBanner() {
  // const [latestNews, setLatestNews] = useState([]);


  // async function fetchLatestNews() {
  //   try {
  //     const newsData = await getLatestNews();
  //     setLatestNews(newsData);
  //   } catch (error) {
  //     console.error('Error fetching latest news:', error);
  //   }

  //   fetchLatestNews()

  // useEffect(() => {
  //   async function fetchLatestNews() {
  //     try {
  //       const newsData = await getLatestNews();
  //       setLatestNews(newsData);
  //     } catch (error) {
  //       console.error('Error fetching latest news:', error);
  //     }
  //   }

  //   fetchLatestNews();
  // }, []); // Run once on component mount



  // const latestNews = getLatestNews();

  // if (latestNews.length === 0) {
  //   // Loading state or handle when no news is available
  //   // return <p>Loading..</p>;

  //   console.log('tet')
  // }

  // console.log(latestNews)

  // const { title, image_url, date, slug } = latestNews;

  const [latestNews, setLatestNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await getLatestNews();
        setLatestNews(newsData[0]); // Access the first element of the array
      } catch (error) {
        console.error('Error fetching latest news:', error);
      }
    };

    fetchData();
  }, []);

  if (!latestNews) {
    // You can return a loading state or an empty div here
    return null;
  }

  const { title } = latestNews;

  // Static sanmiguel news - Ms. Joie

  return (
    <>
      <div className="news-banner-container">
        <div className="left-content">
          {/* <Suspense fallback={<Loading />}>
          
          </Suspense> */}

          <div className="description-container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              exit={{ y: 30, opacity: 0 }}
            >
              {latestNews.title.replace(/<\/?[^>]+>/gi, '')}
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              exit={{ y: 30, opacity: 0 }}
            >
              {latestNews.date}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{ y: 30, opacity: 0 }}
              className="action"
            >
              <Link href={`/news-and-updates/${latestNews.slug}`} title="Read more" className="bordered-button">
                Read More
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="right-content">
          <div className="image-container">
            {/* <img src="" alt="" /> */}
            {/* <Image src='/news_update_banner.png' width='576' height='375' alt={title} style={{ minHeight: '375px', position: 'relative' }} /> */}
            {!latestNews.image_webp_url ?
              <Image src='placeholder.png' alt='SMC Placeholder Logo' width={476} height={375} />
              :
              <img src={`${process.env.NEXT_PUBLIC_API}${latestNews.image_webp_url}`} alt={latestNews.title} style={{ width: "100%" }} />}
          </div>
        </div>
      </div>
    </>
  );
}
