import Image from 'next/image'
import React from 'react'
import { storiesHumanRightsLabor } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'An exemplary  Filipino company',
  description: 'An exemplary  Filipino company | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>An Exemplary Filipino Company </h1>

            <Image src="/page/an_exemplary_filipino_company.png" width={950} height={800} alt='An exemplary  Filipino company' />



            <p>San Miguel Corporation was given special
              recognition for being an exemplary
              Filipino company by the Department
              of Labor and Employment (DOLE) for
              its continuous and sincere efforts to
              help Filipino employees and workers.
              The Company was able to support its
              workforce by hiring and regularizing
              about 25,000 former workers of its thirdparty providers, strictly complying with
              labor laws, and helping over 70,000 in
              its nationwide network throughout the
              pandemic. This was done even as the
              economy and SMC’s businesses have yet
              to fully recover.</p>

            <p>In particular, DOLE extolled SMC’s successful
              completion of its Business Reintegration
              program—where SMC ended its service
              agreements with third-party providers of noncore, auxiliary operations. It enabled some 25,000
              workers to become regular employees with full
              benefits. The employees are under its newly
              established Operations and Maintenance (O&M)
              companies.</p>

            <p>SMC’s Business Reintegration program, which
              had been ongoing even before the pandemic, is
              a clear manifestation of SMC’s sincere effort and
              determination to use its businesses as platforms
              for positive change and to bring about progress for
              many Filipinos.</p>

            <p>DOLE also cited SMC for institutionalizing its
              Group-wide Labor Laws Compliance System to
              ensure and strengthen labor compliance among
              its businesses and contractors, sub-contractors,
              suppliers, and business partners. SMC’s strict
              adherence to labor laws and continuous efforts
              to ensure compliance, not only among its own
              companies but also from those in its network, is
              also a manifestation of the company’s respect
              for the rights of all workers and its core value of
              malasakit.</p>




            <p>SMC’s numerous pandemic response efforts,
              aimed at helping its employees all over the
              country cope with the many impacts of COVID-19,
              also got the Labor Department’s nod. Apart
              from extending various economic assistance
              programs and implementing adequate health and
              safety protocols at all its facilities and offices,
              SMC also invested in putting up its own RT-PCR
              testing laboratory to ensure continuous COVID-19
              surveillance testing of its employees. It also
              successfully implemented a nationwide “Ligtas
              Lahat” employee vaccination program, which saw
              the company hire over 100 medical professionals
              who were deployed to SMC employee vaccination
              sites nationwide and to vaccination centers
              of various LGUs to help with the nationwide
              vaccination drive. By January 2022, over 97%
              of SMC’s target, 70,000 individuals, were fully
              vaccinated, with booster administration beginning
              as early as December 2021.</p>


            <p >SMC’s DOLE recognition is a testament to the
              Group’s unremitting efforts to help and support
              its employees, especially amid challenging times.
              It highlights SMC’s respect for the rights of all
              workers and its core value of malasakit.</p>



            <Slider storiesItem={storiesHumanRightsLabor} />

          </section>
        </article>
      </div>
    </section>
  )
}
