import Image from 'next/image'
import React from 'react'
import { storiesCircularEconomy } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'From Byproduct to Benefit',
  description: 'From Byproduct to Benefit | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>From Byproduct to Benefit</h1>

            <div className='full-img'>
              <Image src="/page/Byproduct.png" width={950} height={500} alt='From Byproduct to Benefit' />
            </div>

            <p>As one of the largest manufacturing
              companies in the country, San Miguel
              Brewery (SMB) strives for excellence,
              efficiency, and sustainability. It places great
              emphasis on sustaining the integrity of its
              supply chain from sourcing to production
              to distribution, including managing its
              byproducts.</p>

            <p>One of the ways SMB keeps its byproducts in
              check is by developing a system that handles
              them responsibly—whether for disposal, reuse,
              or recycling. Solid waste, particularly wastewater
              sludge and spent grain, are some of the major
              byproducts of the beverage-making process.
              SMB’s commitment to circularity is evident as it
              has successfully recycled about 23 MT of these
              byproducts on a daily basis across its seven
              breweries nationwide. </p>

            <p>Wastewater sludge accumulates during the
              treatment of brewery effluents. These sedimentary
              materials are rich in organic matter making it
              suitable as sanitary landfill cover (to reduce landfillrelated emissions, fire hazard, and prevent blowing
              litter and dust) and as organic fertilizer. Spent
              grain, on the other hand, is the byproduct of raw
              materials that go through the brewing process. These
              are protein-rich materials used for hog feeds and
              other feed types, providing nutrients required for
              maintenance, growth, and reproduction.
            </p>

            <p>SMB’s production facilities handle the dewatered
              sludge by moving it to areas that can be transformed
              into fertile soil, which the company donates to
              various organizations in need.</p>

            <p>Polo Brewery, located in Valenzuela, has been
              donating its dewatered sludge to the local DENR
              office since 2018 to be used as effective landfill
              covers for specific areas in the city. </p>

            <p>Mandaue Brewery, located in Cebu, has partnered
              with the Department of Agriculture and the
              Metropolitan Cebu Water District in diverting its
              dewatered sludge as fertilizer. Most of the donations
              are channeled to nurseries that grow seedlings for
              various tree-planting activities also initiated by the
              brewery.
            </p>

            <p>Tagoloan Brewery, located in Misamis Oriental, also
              began donating its dewatered sludge to the Municipal
              Agriculture Office in 2021. The partnership has been
              yielding mutual benefits for both parties, albeit still in
              its pilot phase.</p>

            <p>The majority of SMB’s breweries divert their spent
              grain directly to B-MEG under San Miguel Foods, after
              they go through processing in SMB’s drying plants. </p>

            <p>B-MEG was SMC’s initial foray into the poultry and
              livestock industry and started from a one-ton feed
              mill adjacent to the brewery, growing into the marketleading feed brand in the Philippines today with
              close to 900 MT per hour rated capacity. It is thus
              fitting that, through the years, the feeds business has
              consistently utilized byproducts of beer production
              and, in doing so, absorbed a large volume of what
              would otherwise be waste materials and converted
              these into high-quality animal feeds. </p>

            <p>Due to rising demand for beer products, which results
              in an increase in production volume, some of SMB’s
              production facilities engage local organizations to
              divert their oversupply of spent grain for repurposing.
              These partnerships not only solve the oversupply
              concerns of the breweries but also aid the livelihood
              of local business owners by providing cost-efficient
              solutions to their business requirements. </p>

            <p>While Mandaue Brewery taps business partners to
              purchase its extra spent grain, Bacolod Brewery in
              Negros Occidental partners with local cattle raisers.
              Since 2017, Bacolod Brewery has partnered with
              the United Cattle Raisers Association in Negros and
              Visayas (UCRAIN-V) and the Negros First Ranch
              under the Negros Occidental Provincial Veterinary
              Office. The brewery provides free spent grain, which
              aids these organizations in providing their livestock
              with consistent nutritious feeds. </p>

            <p>“The addition of spent grains in the diet of our
              cattle has greatly improved the quality of our daily
              rations at no cost,” shares UCRAIN-V President Louis
              Martin. “It has drastically lessened our dependence
              on commercial feed inputs thus lowering our total
              feeding cost, especially during dry season when grass
              growth is low. We have seen a drastic improvement
              in the overall condition and performance of our
              breeders, increases in the daily gain in weight of our
              fatteners and in the milk production of our milkers.</p>

            <p>“The members of UCRAIN-V are aware that all these
              gains would not have happened without the spent
              grains from the brewery. We continue to hope and
              pray that this partnership will continue and grow
              in the future. This has also contributed to the food
              security program of our province.”
            </p>


            <Slider storiesItem={storiesCircularEconomy} />

          </section>
        </article>
      </div>
    </section>
  )
}
