import Image from 'next/image'
import React from 'react'
import { storiesBiodiversityEcosystems } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Green for good',
  description: 'Green for good | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'><small>PROJECT 747</small> <br /> Green for Good </h1>

            <div className='full-img'>
              <Image src="/page/GreenForGood.png" width={950} height={500} alt='Green for Good' />
            </div>

            <p>For four years and counting, San Miguel
              Global Power, in partnership with
              its foundation, has been planting
              over six million upland trees and
              mangroves nationwide under its flagship
              environmental initiative Project 747.
            </p>

            <p>The Project is on track to meet its multi-year
              goal of growing seven million trees across four
              thousand hectares of degraded forest lands, in at
              least seven key provinces in the Philippines.</p>

            <p>Growing, not just planting trees, is the main
              determinant of success. Close partnerships with
              the DENR and local communities—particularly
              fishers and farmers’ groups—are crucial to
              achieving this. </p>

            <p>It is the role of the local DENR offices and
              community partners to identify indigenous tree
              varieties to be planted, nurture young trees,
              and ensure their growth. Through their efforts
              and SMGP’s continued support, survival rates of
              planted upland trees were at 90%, and mangrove
              propagules at 89%, as of January 2023.
            </p>

            <p>To date, SMGP has planted 6,527,895 upland and
              mangrove trees across 2,000 hectares of land, in
              eight provinces: Albay, Bataan, Bulacan, Davao Occidental,
              Negros Occidental, Pangasinan, Quezon
              province, and Zambales.</p>

            <p>The list is expected to grow as SMGP is committed
              to reforesting areas near its BESS facilities in Albay,
              Bohol, Cagayan, Cebu, Davao del Norte, Davao de Oro,
              Isabela, Laguna, Leyte, Misamis Oriental, Pampanga,
              Pangasinan, and Tarlac.</p>

            <p>Across the San Miguel Group, other major
              reforestation initiatives have been successfully
              implemented, and continue to this day. These include
              San Miguel Brewery’s long-running “Trees Brew Life”
              program and similar projects by Ginebra San Miguel,
              Petron Corporation, and SMC Infrastructure.</p>

            <p>Project 747 is by far the most expansive and most
              ambitious, yet. It targets to rehabilitate 2,800
              hectares of upland forests and 1,204 hectares of
              mangrove forests. Tree varieties used in upland
              plantations include narra, molave, white lauan,
              palosapis, agoho, batino, igang, and malabayabas,
              while mangrove varieties include bakawan babae,
              bakawan lalaki, bungalon, and api-api. </p>

            <p>The program is aligned with SMGP’s thrust to help
              mitigate the impacts of climate change by lowering
              its carbon footprint through this nature-based
              carbon capture initiative.</p>



            <Slider storiesItem={storiesBiodiversityEcosystems} />

          </section>
        </article>
      </div>
    </section>
  )
}
