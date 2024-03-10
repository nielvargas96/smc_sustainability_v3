import Image from 'next/image'
import React from 'react'
import { storiesEmployeeHealthSafety } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Employee Health and Safety',
  description: 'Employee Health and Safety | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Employee Health and Safety</h1>

            <p>San Miguel has one of the most comprehensive medical benefits programs for employees. Both major and minor illnesses are covered through Health Maintenance Organization (HMO) packages, up to a pre-determined maximum limit depending on the business unit. Medical consultation, medicines and required medical devices may be availed of through the clinics located in each major facility of the Group.</p>

            <p>During the pandemic, we made significant investments in deliberate steps to mitigate any possible spread of COVID- 19 in the workplace, including the following:
            </p>

            <ul>
              <li>
                <p>Opening of an SMC COVID-19 testing laboratory and engagement of external partners to conduct RT-PCR and rapid antigen testing of employees and third-party providers working in SMC facilities and offices for free;</p>
              </li>
              <li>
                <p>
                  Providing sanitation points and disinfection facilities (i.e., handwashing stations, alcohol dispensers, tire and foot baths), as standard fixtures in all SMC offices, plants, and other installations;
                </p>
              </li>
              <li>
                <p>
                  Developing an online application for health and safety declarations of employees; and
                </p>
              </li>
              <li>
                <p>
                  Having Safety Officers stationed at each business unit to consistently monitor and facilitate employee adherence and compliance with minimum health protocols.
                </p>
              </li>
            </ul>

            <Image style={{ borderRadius: '0' }} src="/page/ph_based.png" width={412} height={171} alt=' All Philippine-based employees' />

            <p>
              All Philippine-based employees, including regular, project-based and consultants, are covered by the Company’s OSH programs. We strive to maintain high standards for safety and health, and consistently work to strengthen a culture of safety in the workplace. Integral to this is the provision of safety and health training for our employees. In full compliance with Republic Act No. 11058 (“An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”), all our employees undergo a DOLE-prescribed eight-hour OSH seminar upon employment.
            </p>

            <p>Furthermore, we actively seek to go beyond standards prescribed by the government’s OSH Administration and the DOLE in relation to general safety and health provisions, drug-free workplace, mental health, and communicable disease prevention, among others. Manuals on Worker Safety Procedures are maintained in each facility. Safety Councils and Safety and Health committees in our business units are tasked to immediately address issues in their respective facilities, including concerns raised by employees. In relation to this, 31 facilities of the Company in Petron, Power, Infrastructure and Cement are accredited under ISO 45001:2018 for their Occupational Health and Safety Management Systems.
            </p>

            <p>We also conduct regular disaster and emergency drills in coordination with the local fire departments, police departments, and the Philippine Red Cross to prepare employees to properly respond in case of emergency situations.
            </p>

            <p>Additionally, our facilities undergo yearly multi-functional audits by our Corporate Technical Audit unit. This group is tasked to provide independent and objective assurance services to improve the operation of the Company’s plants and facilities. The scope of the technical audit includes verification of adherence to government regulations and engineering codes, reporting of significant risk exposures and control issues, and communication of scientific and technical information that would help to improve operations and workplace conditions. Findings from these audits are used to address deficiencies, upgrade facilities, and strengthen existing controls and procedures.
            </p>

            {/* <h3 className='orange'>Putting People  First</h3>

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
            </p> */}

            {/* <h3 className='orange'>Healthy minds at work</h3>

            <div className='full-img'>
              <Image src="/page/aruga.png" quality={100} width={950} height={500} alt='Aruga | Healthy minds at work' />
            </div>

            <p>The employee wellness program is guided by the
              following framework:</p>

            <p><b>MIND:</b> To provide programs and activities
              that support mental health and well-being by
              harnessing mindfulness, focus, and resilience.
            </p>

            <p><b>BODY:</b> To promote physical fitness through
              programs on nutrition, exercise, rest, and
              relaxation. (Examples are Taichi and Dance Fitness
              Fridays).</p>

            <p><b>HEART:</b> To give employees emotional support
              through programs that encourage self-care,
              strengthen self-esteem, and nurture a positive
              mindset.</p>

            <p><b>SPIRIT:</b> To help our employees discover and define
              what is at the heart of what they value—connecting
              this to a personal purpose and to SMC’s value of
              malasakit.</p>

            <p>With this, SMC aims to keep employees engaged
              and active, enhancing their personal value, not
              only to the company, but even more to their
              respective families and communities.</p> */}

            <Slider storiesItem={storiesEmployeeHealthSafety} />
          </section>
        </article>
      </div>
    </section>
  )
}
