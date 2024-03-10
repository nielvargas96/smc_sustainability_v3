import Image from 'next/image'
import React from 'react'
import { storiesCommunityEngagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Better Health, Stronger Communities',
  description: 'Better Health, Stronger Communities | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Better Health, Stronger Communities
            </h1>

            <div className='full-img'>
              <Image src="/page/better_health.png" width={950} height={500} alt='Better health, stronger communities' />
            </div>

            <p>The ambition to deliver more and better health services in the community is
              not new, but for a company whose portfolio of businesses does not extend to
              health services, San Miguel nevertheless has invested heavily in a network
              of six clinics in its fenceline communities throughout the Philippines: three
              of which are in Luzon (Valenzuela, Pampanga, Batangas); two in the Visayas
              (Bacolod and Cebu); and, one in Mindanao (Davao del Sur). </p>

            <p>Managed by San Miguel Foundation in close
              coordination with the barangay health office, our
              community health services provide support across
              a range of needs and age groups and are most
              often used by children, older people, or those
              living with chronic conditions such as diabetes or
              heart disease. </p>

            <div className='full-img'>
              <Image src="/page/better_health2.png" width={950} height={500} alt='Better health, stronger communities' />
            </div>

            <p>SMC’s clinics in San Fernando, Pampanga are
              secondary clinics specializing in lifestyle-related
              diseases. The remaining four are primary health
              clinics. Barangay health workers identify and
              endorse patients, and the clinics serve as onestop service outlets for health, family planning,
              and nutrition, focused on comprehensive
              preventive, basic curative health services, and
              health education. Our clinics have earned the
              local community’s confidence, evidenced by
              ever-increasing utilization. In 2022 alone, close
              to 900 patients were served across all six clinics
              resulting in 8,705 visits. </p>



            <Slider storiesItem={storiesCommunityEngagement} />

          </section>
        </article>
      </div>
    </section>
  )
}
