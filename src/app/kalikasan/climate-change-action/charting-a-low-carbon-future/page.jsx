import Image from 'next/image'
import React from 'react'
import { storiesClimateChange } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Charting a low-carbon future',
  description: 'Charting a low-carbon future | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <div className='full-img'>
              <Image src="/page/lamao_limay.png" width={950} height={500} alt='Lamao Limay' />
            </div>

            <h1 className='green'>Charting a Low-Carbon Future</h1>

            <p>
              In 2022, as the Philippines takes urgent action
              to avert a looming power crisis owing to the
              impending depletion of the Malampaya gas field in
              2024 and aging power plants, SMGP is expediting
              completion of its first and largest grid-scale BESS
              network in the country.
            </p>

            <p>The network consists of 32 BESS facilities
              strategically located in provinces nationwide, with
              a combined capacity of 1,000 MWh. They are part
              of SMC’s aggressive medium-term goal for power
              system decarbonization and resilience.</p>

            <p>Today, lack of basic access to electricity and
              the reliability of supply remain common issues
              for millions of Filipinos. Over the decades, this
              imbalance in power supply has contributed to
              the uneven spread of growth and development,
              particularly in the Visayas and Mindanao regions.</p>

            <p>Our BESS facilities will support the country’s
              power grid by storing excess energy and injecting
              required power within milliseconds when needed,
              ensuring power quality and stability all over the
              country. </p>

            <p>The BESS will address one of the major limitations
              of renewable energy—the intermittence of solar,
              wind, hydropower, and other renewables. Battery
              systems can support RE sources and help bring
              about more renewable investments in the future.
              In the near term, we estimate the integration of up
              to 5,000 MW of renewable power into the grid, due
              largely to our BESS facilities. </p>

            <p>As nations around the world set ambitious goals to
              transition to renewables, demand for these large-scale energy storage systems will grow. BESS
              plays a key part in making renewables more viable
              for more Filipinos, and through it, San Miguel will
              lead the charge toward a cleaner energy future. </p>


            <Slider storiesItem={storiesClimateChange} />

          </section>
        </article>
      </div>
    </section>
  )
}
