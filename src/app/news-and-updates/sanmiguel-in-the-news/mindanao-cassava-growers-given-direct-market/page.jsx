import React from 'react'
import '../../style.scss'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'San Miguel in the News | News and Updates',
  description: 'Sanmiguel in the News | News and Updates | SMC Sustainability',
}

export default function page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>Mindanao cassava growers given direct market</h1>
        </div>

        <div className='description-text'>
          <p>
            By: Janine Alexis Miguel, <br />
            October 11, 2023 <br />
            Access the original article <a href="https://www.manilatimes.net/2023/10/11/regions/c/1914116 " target="_blank">here</a>
          </p>

          <p>
            THE Department of Agriculture (DA) has provided cassava and corn growers in Mindanao with a direct market for their produce by linking them to the San Miguel Foods Inc. (SMFI)-Visayas.
            <br /> <br />
            The DA-Northern Mindanao (DA-10) said on Monday, October 9, that the established connection will benefit cassava and corn-producing farmers&apos; cooperatives, associations (FCAs) from Misamis Oriental, Bukidnon and Cagayan de Oro.
            <br /> <br />
            The SMFI-Visayas team led by Eduardo Co said that their company is looking to tap FCAs in Region 10 &apos;to augment the volume of their existing shipments and also maximize their operations from Cagayan de Oro City to Cebu City.&apos;
            <br /> <br />
            Co added that they also plan to join in the agriculture department&apos;s bid to help increase the farmers&apos; income, boost the quality of their lives and at the same time learn about the challenges they have encountered on the ground.
            <br /> <br />
            The DA said that the endeavor between SMFI and Mindanao farmers will not just provide an additional market for their harvests but will also ensure that it will be bought at reasonable prices.
            <br /> <br />
            Carlene Collado, DA-10 regional executive director, said that the FCAs should consider tapping the said company to cut the trading layers when marketing their corn and cassava harvest.
            <br /> <br />
            He gave assurances that the agency will continue to provide the needed support for the FCAs such as the provision of seeds, fertilizers, farm tractors, postharvest facilities and capitalization, among others, to empower their groups and enable them to forge a long-term business partnership with SMFI-Visayas.
            <br /> <br />
            Northern Mindanao was the top producer of cassava in the second quarter of 2023, supplying 279.29 thousand metric tons (MT), or 39.3 percent, of the total production, the Philippine Statistics Authority said.
            <br /> <br />
            From April to June 2023, the cassava production was estimated at 709.91 thousand MT, which indicated a growth of 1.6 percent from the 698.63 thousand MT output in the same quarter of 2022.
            <br /> <br />
            Other regions which produced higher volume of the said crop during the quarter were the Bangsamoro Autonomous Region of Muslim Mindanao with 218.99 thousand metric tons, or 30.8 percent, and Cagayan Valley with 47.50 thousand MT, or 6.7 percent of the total.
            <br /> <br />
            The area harvested for cassava from January to June 2023 reached 109.62 thousand hectares, an increase of 0.8 percent from the 108.80 thousand hectares in the same period of 2022.

          </p>
        </div>
      </div>

    </section>
  )
}
