import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Purpose in a bottle ',
  description: 'Purpose in a bottle  | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Purpose In A Bottle </h1>

            <div className='full-img'>
              <Image src="/page/SML_Bucket.png" width={950} height={500} alt='San Miguel Lights - Buckets' />
            </div>

            <p>
              The role of beer is deeply embedded
              within a culture that “it acts like a window
              into who we are as individuals and as
              members of larger social groups, and in
              so many ways shapes the cultural norms
              and hierarchies that pattern the society
              around us.” (Wilson & Stone, 2022).
            </p>

            <p>In the Philippines, beer is among the most
              celebrated alcoholic beverages, with 2.1 billion
              liters consumed annually*. New trends have been
              introduced in recent years, such as concoctions
              with experimental flavor profiles to accommodate
              the ever-changing consumer lifestyles. Still, the
              role of beer as the cultural glue that drives social
              discourse remains the same.</p>

            <p>Ahead of the curve was San Miguel, recognizing
              early on the importance of beer in the social space.
              SMB launched in 1999 as the country’s first lowcalorie beer for consumers who loved to drink but
              disliked the bloated feeling after a night out. San
              Mig Light (SML) was a breakthrough in the local
              scene, its tagline, “Sa mahaba-habang usapan, San
              Mig Light,” resonated deeply with the emerging
              drinker profile of that era.</p>

            <p>San Mig Light would become the most visible
              brand in bars and gastropubs over the years,
              emerging as the drink of choice among young,
              upwardly mobile drinkers. The brand became
              associated with what was “present and
              happening,” Eventually, SML would pivot into
              spaces where it could align with social causes. In
              2017, the brand tapped into a growing inclusivity
              awareness among Filipinos through a campaign
              featuring women in male-dominated fields such
              as aviation, firefighting, and biochemistry. Taking
              the creative direction a notch higher, the brand
              executed podcasts and mounted round-table
              discussions nationwide with key opinion leaders
              to kickstart conversations on inclusivity and
              empowerment.</p>

            <p>San Mig Light conversations have progressed
              beyond promoting a product and into the realm
              of purpose. It seeks to influence important
              discussions that challenge the status quo and
              bring up issues that people might be hesitant to
              talk about. This way, the brand aims to contribute
              to shaping a better culture. </p>

            <p>The impact of its 2017 campaign would garner
              San Mig Light a win at the Asia Pacific Tambuli
              Awards—a recognition given to brands able to
              seamlessly integrate creativity and results with
              positive change.</p>

            <p>The brand’s messaging has evolved over
              the years, from simply promoting the beer’s
              100-calorie content, to conversations all day
              long, to driving conversations relevant to today’s
              society. In so doing, the brand has been able to
              communicate its values not just for San Mig Light
              but for the entire San Miguel brand. </p>

            <p>SML has successfully shifted its value by
              immersing itself into our cultural fabric, becoming
              an emblem of the socially conscious Filipino.
              <br />
              <small><b>*Source: United States Department of Agriculture </b></small>
            </p>


            <Slider storiesItem={storiesCustomerWelfareResponsibility} />

          </section>
        </article>
      </div>
    </section>
  )
}
