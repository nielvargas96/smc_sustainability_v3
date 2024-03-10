"use client"
import React from 'react'
import './style.scss'
import Image from 'next/image'
import { awardsYear } from '@/api/api'
import { useState } from 'react'

// export const metadata = {
//   title: 'Our Approach',
//   description: 'Our Approach | SMC Sustainability',
// }

export default function Index() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  }

  const getAwardsYear = () => {
    return awardsYear.map((item, index) => (
      <div key={index} className={`tab-title ${index === activeIndex ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
        {item.year}
      </div>
    ))
  }

  const getAwardsYearItems = () => {
    return awardsYear.map((item, index) => (
      <div key={index} className={`tabs-item-wrapper ${index === activeIndex ? 'active' : ''}`}>
        {
          item.items?.map((item, itemIndex) => (
            <div key={itemIndex} className='tabs-item'>
              {!item.img ? <></> :
                <div className='img-container'>
                  <Image src={item.img} fill={true} alt='Awards' />
                </div>
              }

              <div className='description-container'>
                <h5 className='title' dangerouslySetInnerHTML={{ __html: item.title }}>
                </h5>

                {/* <p className='sublabel'>{item.subtitle}</p> */}

                <p className='desc'>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div >
    ));
  }

  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>

          <section className='description-container'>
            <h1>Awards and Citations</h1>

            <section className='awards-tab-container'>
              <div className='tabs'>
                {/* YEAR */}
                {getAwardsYear()}
              </div>

              <div className='tabs-content'>
                {/* YEAR ITEMS/CONTENT */}
                {getAwardsYearItems()}
              </div>
            </section>

            {/* <h3 className='blue'>2022</h3>

            <div className='full-img'>
              <Image src="/page/awards_2022.png" width={950} height={500} alt='2022' />
            </div>
            <p> <b>Special recognition by the Department of Labor
              and Employment (DOLE)</b> <br />
              as an exemplary Filipino
              company, with malasakit for its own people (SMC)
            </p>

            <p>French Government’s Legion of Honor for Ramon S. Ang</p>

            <p><b>Forbes Magazine, World’s Best Employers List</b> (SMC placed 174th out of 800 companies)</p>

            <p><b>ASEAN Corporate Governance Scorecard</b> <br />
              – Three Golden Arrows as a top-performing
              publicly-listed company in the Philippines given by
              the Institute of Corporate Directors (SMFB)</p>

            <p><b>The Asset Triple A Country Awards for Sustainable Finance</b> <br />
              – San Miguel Global Power
            </p>

            <p><b>Alpha Southeast Asia ESG/Green Finance Awards</b> <br />
              – San Miguel Global Power
            </p>

            <p><b>Presidential Mining Environmental Award</b> <br />
              – Titanium Achievement Award for Quarry
              Operator Category, Northern Cement Corporation</p>

            <p>Consistently recognized as a <b>Top Taxpayer in the
              Local Government Units (LGUs)</b>  where we operate
              and by the government’s revenue collection
              agencies, in particular the Bureau of Customs</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel, Inc.</p>

            <p><b>Monde Selection Awards: Gold</b> <br />
              – Ginebra San Miguel Premium Gin, Antonov
              Vodka, Ginebra San Miguel, 1834 Premium
              Distilled Gin, GSM Blue Light Gin, GSM Blue
              Flavors Pomelo, Vino Kulafu
            </p>

            <p><b>Monde Selection Awards: Silver</b>
              – GSM Blue Flavors Mojito, GSM Blue Flavors
              Margarita</p>

            <h3 className='blue'>2021</h3>

            <div className='full-img'>
              <Image src="/page/awards_2021.png" width={950} height={500} alt='2021' />
            </div>
            <p><b>The Asset ESG Corporate Awards</b> <br />
              – San Miguel Corporation</p>

            <p><b>The Asset Gold Award in Excellence in
              Environmental, Social and Governance</b> <br />
              – San Miguel Corporation</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel</p>

            <p><b>Monde Selection Awards: Gold</b> <br />
              – Ginebra San Miguel Premium Gin, Antonov
              Vodka, Ginebra San Miguel, GSMI Blue Light Gin,
              GSM Blue Flavors Pomelo, Vino Kulafu, GSM Blue
              Flavors Mojito</p>

            <p><b>Monde Selection Awards: Silver</b> <br />
              – GSM Blue Flavors Margarita
            </p>


            <h3 className='blue'>2020</h3>
            <div className='full-img'>
              <Image src="/page/awards_2020.png" width={950} height={500} alt='2020' />
            </div>
            <p><b>Corporate Governance Asia</b> <br />
              – San Miguel Corporation</p>

            <p> <b>10th Asian Excellence Award – Asia’s Best in CSR</b> <br />
              – San Miguel Corporation</p>

            <p><b>Catholic Mass Media Award for Best Digital Ad</b> <br />
              – Ginebra San Miguel
            </p>

            <p><b>Asia CEO Awards</b> <br />
              – Lifetime Contributor Award given to Ramon S.
              Ang for his leadership, contribution to the country,
              and the pandemic response of SMC
            </p>

            <p><b>Forbes Magazine</b> <br />
              – Ramon S. Ang as one of Asia’s business leaders
              who stepped up efforts to help combat COVID-19
            </p> */}

          </section>

        </article>
      </div>
    </section>
  )
}
