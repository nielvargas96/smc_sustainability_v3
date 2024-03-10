
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'Water Fall All',
  description: 'Water Fall All | SMC Sustainability',
}

export default function Index() {

  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Water For All</h1>

            <div className='full-img'>
              <Image src="/page/waterforall_banner.png" quality={100} width={950} height={500} alt='Water for All' />
            </div>


            {/* s
            <h3 className='green'>Water for All</h3> */}

            <p>We may have the most trusted and well-loved brands, the best supply chains,
              distribution systems, and manufacturing technologies, but our businesses
              cease to exist without water. Water is indispensable to our daily operations,
              whether used as an agricultural input, as raw material for our products, or to
              generate steam, cool equipment, or sanitize facilities. That is why, over many
              decades, we have invested in processes and technologies to treat, reuse, and
              recycle more water and preserve vital water sources. </p>






            <p>In 2017, even as our water management efficiency
              levels were already among the highest in the
              country, we chose to make our most significant
              commitment yet to water sustainability. We
              launched “Water for All,” our Group-wide program
              to cut non-product, utility water use by 50% by
              2025. We established the SMC Water Council,
              comprised of technical representatives from each
              of our operating businesses. They establish and
              monitor water-saving measures and set water
              consumption goals across our plants and offices
              nationwide. </p>

            <p>We have since been implementing several
              programs across the Group to achieve our target.
              This includes eliminating the wastage of water
              by adopting stricter measures to improve water
              use efficiency; utilizing water-saving technologies;
              and implementing conservation programs. All
              facilities and machinery are closely monitored for
              any signs of leakage and malfunction that could
              lead to wastage. Fixing leaks has also contributed
              significantly to our water reduction efforts. We
              have increased the recycling and reuse of water
              across all our operations and have maximized
              our utilization of desalinated seawater. We have
              also built new rainwater collection features
              and retrofitted or upgraded older facilities to
              enable rainwater harvesting. Our businesses
              optimize their wastewater treatment facilities
              and constantly try to make greater use of treated
              greywater for non-essential purposes. More
              significantly, we continue to reduce groundwater
              use, even as we work with communities to protect
              these water sources.</p>

            <Image style={{ borderRadius: '0' }} src="/page/water_reduction.png" width={521} height={390} alt='Water Reduction' />

            <p>SMC’s various businesses continue to implement
              Water for All programs according to a set
              schedule, including making capital expenditures
              on improving systems in the facilities to meet their
              targets.</p>

            <Slider storiesItem={storiesResourceManagement} />

          </section>
        </article>

      </div>
    </section>
  )
}