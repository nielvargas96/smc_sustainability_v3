import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Raised without antibiotics',
  description: 'Raised without antibiotics | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>
              Raised Without Antibiotics
            </h1>

            <div className='full-img'>
              <Image src="/page/chicks.png" quality={100} width={950} height={500} alt='Raised without antibiotics' />
            </div>
            <p>When it comes to the safety of its
              consumers, San Miguel Foods, Inc. (SMFI)
              adheres to a strict policy of raising its
              Magnolia chickens without antibiotic
              growth promotants, beta-agonists,
              hormones, or steroids. These are basic
              and absolute, inflexible rules of SMFI
              to guarantee the health of its chickens
              but more importantly, the safety of its
              consumers.</p>

            <p>Vaccines are given to day-old chicks at the
              hatchery to protect them against disease. No
              injections of hormones or any other chemicals
              are given to the broiler chickens at the farms
              from start to harvest. In cases when antibiotics
              are needed for treatment, animal-only antibiotics
              are given under close supervision by a licensed
              veterinarian. An appropriate withdrawal period
              is strictly enforced to ensure no antimicrobial
              residue is present in the meat.</p>

            <p>The living environment plays a key role in
              ensuring that the chickens are in good health and
              protected from diseases and other stressors. The
              company’s farms use Controlled Climate Systems,
              environmentally controlled facilities that are
              maintained at five to seven degrees cooler than
              outside temperature. Chickens are given access to
              quality feeds and clean water 24/7.</p>

            <p>By keeping the ambient temperature at an ideal
              level for the chickens, controlling humidity,
              and utilizing automated feeding and watering
              equipment, chickens are raised in comfortable and
              stress-free conditions, compared to conventional
              open-sided houses. Closed houses also provide
              better biosecurity, keep wild birds out, and protect
              the flock from diseases.
            </p>

            <Slider storiesItem={storiesCustomerWelfareResponsibility} />

          </section>
        </article>
      </div>
    </section>
  )
}
