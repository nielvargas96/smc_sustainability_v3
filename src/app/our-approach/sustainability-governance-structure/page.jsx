import React from 'react'
import './style.scss'
import { getPlaiceholder } from "plaiceholder";
import Image from 'next/image';


export const metadata = {
  title: 'Sustainability Governance Structure and Board Sustainability Committee',
  description: 'Sustainability Governance Structure and Board Sustainability Committee | SMC Sustainability',
}

export default async function Index() {

  // const src = "https://ik.imagekit.io/smc/images/president_rsa.png";

  // const buffer = await fetch(src).then(async (res) => {
  //   return Buffer.from(await res.arrayBuffer());
  // });

  // const { base64 } = await getPlaiceholder(buffer);

  return (
    <section className='article-container'>

      {/* Sustainability Governance Structure */}
      <div className='block-content'>
        <article className='article'>

          <section className='description-container'>
            <h1>Sustainability Governance Structure</h1>

            <p>To ensure that we have strong oversight and execution of our sustainability agenda, we have put
              in place a robust sustainability governance structure.
            </p>

            {/*               
              Our Board of Directors provides overall
              direction and leadership on sustainability. Our President and CEO operationalizes our sustainability
              framework through a dedicated Corporate Sustainability Office. Meanwhile, a Sustainability Working
              Team, composed of sustainability champions across our various business units, is responsible for
              implementing our sustainability strategies and programs throughout our different subsidiaries.</p>

            <p>Furthermore, we will establish a stand-alone Board Sustainability Committee in the Third Quarter
              of 2023 to oversee and provide guidance on the Group’s sustainability strategies and practices. The
              Sustainability Committee will be responsible for reviewing and evaluating the Group’s ESG risks and
              opportunities, as well as ensuring that the Group’s sustainability initiatives align with our long-term
              business strategies. </p> */}

            <p>Our sustainability governance structure plays a critical role in making sure that San Miguel
              is pursuing a sustainable business model and making a positive impact on society and the
              environment.</p>


          </section>

        </article>
      </div>

      {/* Board Sustainability Committee */}
      <div className='block-content board-committee'>
        <article className='article'>
          <section className='description-container'>
            {/* <h1>Board Sustainability Committee  </h1> */}

            <div className='board-of-directors'>
              <div className='board-item'>
                <div className='card-board'>
                  <h5 className='bg1'>BOARD OF DIRECTORS </h5>
                </div>

                <div className='card-text'>
                  <p>The <b>Board of Directors</b> provides overall direction and oversight on
                    the entire Group’s sustainability agenda. It ensures integration of ESG
                    components into SMC’s overall business strategy, operations, risk
                    management, and culture.</p>
                </div>
              </div>

              <div className='board-item'>
                <div className='card-board '>
                  <h5 className='bg2'>BOARD SUSTAINABILITY   COMMITTEE </h5>
                </div>
                <div className='card-text'>
                  <p>The <b>Board Sustainability Committee</b> is the Board-appointed, stand-alone
                    committee that oversees the development of the Group’s sustainability
                    strategies and the execution of programs and monitors the Group’s ESG
                    performance.</p>
                </div>
              </div>

              <div className='board-item'>
                <div className='card-board '>
                  <h5 className='bg3'>PRESIDENT & CEO
                  </h5>
                </div>
                <div className='card-text'>
                  <p>The <b>President and CEO</b> is the highest management-level position mandated
                    to lead the successful implementation of SMC’s sustainability agenda,
                    including the management of climate change impacts.</p>
                </div>
              </div>

              <div className='board-item'>
                <div className='card-board '>
                  <h5 className='bg4'>CHIEF SUSTAINABILITY
                    OFFICER </h5>
                </div>
                <div className='card-text'>
                  <p>The <b>Chief Sustainability Officer</b> supports the President and CEO in
                    developing SMC’s overall ESG strategy, direction, and action plan, including
                    the setting of ESG targets and the monitoring of ESG performance for
                    the Group.</p>
                </div>
              </div>

              <div className='board-item'>
                <div className='card-board '>
                  <h5 className='bg5'>CORPORATE
                    SUSTAINABILITY OFFICE</h5>
                </div>
                <div className='card-text'>
                  <p>The <b>Corporate Sustainability Office</b> is the dedicated unit responsible for
                    operationalizing and embedding sustainability across the Group and for
                    the successful delivery of ESG programs and initiatives, as well as the
                    measurement and reporting of ESG progress, among others.</p>
                </div>
              </div>

              <div className='board-item'>
                <div className='card-board '>
                  <h5 className='bg6'>SUSTAINABILITY
                    WORKING TEAM (SWT)
                    IN EACH BU</h5>
                </div>
                <div className='card-text'>
                  <p>The <b>Sustainability Working Team</b> is composed of sustainability champions
                    from the different business units (BUs) within SMC and is responsible
                    for implementing sustainability strategies and initiatives in their
                    respective BUs.</p>
                </div>
              </div>
            </div>


          </section>

        </article>
      </div>

    </section>
  )
}
