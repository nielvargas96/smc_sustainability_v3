import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Contributions to the UN SDGs',
  description: 'Contributions to the UN SDGs | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>

          <section className='description-container img-table'>
            <h1>Contributions to the UN SDGs</h1>

            <p>At San Miguel, there are many ways our sustainability programs and initiatives align with the global
              goals. The following shows how our sustainability agenda and material ESG topics correspond and
              contribute to the UN SDGs.</p>

            <div className='full-img'>
              <Image src="/page/UN_SDGS.png" width={1080} height={1430} alt='SDGs' />
            </div>

          </section>

        </article>
      </div>
    </section>
  )
}
