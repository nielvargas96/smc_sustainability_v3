import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Veega Meat-Free Products',
  description: 'Veega Meat-Free Products | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>
              Veega Meat-Free Products
            </h1>

            <div className='full-img'>
              <Image src="/page/vega_meat_balls.png" quality={100} width={950} height={500} alt='VEEGA MEAT BALLS' />
            </div>
            <p>Health consciousness increased significantly
              during the pandemic. With products already
              in development for a few years prior, the
              heightened consumer awareness provided
              an impetus for The Purefoods-Hormel
              Company, Inc. (PHC) to launch plant-based
              food to offer consumers a line of delicious,
              easy-to-prepare and fully cooked alternatives
              to processed meats. Taste and affordability
              were the primary considerations, qualities
              that are not normally associated with plantbased meals.</p>


            <div className='full-img'>
              <Image src="/page/vega_meat.png" quality={100} width={950} height={500} alt='VEEGA MEAT' />
            </div>
            <p>PHC’s plant-based food line is sold under the brand,
              Veega. The products are manufactured locally using
              wheat, soy, mushroom, and egg, with no preservatives
              added. The initial offering included five variants
              namely, meat-free balls, burger patties, sausages,
              nuggets, and giniling (ground meat). This was later
              expanded to include a vegan native line of adobo
              flakes, tapa, and tocino as well as vegetarian ready-to-eat viands bulgogi and spicy soy garlic balls. Hence,
              whether a consumer is a fully committed vegan or a
              flexitarian looking to incorporate healthier meals in his
              diet, there is something that Veega has to offer.</p>

            <p>Veega products are available in most supermarkets,
              convenience stores and quick service restaurants,
              where it is a mainstay of healthy meals from meatless
              pizza to healthy nachos, salad, and pasta.</p>

            <Slider storiesItem={storiesCustomerWelfareResponsibility} />

          </section>
        </article>
      </div>
    </section>
  )
}
