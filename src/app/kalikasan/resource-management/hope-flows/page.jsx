
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'Hope Flows',
  description: 'Hope Flows | SMC Sustainability',
}

export default function Index() {

  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>

          <section className='description-container'>
            <h3 className='green'>Hope Flows</h3>

            <div className='full-img'>
              <Image src="/page/hopeflows_banner.png" quality={100} width={950} height={500} alt='Water for All' />
            </div>

            <p>Angat Dam, Metro Manila’s main water source, may be located in Bulacan,
              but for many decades, the province itself did not have access to a steady,
              sufficient supply of potable water for its over 3.7 million residents.</p>

            <p>Households would rely on deep wells, tapping into groundwater sources,
              which yielded poor-quality water. Excessive groundwater extraction over a
              long period, coupled with Bulacan’s exponential economic and population
              growth, gave rise to a more pressing concern—land subsidence, said to be
              a contributing factor to the perennial flooding in lower-lying areas in the
              province.</p>

            <p>But that would change in 2015. That year, SMC Infrastructure was awarded
              the contract for the Bulacan Bulk Water Supply project that would provide the
              province’s 24 cities and municipalities with potable water, at the lowest price
              per cubic meter in the Philippines. </p>

            <p>Since the project commenced operations in 2019, it now supplies treated
              bulk water to 12 water districts that, in turn, distribute to some 220,000
              households in Balagtas, Bocaue, Marilao, Meycauayan, Obando, San Jose del
              Monte, Bulakan, Calumpit, Guiguinto, Malolos, Plaridel, and Sta. Maria. And
              true to its commitment, this water is available to water districts at less than 1
              centavo per liter, the lowest bulk water charge in the country. </p>

            <p>In 2023, we are set to begin development on Stage 3A of the project, which
              will make potable and affordable water from the Angat reservoir and other
              surface water sources available to an additional 70,000 more households by
              early 2025. Stage 3A will cover the water districts of Baliwag, Norzagaray,
              Hagonoy, Pandi, San Ildefonso, San Miguel and San Rafael. Full completion of
              Stage 3 will bring the total coverage to the target 24 areas. </p>

            <p>Currently, the Bulacan Bulk Water Supply Project produces an average
              volume of 210 million liters per day and has a maximum capacity of 388
              million liters per day. </p>

            <Slider storiesItem={storiesResourceManagement} />

          </section>
        </article>
      </div>
    </section>
  )

}