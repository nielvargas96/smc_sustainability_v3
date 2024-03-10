import Image from 'next/image'
import React from 'react'
import { storiesDiversityInclusion } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Abante Babae: Empowerment and Agency',
  description: 'Abante Babae: Empowerment and Agency | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>
              <small>ABANTE BABAE  </small> <br />
              Empowerment and Agency
            </h1>

            <div className='full-img'>
              <Image src="/page/abante_babae.png" quality={100} width={900} height={500} alt='ABANTE BABAE' />
            </div>

            <p>A place where women can open up to others, learn,
              laugh, and, if necessary, heal. That is SMC’s Better
              World Cubao (BWC). We opened the center in March
              2022 to create a community where members have
              access to essential services to help them become
              empowered 21st-century women. </p>

            <p>Our main programs are focused on health, empowerment, and
              women’s recovery. Health consultations are readily available
              and “Abante Babae” workshops covering diverse topics such
              as violence against women and children (VAWC), parenting
              challenges, and gender equality are regularly conducted. Over
              nine months, we have enrolled over 420 members, ran an
              estimated 185 classes on health education, and conducted 2,600
              workshops on empowerment.</p>

            <p>In August 2022, we began offering members free ultrasound
              services, with socialized costs for extended family and referrals
              from neighboring barangay health centers.</p>

            <p>Our BWC members are proof that we have been able to build
              a strong sense of community with over 1,600 volunteer hours
              logged. We have seen how women with different backgrounds
              are able to come together to create a safe space for themselves
              and break down barriers of difference, promoting confidence,
              self- belief, and a sense of belongingness.
            </p>

            <Slider storiesItem={storiesDiversityInclusion} />

          </section>
        </article>
      </div>
    </section>
  )
}
