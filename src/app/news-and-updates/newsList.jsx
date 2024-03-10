"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news?page=${pageNumber}`, { next: { revalidate: 1000 } });

        const response = await fetch(`https://sxrtmwec.forapprovalonly.net/api/article_category/sustainability-news`, { next: { revalidate: 1000 } });
        const result = await response.json();
        const resultData = result.articles.data.slice(1);

        const sortedData = [...newsData, ...resultData].sort((a, b) => new Date(b.date) - new Date(a.date));

        setNewsData(sortedData);
        setIsLoading(false);

        // Extract unique years from the data
        const uniqueYears = [...new Set(sortedData.map(item => new Date(item.date).getFullYear()))];
        setYears(uniqueYears);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  const handleShowAll = () => {
    setActiveYear(null);
  };

  const handleByYear = (year) => {
    setActiveYear(year);
  };

  const handleShowMore = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const filteredNewsData = activeYear
    ? newsData.filter(newsItem => new Date(newsItem.date).getFullYear() === activeYear)
    : newsData;

  const showMoreLimit = filteredNewsData.length >= 10;

  return (
    <>
      <div className="news-tabs-container">
        <div className="tabs">
          <div className={`btn-tab ${activeYear === null ? 'active' : ''}`} onClick={handleShowAll}><span>All</span></div>
          {years.map((year, index) => (
            <div key={`${year}-${index}`} className={`btn-tab ${activeYear === year ? 'active' : ''}`} onClick={() => handleByYear(year)}>
              <span>{year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tabs-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {filteredNewsData.map((newsItem, index) => (
              <div className="tab-item" key={index}>
                <div className="image-container">
                  <Link href={newsItem.slug} title={newsItem.title}></Link>
                  {/* <img src={`https://smc-revamp.forapprovalonly.net/${newsItem.image_url}`} height={250} width={250} /> */}
                  {!newsItem.image_url ?
                    <Image src={`smc_placeholder.png`} width='184' height='188' alt='Thumbnail' />
                    :
                    ''
                  }
                </div>
                <div className="description-container">
                  {/* Date */}
                  <p>{newsItem.date}</p>
                  <h5>{newsItem.title.replace(/<\/?[^>]+>/gi, '')}</h5>
                  <Link href={newsItem.slug} title="Read More">Read More</Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {showMoreLimit &&
        <div className="bordered-button show-more" onClick={handleShowMore}>
          Show More
        </div>
      }
    </>
  )
}

// import React, { useState, useEffect, Suspense } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// // export async function getListofNews(offset = 0, limit = 10) {
// //   const res = await fetch(`https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news?offset=${offset}&limit=${limit}`, { cache: 'no-store' })
// //     .then((data) => {
// //       if (!data.ok) throw new Error('Failed data fetch...');
// //       return data.json();
// //     });
// //   return res?.articles?.data.slice(1) || [];
// // }

// export default function NewsList() {
//   const [newsData, setNewsData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [pageNumber, setPageNumber] = useState(1);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news?page=${pageNumber}&limit=5`);
//         const result = await response.json();
//         const resultData = result.articles.data.slice(1);

//         const sortedData = [...newsData, ...resultData].sort((a, b) => new Date(b.date) - new Date(a.date));

//         setNewsData(sortedData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pageNumber]); // Fetch data when the component mounts and when pageNumber changes

//   const handleShowAll = () => {

//   };

//   const handleByYear = () => {

//   };

//   const handleShowMore = () => {
//     setPageNumber(prevPageNumber => prevPageNumber + 1);
//   };


//   return (
//     <>
//       <div className="news-tabs-container">
//         <div className="tabs">
//           <div className="btn-tab active" onClick={handleShowAll}><span>All</span></div>
//           {/* Show all year and filter it by its year when it clicked. */}
//           <div className="btn-tab"><span>2023</span></div>
//           <div className="btn-tab"><span>2022</span></div>
//           <div className="btn-tab"><span>2021</span></div>
//         </div>
//       </div>

//       <div className="tabs-content">
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             {newsData.map(newsItem => (
//               <div className="tab-item" key={newsItem.id}>

//                 <div className="image-container">
//                   <Link href={newsItem.slug} title={newsItem.title}>
//                   </Link>

//                   <img src={`https://smc-revamp.forapprovalonly.net/${newsItem.image_url}`} height={250} width={250} />
//                 </div>
//                 <div className="description-container">
//                   {/* Date */}
//                   <p>Economic  |  {newsItem.date}</p>

//                   <h5>{newsItem.title.replace(/<\/?[^>]+>/gi, '')}</h5>
//                   <Link href={newsItem.slug} title="Read More">Read More</Link>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//       </div>

//       <div className="bordered-button show-more" onClick={handleShowMore}>
//         Show More
//       </div>
//     </>
//   )
// }
