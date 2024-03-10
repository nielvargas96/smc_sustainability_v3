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
          <h1>Pasig River’s fish renaissance: Ramon Ang’s resolute mission</h1>
        </div>

        <div className='description-text'>

          <Image src='/news/rsa-pasig-river.png' alt='image' width={990} height={575} />

          <p>
            BILYONARYO.COM <br />
            September 22, 2023 <br />
            Access the original article <a href="https://bilyonaryo.com/2023/09/22/pasig-rivers-fish-renaissance-ramon-angs-resolute-mission/business " target="_blank">here</a>

          </p>

          <p>
            San Miguel Corporation’s (SMC) extensive cleaning and dredging of Metro Manila waterways, designed to prevent flooding, are poised to rejuvenate marine life in the Pasig River.
            <br /><br />
            In an interview with Anthony Taberna, bilyonaryo Ramon S. Ang, president and CEO of SMC, expressed confidence that the river, once notorious for contamination, will see a resurgence of fish and aquatic vitality.
            <br /><br />
            Ang emphasized that the restoration of the Pasig River’s health would extend from Laguna Bay to Manila Bay, a transformative process that would enhance its cleanliness and beauty. He highlighted the significance of water lilies as indicators of shallow areas prone to blockages.
            <br /><br />
            While SMC’s efforts have already removed vast amounts of waste from the Pasig River and Tullahan River, substantially reducing local flooding, Ang has directed project lead Jimmy Lu to reinspect previously cleared sections to ensure all obstructions have been eradicated.
            <br /><br />
            This independent project, costing approximately P1 billion annually, involves the removal of one million cubic meters of garbage.
            <br /><br />
            Ang shared some causes of blockages they encountered during the project, including the need for heavy machinery to remove adobe blockages beneath the North Luzon Expressway (NLEX) and debris from construction projects obstructing water flow.
            <br /><br />
            He stressed the importance of contractors complying with government rules to prevent waterway blockages, which may result in fines or retention of payment until the area is cleared.
            <br /><br />
            SMC’s successful efforts in the Tullahan and Pasig Rivers have inspired them to extend their mission to clear rivers and waterways in Bulacan, alleviating the burden of severe flooding on affected communities.

          </p>
        </div>
      </div>

    </section>
  )
}
