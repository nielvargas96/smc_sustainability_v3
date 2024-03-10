import Image from 'next/image'
import React from 'react'
import { storiesEmployeeHealthSafety } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Putting People  First',
  description: 'Putting People  First | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Putting People First </h1>


            <div className='full-img'>
              <Image src="/page/PuttingPeopleFirst.png" quality={500} width={950} height={500} alt='Putting People  First' />
            </div>

            <p>San Miguel puts front and center the
              health and safety of its employees, never
              more so than throughout the COVID-19
              pandemic. Three months after the first
              nationwide lockdown in March 2020, the
              company began testing its employees for
              COVID-19 as part of an extensive plan to
              reopen its workplaces safely and continue
              providing essential services to the public.
              By July 2020, San Miguel’s RT-PCR Better
              World EDSA testing laboratory was fully
              operational, processing over 1,000 tests
              a day. </p>

            <p>San Miguel puts front and center the
              health and safety of its employees, never
              more so than throughout the COVID-19
              pandemic. Three months after the first
              nationwide lockdown in March 2020, the
              company began testing its employees for
              COVID-19 as part of an extensive plan to
              reopen its workplaces safely and continue
              providing essential services to the public.
              By July 2020, San Miguel’s RT-PCR Better
              World EDSA testing laboratory was fully
              operational, processing over 1,000 tests
              a day. </p>

            <p>By taking responsibility for testing its employees,
              the company lessened the strain on the national
              health system, contributing to the government’s
              efforts to test and trace COVID-19 transmission.
              With fewer cases and a rapidly improving
              COVID-19 situation, Better World EDSA testing
              laboratory closed in May 2022. However, San
              Miguel still continues to conduct regular antigen
              tests on employees, through a third-party supplier,
              particularly in the NCR.</p>

            <p>The company was also among the first movers
              and biggest supporters of the government’s
              vaccination program. Our priority was always to
              create safe workspaces in all our facilities and
              offices nationwide: to protect our employees and to
              ensure that our operations would not be disrupted.
              SMC procured enough vaccines to cover our
              entire workforce and their dependents, business
              partners, and SMC support staff.</p>

            <p>All told, San Miguel bought over 600,000 doses of
              Astra Zeneca and Moderna vaccines and donated
              vaccines and the services of the 160-strong San
              Miguel Ligtas Lahat medical team to LGUs in Metro
              Manila and over a dozen other urban centers
              across Luzon, Visayas, and Mindanao. From July
              2021 to January 2022, the company was managing
              14 different vaccination centers throughout the
              Philippines. </p>

            <p>Even before company-procured vaccines arrived in
              late June 2021, the company’s medical team had
              administered close to 180,000 doses at different
              government vaccination sites.</p>

            <p>By the end of August 2021, we had vaccinated over
              80% of our nationwide workforce, with more than
              56,000 individuals receiving either their first or
              second primary vaccine doses.</p>

            <p>By January 2022, 97 percent of our workforce
              were fully vaccinated, and we began rolling out
              the first boosters to the most vulnerable in our
              population—just in time for the Omicron surge by
              the early part of 2022.</p>

            <h5>SMC’s Mental Health Support Program for employees was established in 2020, at the
              height of the COVID-19 pandemic. In line with the Groupwide employee wellness program,
              it is a proactive response to DOLE’s Mental Health Workplace Policy and Program pursuant
              to Republic Act No. 11036 or “The Mental Health Act.” The program started as a series of
              virtual workshops conducted by one of our program partners, the Ateneo Bulatao Center,
              about the importance of psychological well-being and mental health. We started with topics
              such as “Understanding Mental Health,” with the goal of normalizing the subject among
              SMC employees. Lighter topics included “How pets can help relieve anxiety” and “How
              plants can improve our mental well-being”.</h5>

            <p>SMC took the initiative further by launching the “Arugâ” Program, a Filipino word that translates to “to
              nurture and provide tender care.” This included webinars and information campaigns but was primarily
              intended to provide access to mental health and psychosocial support services, such as mental health
              consultation, counselling, psychological and psychiatric services, through a secure online platform facilitated
              by mental health professionals.
            </p>


            <Slider storiesItem={storiesEmployeeHealthSafety} />

          </section>
        </article>
      </div>
    </section>
  )
}
