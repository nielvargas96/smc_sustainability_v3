import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Data Privacy and Security',
  description: 'Data Privacy and Security | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Data Privacy and Security</h1>

            <p>Our Data Privacy and Security Office (“DPSO”)
              was organized in 2017 to ensure the compliance
              of the Group to the Data Privacy Act of 2012. The
              DPSO primarily governs the efforts of all our
              business units in data privacy compliance and
              leads the Group in our data privacy initiatives. </p>

            <p>DPSO is a unit under the Office of the President
              led by its Data Protection Officer (DPO). It works
              hand in hand with the SMC Compliance Officers
              for Privacy (COP) Council, composed of COPs
              of our corporate service units. The DPSO also
              oversees the compliance of our subsidiaries
              through the SMC DPO Council, which is
              composed of Data Protection Officers from our
              business units.</p>

            <p>Compliance is monitored through the conduct
              of Privacy Sweeps, Onsite Visits and Privacy
              Impact Assessments, and regular monitoring
              of SMC and the businesses’ compliance to data
              privacy. </p>

            <p>To build a culture of data privacy in the Group,
              DPSO conducts regular Data Privacy Awareness
              training for new employees and focused groups.
              SMITS subsidiary, ProSync, has been accredited
              as a training institution for the DPO Ace Level 1
              Program to train data protection practitioners of
              the Group as well as external participants. </p>

            <p>San Miguel and its DPO were awarded in 2021
              by the National Privacy Commission as the
              Personal Information Controller of the Year and
              DPO of the Year, respectively. In the same year,
              the SMC DPO Council was also a finalist under
              the category of Privacy Initiative of the Year. </p>

            <p>Our DPSO and its DPO have been extending
              their activities including training, seminars and
              advisory, to affiliates and partners, as well as
              to the data privacy community. Our DPO is the
              president of the NPC Data Privacy Congress
              for 2023 and representative of the Retail and
              Manufacturing Sector in the Data Privacy
              Council. </p>

            <h3 className='blue'>We are committed to
              compliance with the
              Privacy Laws, fulfilling
              our accountability to data
              subjects, and observing
              ethics and governance in
              data protection.</h3>

            <Image src="/page/data_protection.png" width={448} height={362} alt='Data Protection' />

            <p>We are committed to compliance with the
              Privacy Laws, fulfilling our accountability to data
              subjects, and observing ethics and governance
              in data protection. For 2022, there were no
              reported complaints concerning breaches of
              customer privacy and no identified leaks, thefts,
              or losses of customer data.</p>

          </section>
        </article>
      </div>
    </section>
  )
}
