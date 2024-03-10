import Image from 'next/image'
import React from 'react'
import { storiesBiodiversityEcosystems } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Casting a safety net',
  description: 'Casting a safety net | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>Casting a Safety Net </h1>

            <div className='full-img'>
              <Image src="/page/giving.png" width={950} height={500} alt='Casting a safety net ' />
            </div>

            <p>The Fishnet Assistance Program
              launched by Distileria Bago Inc. (DBI) is
              a demonstration of our commitment to
              fostering sustainable development and
              uplifting the livelihoods of the FisherFolks
              Association in Barangay Taloc, Bago City,
              Negros Occidental. </p>

            <div className='full-img'>
              <Image src="/page/unboxing.png" width={950} height={500} alt='Casting a safety net' />
            </div>

            <p>Since its inception in September 2022, the
              program has provided members of the community
              with the opportunity to rent or purchase fish nets
              to improve their income and secure their financial
              future. The initiative operates as a revolving fund,
              with revenue generated being used to acquire
              more fishnets for the association’s members to
              rent and eventually own.</p>

            <p>In just a few months, by December 2022, the
              program doubled its initial investment, enabling
              more members to make a steady living from
              fishing. So far, the program has made a positive
              impact on the lives of 150 fishermen.</p>

            <p>Located along the coastline of Guimaras Strait,
              DBI recognizes the importance of empowering
              individuals to build their livelihoods. By providing
              opportunities for the FisherFolks Association to
              earn a decent living, we contribute to the growth
              and well-being of the community.</p>



            <Slider storiesItem={storiesBiodiversityEcosystems} />

          </section>
        </article>
      </div>
    </section>
  )
}
