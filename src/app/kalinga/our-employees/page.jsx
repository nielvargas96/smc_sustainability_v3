import Image from 'next/image'
import React from 'react'

import { storiesOurEmployees } from '@/api/api'

import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Our Employees',
  description: 'Our Employees | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Our Employees</h1>

            <Image style={{ borderRadius: '0' }} src="/page/our_employees.png" width={750} height={1239} alt='TOTAL EMPLOYEES' />

            <p>Our employees are integral to the Group’s
              success. They are the driving force behind the
              Company’s productivity and the fountainhead
              of innovative ideas that improve our various
              products and services. Our employees help
              us advance our ESG goals. They identify
              opportunities to conserve resources, reduce
              waste, and implement sustainability practices,
              all of which will ultimately benefit the
              environment and society as a whole.</p>

            <p>As of the end of 2022, SMC’s workforce was
              composed of a total of 50,008 employees
              (excluding those working in our foreign
              operations and the companies not in scope of
              this Report). Of this number, 88% are regular
              employees, 12% are project-based, and less
              than 1% are consultants.
            </p>

            <p>
              Among regular employees, 96% are rank and
              file employees, the majority of whom are in
              sales, manufacturing, and logistics. Officers
              and middle managers together comprise 4% of
              the total population, indicating a relatively light
              overhead cost.
            </p>

            <p>
              Project-based employees are hired for the
              duration of specific assignments, such as
              construction projects, and are accorded
              compensation and benefits aligned to the
              positions they occupy. Consultants are hired
              for their specific expertise or knowledge, and
              generally provide support to the management
              teams of the business units. They are likewise
              given compensation and benefits according to
              the value that they bring to the business.
            </p>


            <p>Male employees account for most of the
              population at 36,426 or 73% and female
              employees at 13,582 or 27%, resulting in a
              2.7:1 male-to-female ratio. However, among the
              management team, the male-to-female ratio
              improves to 1.7:1. The ratios notwithstanding,
              there is a significant number of women that
              occupy key leadership positions in every
              business unit.
            </p>

            <p>
              2.7:1 male-to-female ratio. However, among the
              management team, the male-to-female ratio
              improves to 1.7:1. The ratios notwithstanding,
              there is a significant number of women that
              occupy key leadership positions in every
              business unit.
            </p>

            <p>SMC added 4,931 jobs in 2022, an increase of
              11% in total employment. Most of these new
              jobs were created by infrastructure and power
              projects, and expansion facilities in SMFB.
            </p>

            <p>
              We recognize that our employees’ well-being is
              paramount, and we are committed to supporting
              them in every way. Thus, we provide a highly
              comprehensive and competitive remuneration
              package that includes competitive salaries
              and healthcare benefits. We also offer a range
              of other benefits, such as leaves, healthcare
              insurance, financial assistance programs, and
              personal and group insurance. Our holistic
              approach to employee compensation and
              benefits highlights our dedication to our people.
              By investing in our workforce, we ensure our
              employees’ health, happiness, and longevity,
              ultimately contributing to the Company’s overall
              sustainability and success.
            </p>

            <p>
              The following sections further discuss how San
              Miguel Corporation nurtures the well-being of
              its employees.
            </p>

            <Slider storiesItem={storiesOurEmployees} />


          </section>
        </article>
      </div>
    </section>
  )
}
