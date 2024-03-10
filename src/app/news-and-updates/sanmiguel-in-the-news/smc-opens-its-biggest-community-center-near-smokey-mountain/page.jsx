import React from 'react'
import '../../style.scss'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'San Miguel in the News | News and Updates',
  description: 'Sanmiguel in the News | News and Updates | SMC Sustainability',
}

export default function Page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>SMC opens its biggest community center near Smokey Mountain</h1>
        </div>

        <div className='description-text'>
          <p>
            BY JAMES A. LOYOLA <br />
            October 2, 2023, 00:27 AM <br />
            Access the original article <a href="https://mb.com.ph/2023/10/1/smc-opens-its-biggest-community-center-in-tondo " target="_blank">here</a>
          </p>

          <p>
            San Miguel Corporation (SMC), through its San Miguel Foundation (SMF), has unveiled the latest and largest addition to its Better World Community Centers to mark its 133rd anniversary.
            <br /> <br />
            The firm said in a statement that the 3,700 square meter (sqm)  facility near the former Smokey Mountain landfill will serve as a learning and skills development center for 2,500 families or roughly 12,500 individuals from the historically underserved communities in Tondo.
            <br /> <br />
            Dubbed as Better World Smokey Mountain, the center has 39 modern classrooms spread across four levels. It is part of SMC&apos;s ambitious goal to uplift the lives of 15 million Filipinos by 2030.
            <br /> <br />
            &apos;As we celebrate San Miguel&apos;s 133rd anniversary, our commitment to nation-building and in helping uplift the lives of more Filipinos, is as strong as ever,&apos; said SMC President and CEO Ramon S. Ang.
            <br /> <br />
            He added that, &apos;today, a critical challenge in our country is the widening skills gap in our disadvantaged communities, which hinders the progress of many of our kababayans (countrymen).&apos;
            <br /> <br />
            &apos;Our goal is to equip our Tondo beneficiaries with essential skills, instill in them a growth mindset, and a vision of a brighter future. By providing these families the opportunity to upskill, we hope to ultimately boost their income levels, decrease unemployment, elevate overall living standards, and help them realize inter-generational change,&apos; said Ang.
            <br /> <br />
            At the center&apos;s launch last Sept. 29, Ang, who grew up in Tondo, was visibly moved upon seeing the children beneficiaries at the facility.
            <br /> <br />
            On the spot, he announced to Manila Mayor Honey Lacuna a P500-million initial donation to help build more school facilities in the City of Manila.
            <br /> <br />
            He added that this was in gratitude to the city where he grew up, and further encouraged children from poor families to persevere and study well, because like him, they too can succeed in life.
            <br /> <br />
            SMC has been working with partners to boost skills training and entrepreneurship all over the country as part of its overall approach to nation-building which includes investing in critical, job-generating industries that are seen to boost both local and national economies.
            <br /> <br />
            Last August, Ang announced the expansion of a years-long program with the Technical Education Skills and Development Authority (TESDA) that will provides skills training for the disadvantaged, and even displaced workers, returning OFWs, senior citizens, persons with disabilities, in more provinces all over the country.
            <br /> <br />
            SMC started building Better World community centers in 2019 to address various societal issues — hunger, access to healthcare, education, and women empowerment, among others —at the ground level together with different non-government organizations.
            <br /> <br />
            For BWSM, SMC is working with AHA Learning Center, Upskills+ Foundations Inc., Project Pearls, Sandiwaan Center for Learning Inc., and Tulay sa Pag-Unlad Inc. These organizations have helped develop various programs to meet the diverse needs of families in the community.
            <br /> <br />
            These include: academic support to help bridge learning gaps among elementary students; essential life skills training for high school students; vocational training opportunities for out-of-school youth and unemployed mothers; women-empowerment programs; teacher training and support; and specialized sessions in music, arts, dance, and digital creativity, led by accomplished industry professionals.
            <br /> <br />
            Families can become members by contributing &apos;sweat equity&apos;, which includes helping in the facility&apos;s upkeep and engaging in various community activities. Even families already benefiting from similar services provided by other organizations are encouraged to join.
          </p>

        </div>
      </div>

    </section>
  )
}
