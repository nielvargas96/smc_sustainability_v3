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
          <h1>BOTEful Batanes: Where Every Bottle Counts GINEBRA para sa Kalikasan</h1>
        </div>

        <div className='description-text'>

          <Image src='/news/boteful-batanes.png' alt='image' width={500} height={500} />

          <p>
            November 8, 2023 <br />
            Access the original article <a href="https://malaya.com.ph/news_special_feature/boteful-batanes-where-every-bottle-counts-ginebra-para-sa-kalikasan/ " target="_blank">here</a>
          </p>

          <p>
            Expanding its BOTEful Philippines program after successful activations in various areas, Ginebra San Miguel, Inc. (GSMI), the spirits business of San Miguel Corporation, has made its mark in Batanes.
            <br /> <br />
            Known as &apos;BOTEful Batanes,&apos; this second-hand bottle retrieval project, conducted in collaboration with the San Miguel Foundation and the local government of Batanes, yielded impressive results. Approximately 20,000 used bottles were collected within a week from the municipalities of Basco, Mahatao, Ivana, and Uyugan.
            <br /> <br />
            This initiative underscores GSMI&apos;s steadfast commitment to sustainability and responsible business practices.
            <br /> <br />
            Batanes Governor Marilou Cayco expressed appreciation, acknowledging the positive impact of the program on the province&apos;s persistent waste challenge. &apos;Batanes is thankful to Ginebra San Miguel for pushing through the program despite the challenges posed by the pandemic and natural calamities over the past four years. The program is beneficial to the province since GSMI has collected such large volumes, which greatly helps us reduce waste.&apos;
            <br /> <br />
            The exchange of retrieved bottles for sacks of rice bought from the local community reflects GSMI&apos;s &apos;circular economy&apos; approach, where environmental responsibility is combined with community support.
            <br /> <br />
            As a leader in the Philippine liquor market, GSMI recognizes its role in environmental preservation and community empowerment.
            <br /> <br />
            &apos;BOTEful Batanes serves as a testament to Ginebra San Miguel&apos;s enduring advocacy of &apos;sustainability&apos; and &apos;circular economy&apos; principles, championing these causes long before these concepts gained widespread recognition,&apos; said GSMI General Manager Noli Macalalag.
            <br /> <br />
            Inspired by the success of BOTEful Batanes, GSMI has now extended the program to areas previously out of its reach of the usual operations, such as the Visayas region.
            <br /> <br />
            Launched in 2017, the BOTEful Philippines program aims to raise awareness about GSMI&apos;s commitment to second-hand bottle retrieval and instill a recycling culture in day-to-day activities in the communities. To date, the program has successfully retrieved around 80,000 bottles, a proof of the company&apos;s dedication to environmentally responsible operations.
            <br /> <br />
            Lewisito Leonillo, National Logistics Manager, explained that bottle retrieval is an integral part of GSMI&apos;s operations. &apos;GSMI&apos;s nationwide bottle retrieval system is our version of circular economy – which is based on the reuse of materials. To truly make an environmental impact, bottle retrieval must keep pace with our growing sales and requires the collaborative efforts of everyone involved, including the communities where we operate.”
            <br /> <br />
            With BOTEful Batanes, every bottle counts, as every bottle contributes significantly to the preventing solid waste accumulation, conserving natural resources, and reducing greenhouse gas emissions associated with new bottle production.
            <br /> <br />
            Ginebra San Miguel Inc. (GSMI), maker of the world&apos;s leading gin Ginebra San Miguel, firmly believes that giving value to its shareholders includes upholding its commitment to good corporate citizenship by making a positive environmental impact in the communities it serves. This approach ensures efficient resource utilization to meet present needs while safeguarding resources for the future.
          </p>

        </div>
      </div>

    </section>
  )
}
