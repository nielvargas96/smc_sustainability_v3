import Image from 'next/image'
import React from 'react'

import { humanRightsImages } from '@/api/api'
import { storiesHumanRightsLabor } from '@/api/api'
import SliderStories from '@/components/sliderStories'

import Slider from './slider'
export const metadata = {
  title: 'Human Rights and Labor Practices',
  description: 'Human Rights and Labor Practices | SMC Sustainability',
}


export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Human Rights and Labor Practices</h1>


            <p>We respect our workers’ rights to freedom of association and collective bargaining. In consonance with our values, we have consistently taken steps to maintain a harmonious relationship between labor and management. By the end of 2022, 34 labor unions were active in the SMC Group and approximately 14.8% of the Company’s rank and file employees were parties to collective bargaining agreements (CBA).</p>

            <p>Each of our subsidiaries has its own Labor
              Relations unit, which closely coordinates with
              the Corporate Human Resources - Labor
              Relations (CHR-LR) department. In line with our
              commitment to comply with labor and other
              related laws, we are committed to undertake the
              following actions:
            </p>

            <ul>
              <li>
                <p>Educating employees about and providing
                  copies of the Company’s Code of Ethics
                  manual and Employee Handbook, which
                  contain the policies and guidelines governing
                  the duties and responsibilities of every SMC
                  employee</p>
              </li>
              <li>
                <p>Utilizing established communication
                  channels (i.e., labor-management councils,
                  tool-box meetings, townhall assemblies,
                  one-on-one coaching/counseling) in
                  resolving organizational issues, and in
                  case of unresolved matters, activating the
                  escalation protocol to higher management for
                  appropriate decision;</p>
              </li>

              <li><p>Promoting active engagement and
                participation of legitimate labor organizations
                and their members in all the activities of the
                San Miguel family; and</p>
              </li>

              <li>
                <p>Ensuring good faith in the exercise of our
                  prerogatives related to employee discipline
                  by adhering to rules-based and fair
                  administrative investigation procedures, due
                  process requirements, and reasonableness in
                  the imposition of disciplinary actions.</p>
              </li>
            </ul>

            <p>To promote a strong culture of compliance,
              we provide orientation and training for new
              supervisors on relevant labor laws, rules,
              and administrative issuances of the DOLE.
              CHR facilitates seminars and training for new
              supervisors on the proper interpretation and
              modeling of SMC’s Code of Ethics and values.
              Additionally, we continue to champion workers’
              welfare by improving programs to orient new
              employees on their growth opportunities,
              improve their quality of life through industry competitive remuneration, and provide
              initiatives that will improve their integration into
              the SMC Group.</p>


            <p>With the challenges brought about by the
              pandemic to workplaces worldwide, we came
              up with ways to effectively address the issues
              of our employees through creative means of
              communication. We utilized virtual meetings
              and conversations to ensure that no employee
              was left behind during the global health crisis.
              Our employees were also given the option to
              seek redress of any grievances through internal
              platforms such as email, Viber, and Facebook
              communities.</p>

            <p>In full compliance with the Constitution and
              other relevant and applicable laws, we have
              instituted clear policies on protecting human
              rights and condemning child and forced
              labor. Likewise, we denounce all acts that
              encourage violation of human rights and other
              related laws.</p>

            <Image style={{ borderRadius: '0' }} src="/page/active_cba.png" width={401} height={161} alt='Active CBA' />

            <Slider images={humanRightsImages} />

            <br />
            <br />


            <SliderStories storiesItem={storiesHumanRightsLabor} />


          </section>
        </article>
      </div>
    </section>
  )
}
