import Image from 'next/image'
import React from 'react'
import { storiesCircularEconomy } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Closing the Loop',
  description: 'Closing the Loop | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>Closing the Loop</h1>

            <div className='full-img'>
              <Image src="/page/Segregation_Bins.png" width={950} height={500} alt='Segregation Bins' />
            </div>


            <p>Discarded glass containers and cullets are important raw materials in a bottle-to-bottle
              closed loop. Glass is 100% recyclable, nonporous, and impermeable, which means it
              can be perpetually recycled without any real loss of quality. However, despite this, the
              Philippines has only managed to recycle around 40% of its glass, lagging behind other
              countries like Spain, Belgium, and Switzerland, which have achieved recycling rates
              from 73% to as high as 90%.</p>

            <p>This is a challenge not only for the country but
              also for the packaging industry, a challenge which
              SMYPC has accepted through its long-standing
              and thriving practice of adopting a circular
              economy approach in its business model and
              operations. </p>

            <p>SMYPC engages with customers and key partners
              to return used glass containers for recycling. The
              bulk of its collected glass materials come from
              major beverage customers, as its supply contracts
              include the return of up to 100% of the customers’
              used glass containers. In 2022, two major
              customers turned over 100% of their used glass
              containers to SMYPC.</p>

            <p>Another initiative of SMYPC on circularity is the
              Balik Bote Program, which promotes the return of
              identified glass bottles and containers, including
              broken glass known as cullets, to SMYPC’s glass
              plants. </p>

            <p>In 2022, SMYPC intensified its support of the Balik
              Bote Program by launching an information and
              education campaign to encourage the mindset and
              behavior of segregating and cleaning at source
              or at the household level. This campaign was
              done in partnership with the local communities
              where SMYPC operates. Core programs were
              implemented in its own facilities, with major LGUs,
              and with participating schools.</p>

            <div className='full-img'>
              <Image src="/page/Turnover_of_donation_1.png" width={950} height={500} alt='Turnover of Donations' />
            </div>

            <p>Balik Bote with LGUs began in July 2022
              with one of the major cities in Metro Manila.
              SMYPC partnered with a waste management
              solutions organization to expand the city’s waste
              management program by adding glass to their
              recoverable and recyclable materials portfolio.
              SMYPC also initiated an information campaign to
              instill the discipline of segregating and cleaning
              at the household level. Through this, SMYPC
              was able to significantly increase awareness on
              the recyclability of glass and expand its area of
              coverage by setting up collection sites in LGUs
              within the NCR. </p>

            <div className='full-img'>

              <Image src="/page/smc_packaging_corp.png" width={950} height={500} alt='SMC Packaging Team' />
            </div>

            <p>
              SMYPC also spearheaded the Balik Bote Program
              in its own facilities. With the program already
              deeply integrated into the culture of SMY Glass
              Plant where it has been implemented for decades,
              the program was expanded to other non-glass
              manufacturing facilities of SMYPC in Cavite and
              Laguna, as well as to communities and public
              schools near their areas of operation.
            </p>

            <div className='full-img'>
              <Image src="/page/Turnover_of_donation_2.png" width={950} height={500} alt='Turnover of Donations' />
            </div>

            <p>
              To encourage participation from these
              communities and schools, SMYPC provides
              an incentive in the form of school and office
              equipment and supplies, based on a proportionate
              amount of recyclables collected throughout the
              year. This has resulted in a combined collection
              volume of 34 MT in 2022, a 52% increase from the
              previous year in 2021.
            </p>

            <p>To date, SMYPC has recovered a total of 137,000
              MT of discarded glass containers through its
              circular initiatives in 2022, and it continues to
              work with partner communities and stakeholders
              to further increase used bottle collection and bring
              the Philippines on par with leading countries in
              glass recycling.</p>


            <Slider storiesItem={storiesCircularEconomy} />

          </section>
        </article>
      </div>
    </section>
  )
}
