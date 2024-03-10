
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'Reviving our Ailing Rivers',
  description: 'Reviving our ailing rivers | SMC Sustainability',
}

export default function Index() {

  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <div className='full-img'>
              <Image src="/page/RevivingAilingRvers.png" width={950} height={500} alt='Reviving our ailing rivers' />
            </div>
            <h1 >Reviving our Ailing Rivers</h1>

            <p>In August 2022, San Miguel Corporation
              completed the Tullahan River cleanup
              initiative, after 27 months of operations.
              SMC was able to extract over 1.2 million
              MT of silt and solid waste from an
              11-kilometer stretch of the river system,
              spanning four major cities. In partnership
              with the DENR, the project represented
              the largest river cleanup undertaken by
              any private company.</p>

            <p>This accomplishment would only be outpaced in
              scale and scope a year later by our next initiative—
              the Pasig River cleanup. By February 2023, just
              20 months into the project, we reached the one
              million MT milestone of silt and solid waste
              removed from the Pasig River, long a symbol of
              pollution and neglect in the Philippines.</p>

            <p>We have also begun the clean-up of Bulacan’s
              Meycauayan river, to help alleviate perennial
              flooding. </p>

            <p>Our river initiatives demonstrate SMC’s
              willingness to go beyond what is expected. While
              some of our projects are located along these
              rivers, our efforts to improve the health of our
              waterways are driven by our desire to positively
              impact the environment and the communities we
              serve. In particular, the wide-scale impacts of
              flooding and pollution on our cities and people
              have compelled us to take decisive action. </p>

            <p>
              In a 2021 study published in OurWorldinData.
              org, the Pasig River emerged as the top plastics emitting river responsible for the world’s ocean
              plastics. Meanwhile, the Tullahan and Meycauayan
              Rivers are ranked four and five on that list. Four
              other Philippine rivers—the Pampanga, Libmanan,
              Rio Grande de Mindanao, and Agno rivers—also
              made it in the top 10 of that same global list.
            </p>

            <p>Keeping our rivers clean will help reduce the
              amount of plastic waste that pollutes our oceans,
              improve water quality, support biodiversity, and
              mitigate threats to traditional fishing grounds. But
              just as important is deepening and widening them
              to mitigate decades of siltation and pollution that
              have rendered them unable to serve their purpose
              of directing flood waters away from our cities.</p>

            <p>Fully rehabilitating our rivers will of course take
              more than just ridding them of silt and garbage.
              To transform our rivers into thriving ecosystems,
              it will require the collective efforts of various
              stakeholders, including government, communities,
              and private sector partners. While it seems like a
              daunting endeavor, taking the first steps toward
              restoration is a crucial part and one that SMC is
              more than willing to take.</p>


            <Slider storiesItem={storiesResourceManagement} />
          </section>
        </article>
      </div>
    </section>
  )

}