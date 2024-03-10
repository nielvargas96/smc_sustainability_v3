import Image from 'next/image'
import React from 'react'
import { storiesBiodiversityEcosystems } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Coral Reef Rescue',
  description: 'Coral Reef Rescue | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='blue'>Coral Reef Rescue</h1>

            <div className='full-img'>
              <Image src="/page/CoralRescue.png" width={950} height={500} alt='Coral Rescue' />
            </div>

            <div className='full-img'>
              <Image src="/page/CoralRescue2.png" width={950} height={500} alt='Coral Rescue' />
            </div>

            <p>In 2022, San Miguel Foods launched a
              coral reef rescue program to help protect
              and preserve the rich marine biodiversity
              of Anilao in Mabini, Batangas, where the
              company’s flour milling plants and grain
              terminal are located.</p>

            <p>Recognizing that coral reefs are a vital ecosystem
              for life underwater, we identified an area close
              to Barangay San Teodoro, in the southern part of
              Mabini, as the pilot coral rescue site. Ten volunteer
              divers, under the supervision of a marine biologist,
              transplanted 100 corals at a depth of nine meters.
              The site is expected to achieve a survival rate of
              60% and further contribute to the growth of the
              fish population. </p>

            <p>The site is monitored regularly to measure the
              program’s effectiveness in terms of fish biomass
              and the number of fish species in the area. As the
              coral community develops, the fish community and
              other reef-associated organisms are expected to
              flourish.</p>


            <Slider storiesItem={storiesBiodiversityEcosystems} />

          </section>
        </article>
      </div>
    </section>
  )
}
