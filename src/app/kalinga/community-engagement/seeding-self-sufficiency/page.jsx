import Image from 'next/image'
import React from 'react'
import { storiesCommunityEngagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Seeding Self-Sufficiency',
  description: 'Seeding Self-Sufficiency | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Seeding Self-Sufficiency
            </h1>
            <div className='full-img'>
              <Image src="/page/seeding-self-sufficiency.png" width={950} quality={100} height={500} alt='Food Rescue' />
            </div>


            <p>During the pandemic, guerrilla gardening
              initiatives became relevant as urban farming
              programs. Backyard Bukid is a 1,000-squaremeter, volunteer-led farm located at the
              Company’s headquarters in Mandaluyong City. The
              training was provided by San Miguel Foundation
              partner, SEED Philippines, to SMC maintenance
              and support staff, prioritizing organic farming
              methods and the production of valuable edible
              crops. Whatever produce is grown on the farm
              augments their families’ daily dietary needs
              or allows them to earn extra income. In 2022,
              Backyard Bukid’s volunteer farmers harvested 15
              crops from okra and string beans to romaine and
              kale. The total harvest amounted to 475 kilograms
              of vegetables, with 17 member volunteers earning
              4,000 PhP each over three harvests.</p>

            <Slider storiesItem={storiesCommunityEngagement} />

          </section>
        </article>
      </div>
    </section>
  )
}
