import Image from 'next/image'
import React from 'react'
import { storiesSustainableSupplyChain } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Changing the Landscape for Corn Farmers',
  description: 'Changing the Landscape for Corn Farmers | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1 className='blue'>Changing the Landscape for Corn Farmers</h1>

            <Image style={{ borderRadius: '25px' }} src="/page/MarioCumlat2.png" width={547} height={540} alt='Mario Cumlat' />

            <p>The stories of struggle, risk, and worries
              of over 122 corn farmers across the
              country sounded all too familiar as the
              Company engaged them in consultation
              meetings. The meetings were meant to
              introduce them to a new way of doing
              business — a direct corn-buying program
              of SMFI that would bypass their usual
              channels. </p>

            <p>As corn is one of the key ingredients of animal
              feeds, and with the continuing expansion of the
              Company’s feed mills, the direct buying program is
              as essential to the Company’s feeds business as it
              could be for the farmers themselves. With global
              feed commodity prices reaching unprecedented
              highs in 2022, local corn supply became more
              critical than ever, but a stalled economy at the end
              of the pandemic did not provide farmers enough
              capital to expand their output.</p>


            <p>The program required a lot of pre-work, with
              the procurement and agribusiness development
              groups conducting interviews and profiling studies
              to determine the various parameters in corn
              farming. Eventually, partnerships with farmers
              were established and the program took off. </p>

            <p>The program yielded better margins both for the
              farmers and the Company. As payment for the
              harvest is deposited directly to farmers’ bank
              accounts within 2-3 days of delivery, farmers are
              able to immediately recover their costs and have
              cash available for other expenses.</p>

            <p>During the first year, San Miguel Foods purchased
              over 35,000 MT of corn. As the program continues
              to expand, so do stories of corn farmers bouncing
              back from huge debts incurred during the
              pandemic. Today, farmers involved in the program
              are more liquid and better prepared for any crisis.
              Some were even able to purchase their own
              delivery trucks and more equipment. With the
              improvement in their quality of life, these farmers
              have encouraged their families and other farmers
              to join the program and enjoy its benefits.</p>

            <Slider storiesItem={storiesSustainableSupplyChain} />
          </section>
        </article>
      </div>
    </section>
  )
}
