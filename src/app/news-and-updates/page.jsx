
import './style.scss'
import NewsBanner from './banner'
import Image from 'next/image'
import Link from 'next/link'
// import axios from 'next-axios';

import NewsList from './newsList'

export const metadata = {
  title: 'News and Updates',
  description: 'News and Updates | SMC Sustainability',
}

export async function getLatestNews() {
  const res = await fetch('https://sxrtmwec.forapprovalonly.net/index.php/api/article_category/news').then((data) => {
    if (!data.ok) throw new Error('Failed data fetch...')
    return data.json()
  });
  return res?.articles?.data || [];
}

export default function page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>News & updates</h1>
        </div>

        <NewsBanner />

        <NewsList />

        {/* <div>
          {newsData.map((data) => (
            <div key={data}>
              {data}
            </div>
          ))}
        </div> */}

      </div>

    </section>
  )
}
