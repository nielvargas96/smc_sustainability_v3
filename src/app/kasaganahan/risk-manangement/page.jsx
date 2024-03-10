import Image from 'next/image'
import React from 'react'
import { storiesRiskManagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Risk Management',
  description: 'Risk Management | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Risk Management</h1>

            <p>Risk management in the current context no
              longer serves its sole purpose of avoiding risks;
              rather, it evolved to become a structure in
              decision making that maximizes opportunities to
              achieve business objectives while maintaining
              risks at acceptable levels for the company. We
              have been practicing risk management since
              the late 1990s but are on our way to formally
              adopting an Enterprise Risk Management (ERM)
              framework within 2023.</p>

            <p>We have institutionalized the ERM process in
              SMC parent company with the assistance of
              SGV & Co. We collaborated with representatives
              from our different departments to ensure
              a holistic and cross-functional view of the
              exposures faced by the Group. We identified and
              prioritized critical business risks and developed
              risk strategies to manage or mitigate the
              occurrence and impact of the risks. We crafted
              comprehensive action plans to implement these
              strategies.</p>

            <p>Our Risk Management Executive Team, headed
              by our Chief Risk Officer, defines our risk
              priorities, aligns risk policies and strategies
              with our overall company plan, monitors the
              effectiveness of our strategies, and reports the
              status of implementation of our action plans
              pertaining to risks.</p>

            <p>As risks and opportunities emerge over time,
              we will make evaluations periodically to keep
              abreast of the exposures of the company and
              assure stakeholders that our management
              is fully updated on the potential threats
              surrounding the continuous operation of SMC.</p>


            <p>A key exposure that presents significant risk
              to the continuity of our operations is climate
              change. Climate-related catastrophes—such as
              typhoons, droughts, and floods—may disrupt
              our operations and the delivery of our products
              and services. As such, we continue to develop
              initiatives to both mitigate and adapt to ongoing
              and possible impacts of climate change. </p>


            <h3 className='blue'>
              In today&rsquo;s rapidly evolving
              business landscape, we are
              committed to maintaining
              a robust risk management
              framework that enables us
              to seize opportunities and
              achieve our objectives.
            </h3>

            <p>Currently we are looking into how the guidelines of
              the TCFD can be incorporated into our current ERM
              structure.</p>

            <p>Another potential risk is in the area of procuring
              goods and services. At San Miguel, we recognize
              the immense importance of procurement in
              our operations and the impact it can have
              on our business. Thus, we have established
              the Procurement Governance Group (PGG),
              which exercises guidance and oversight over
              procurement activities across San Miguel. The
              PGG is responsible for (1) reviewing existing
              procurement policies, guidelines, and procedures,
              and establishing necessary and appropriate
              process improvements in collaboration with all
              functions concerned; (2) conducting compliance and
              operational audits on procurement transactions;
              and (3) identifying training programs for existing
              personnel to enhance their skills in all aspects of
              the purchasing process. In addition, as part of our
              pre-emptive measures, procurement personnel
              are periodically rotated among different business
              units. This will not only serve as a preventive
              measure, but also provide our staff with valuable
              developmental opportunities. </p>

            <p>In today&rsquo;s rapidly evolving business landscape,
              we are committed to maintaining a robust risk
              management framework that enables us to seize
              opportunities and achieve our objectives. By
              keeping a keen eye on emerging risks, such as
              climate change, and taking pre-emptive measures
              to address them, we are ensuring the continuity of
              our operations and strengthening the trust of our
              stakeholders in our brand.</p>

            <Slider storiesItem={storiesRiskManagement} />
          </section>
        </article>
      </div>
    </section>
  )
}
