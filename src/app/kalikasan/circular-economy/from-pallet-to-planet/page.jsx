import Image from 'next/image'
import React from 'react'
import { storiesCircularEconomy } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'From Pallet to Planet',
  description: 'From Pallet to Planet | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>From Pallet to Planet</h1>

            <div className='full-img'>
              <Image src="/page/pallet_1.png" width={950} height={500} alt=' From  pallet to planet' />
            </div>


            <p>Manila Plastics Plant (MPP) is one of
              the domestic manufacturing facilities
              of SMYPC. It manufactures durable and
              economical rigid plastic products such as
              crates, pallets, food trays, bottles, pails,
              and plastic flooring. With plastic being
              non-biodegradable, the business has
              found ways to reduce its impact on the
              environment through the adaptation of a
              circular economy model. </p>

            {/* <Image src="pallet_2.png" width={280} height={333} alt=' From  pallet to planet' /> */}

            <div className='full-img'>
              <Image src="/page/pallet_2.png" width={950} height={500} alt=' From  pallet to planet' />
            </div>

            <p>MPP has several programs for recycling
              collected condemned plastic products, such as
              the Pallet to Pallet and Crate for Crate (P2P
              and C4C) initiatives, wherein the business
              recovers damaged pallets and crates from its
              customers and recycles them into new pallets
              or crates. A similar process is implemented with
              post-consumer lube oil plastic bottles. Aside
              from minimizing plastic waste, these programs
              strengthen the relationship between MPP
              and its customers through a shared program
              for sustainability. </p>

            <p>For 2022, MPP utilized 4,148 MT of recycled
              materials for the creation of new plastic
              packaging, resulting in an equivalent reduction in
              virgin material for production.</p>

            <Slider storiesItem={storiesCircularEconomy} />

          </section>
        </article>
      </div>
    </section>
  )
}
