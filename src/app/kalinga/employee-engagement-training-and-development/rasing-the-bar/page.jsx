import Image from 'next/image'
import React from 'react'
import { storiesEmployeeEngagementTraining } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Raising  the bar',
  description: 'Raising  the bar | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Raising  the Bar </h1>

            <div className='full-img'>
              <Image src="/page/Inside_feed_mill.png" quality={100} width={900} height={500} alt='Inside Feed Mill' />
            </div>

            <p>San Miguel Foods University, on the other hand,
              has 16 schools offering more than 100 courses
              in various fields such as feed milling, poultry
              and meats live and processing operations, flour
              milling and applications technology, and basic
              quality assurance, among others. This in-house
              school not only allows employees to obtain the
              necessary knowledge and skills to perform their
              jobs well and expand their career opportunities,
              but also offers those in technical professions, such
              as chemists, chemical, electrical, and mechanical
              engineers, veterinarians, and food technologists,
              an opportunity to obtain the required CPD
              credits from the PRC to keep their licenses. The
              school has introduced digital learning to provide
              employees with greater flexibility in accessing
              educational resources at their own pace, a feature
              that is particularly useful for employees on
              manufacturing shifts. </p>


            <div className='full-img'>
              <Image src="/page/employee_development.png" quality={100} width={900} height={500} alt='Inside Feed Mill' />
            </div>
            <p>GSMI has also established six in-house schools
              that cover a range of disciplines, such as
              manufacturing, sales, logistics, human resources,
              and liquor making. One of these schools is the
              Alcohol and Liquor Technology Institute, which
              focuses on developing alcohol sensory experts and
              honing employee skills in alcohol making. In 2022,
              GSMI offered a total of 35 courses with a combined
              196 CPD credits. This initiative not only boosts
              employee morale and skill sets but also raises the
              bar for the industry as a whole.</p>

            <p>In-house schools are not a new concept, but San
              Miguel Corporation’s commitment to employee
              development and growth sets it apart from the
              rest. The in-house schools not only foster a culture
              of learning and innovation but also ensure that its
              products remain of the highest quality. With SMC’s
              in-house schools, employees can take their careers
              to new heights, while the company remains at the
              forefront of innovation and excellence.</p>

            <Slider storiesItem={storiesEmployeeEngagementTraining} />

          </section>
        </article>
      </div>
    </section>
  )
}
