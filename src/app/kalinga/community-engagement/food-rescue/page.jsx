import Image from 'next/image'
import React from 'react'
import { storiesCommunityEngagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Food Rescue',
  description: 'Food Rescue | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Food Rescue
            </h1>

            <div className='full-img'>
              <Image src="/page/RCA_KIDS.png" width={950} quality={100} height={500} alt='Food Rescue' />
            </div>

            <p>While figures in the Philippines are not
              readily available, it is estimated that 25%
              to 30% of the food that passes through our
              kitchens goes to waste. </p>

            <p>This is one of the major motivations behind Better
              World Tondo (BWT), San Miguel’s first Better
              World community center. Located at the epicenter
              of communities marred by hunger and grinding
              poverty, the community center primarily focuses
              on food waste and hunger, while also acting as a
              learning center that works at improving academic
              outcomes. Together with the hunger relief
              organization, Rise Against Hunger Philippines
              (RAHP), we distribute food that would otherwise
              be destined to a landfill to society’s most
              vulnerable, where a day’s meal consists of food
              scraps collected from a nearby dump. </p>


            <p>Since opening in 2019, BWT has received
              donations worth roughly 87 million PhP. Over a
              three-year period, the estimated amount of food
              diverted from landfills donated by San Miguel is
              1,768 MT. In 2022 alone, BWT received over 85
              MT of food and beverage products from various
              companies, enough to feed 23,455 families and
              serve 76,962 meals.</p>

            <p>In addition, as RAHP manages a national network
              of redistribution charities, SMC is also able to
              provide surplus food to urban centers in Visayas
              and Mindanao. </p>


            <Slider storiesItem={storiesCommunityEngagement} />

          </section>
        </article>
      </div>
    </section>
  )
}
