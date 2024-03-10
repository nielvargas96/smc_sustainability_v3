import Image from 'next/image'
import React from 'react'
import { storiesCircularEconomy } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Where It All Began',
  description: 'Where It All Began | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'><small>GLASS BOTTLES</small> <br />Where It All Began</h1>


            <div className='full-img'>
              <Image src="/page/glass_bottles.png" width={950} height={500} alt='GLASS BOTTLES' />
            </div>


            <p>Long before sustainability and circular
              economy practices became bywords in
              modern business, San Miguel Brewery,
              one of the country’s oldest enterprises
              and Southeast Asia’s first brewer, was
              already employing its returnable glass
              bottle (RGB) system, which endures as a
              critical part of its business. </p>

            <p>For many decades, SMB’s RGB system has
              contributed significantly to its bottom line,
              minimizing costs and reducing required resources
              through the constant reuse and recycling of glass
              bottles. Under the system, customers only pay for
              the contents and a deposit on the bottle when they
              buy products. Returning the bottles to recover
              the deposit becomes nearly routine for customers
              nationwide, allowing the bottles to be brought
              back to the SMB system where these are washed,
              sanitized, and reused.</p>

            <p>SMB’s glass bottles are designed to go through
              this cycle 60 times or more. SMB ensures that
              recycled bottles follow the company’s strict
              quality standards, which also consider the bottles’
              aesthetic value. Visibly worn bottles are sent to
              SMB’s sister company, SMYPC, for recycling, along
              with bottles reaching their end-of-life stage. This
              ensures that all bottles are recycled, and none are
              wasted.</p>

            <div className='full-img'>
              <Image src="/page/glass_bottles_2.png" width={950} height={500} alt='GLASS BOTTLES 2' />
            </div>

            <p>As glass is perpetually 100% recyclable, the
              system, in place for most of the company’s 132-
              year history, has afforded both SMB and the
              environment incalculable benefits in lower costs,
              decreased extraction of new raw materials and
              minimized solid waste in landfills. This has also
              helped to ingrain a zero-waste mindset in our
              culture. </p>

            <p>In many ways, glass bottle retrieval and recycling
              is also crucial for SMC’s spirits business, Ginebra
              San Miguel Inc. The preference for glass bottles
              as packaging material stems from its inherent
              characteristic to preserve the quality of our
              products for a longer period of time as well as its
              high reusability and recyclability. </p>

            <p>With an expansive network of third-party bottle
              suppliers that spans the whole Philippine
              archipelago, used bottles are retrieved, sorted and
              pre-washed prior to delivery at GSMI’s various
              bottling facilities. Upon acceptance, these bottles
              undergo stringent quality inspections and further
              cleaning prior to filling with Ginebra’s products.
              Bottles deemed unfit for reuse are transformed
              into glass cullet, which are then sold to SMYPC to
              be recycled into new bottles once again.</p>

            <p>This highly efficient system of retrieval and reuse
              keeps GSMI’s bottle in circulation for as long as
              possible to effectively reduce its requirement
              for brand new bottles by 72% in 2022. But more
              importantly, aside from minimizing production
              costs, it helps prevents the accumulation of solid
              waste and reduces the use of natural resources
              needed to produce new bottles. This program
              not only supports cost management for the
              company but also plays a crucial role in reducing
              glass bottle manufacturers’ dependence on new
              materials, leading to a substantial positive impact
              on the environment.</p>

            <p>Furthermore, both SMB and GSMI also maintain
              their own internal bottle retrieval programs to
              encourage employees to contribute to the effort to
              minimize the number of uncollected bottles not in
              their systems.
            </p>

            <p>SMYPC plays a crucial role in the success of both
              SMB’s and GSMI’s circular economy programs.
              With its business model for discarded glass
              containers and cullets, SMYPC’s raw materials,
              fuel, power consumption, and waste generation
              are significantly reduced.</p>


            <Slider storiesItem={storiesCircularEconomy} />

          </section>
        </article>
      </div>
    </section>
  )
}
