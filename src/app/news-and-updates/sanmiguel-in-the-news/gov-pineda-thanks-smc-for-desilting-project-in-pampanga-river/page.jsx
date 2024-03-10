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
          <h1>Gov Pineda thanks SMC for ‘desilting project’ in Pampanga River </h1>
        </div>

        <div className='description-text'>


          <Image src='/news/gov-pineda.png' alt='image' width={629} height={400} />

          <p>
            October 17, 2023 <br />
            Access the original article  <a href="https://centralluzon.politiko.com.ph/2023/10/17/gov-pineda-thanks-smc-for-desilting-project-in-pampanga-river/daily-feed/#google_vignette" target="_blank">here</a>

          </p>

          <p>
            Pampanga Governor Dennis “Delta” Pineda has expressed his gratitude to San Miguel Corporation (SMC) chairman Ramon Ang for the “desilting project” in Pampanga River.
            <br /> <br />
            He said the provincial government, the Department of Public Works and Highways, the Department of Environment and Natural Resources, and SMC signed a memorandum of agreement for the project.
            <br /> <br />
            “Sa ilalim ng kasunduan, libreng tutulong ang SMC sa paghuhukay ng mababaw na bahagi ng Pampanga River,” the provincial government said.
            <br /> <br />
            Pampanga is one of the SMC’s beneficiaries under the “Adopt a River Program” campaign.
            <br /> <br />
            The desilting project is expected to start in 2024.

          </p>

        </div>
      </div>

    </section>
  )
}
