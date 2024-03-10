import Image from 'next/image'
import React from 'react'
import { storiesCircularEconomy } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Turning Waste into Resource',
  description: 'Turning Waste into Resource | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>Turning Waste into Resource</h1>

            <div className='full-img'>
              <Image src="/page/TurninGasteintoResource.png" width={950} height={500} alt='Hazardous Waste Management' />
            </div>

            <p>We make conscious and disciplined efforts to
              recycle coal combustion residuals (CCR), mainly as
              an aggregate material for cement manufacturing.
              We utilize coal ash as a supplementary material
              and as a substitute for clinker, an input used
              to strengthen cement. While coal ash cannot
              completely replace clinker in cement production,
              using it as an add-on contributes to reducing GHG
              emissions.</p>

            <p>SMGP’s Limay Power Plant and Malita Power Plant
              have been successful in recycling as much as
              80-90% and 70-80% of their coal ash, respectively.
              This is achieved through recycling coal ash from
              Limay Power Plant at Petron Bataan Refinery’s cogeneration facility, reducing the plants’
              consumption of virgin inert materials (e.g. silica
              sand), and supplying NCC and Southern Concrete
              with aggregate material for cement production.</p>

            <p>Since not all CCR can be recycled, we put
              significant efforts and investments in proper
              storage of the excess. We strictly follow and
              comply with the DENR’s Water Quality Guidelines
              and General Effluent Standard of 2016 (DAO 2016-
              08) to ensure proper management, storage, and
              monitoring. </p>

            <p>We also value the involvement of our partner
              communities. We carry out information, education,
              and communication campaigns to discuss specific
              measures undertaken to ensure that our activities
              do not cause harm to the environment and to the
              health of individuals.</p>

            <p>We also employ biomats made up of biodegradable
              natural fibers, such as straw, coir, and jute, to
              cover the ash and prevent erosion and blowing
              away. The biomats have seedlings already planted,
              which provide immediate soil stabilization and
              protection, and strengthen vegetation on slopes.
              This area will eventually be covered in trees by
              the end of its 25-year lifespan</p>

            <Slider storiesItem={storiesCircularEconomy} />

          </section>
        </article>
      </div>
    </section>
  )
}
