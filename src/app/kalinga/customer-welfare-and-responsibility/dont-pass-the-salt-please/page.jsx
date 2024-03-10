import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Don’t pass the salt, please',
  description: 'Don’t pass the salt, please | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='orange'>Don&apos;t Pass the Salt, Please
            </h1>

            <div className='full-img'>
              <Image src="/page/purefoods.png" quality={100} width={950} height={500} alt='Pure foods factory' />
            </div>

            <p>In 2019, the Food and Nutrition Research
              Institute under the Department of
              Science and Technology reported that
              nearly two out of 10 Filipino adults aged
              20 and above suffered from elevated
              blood pressure. One of the risk factors
              contributing to this condition is the intake
              of too much sodium in the diet, often
              attributed to eating salty foods. </p>

            <p>In response to this development, San Miguel Foods
              launched its Corporate Nutrition and Sustainability
              Guidelines in 2020 to improve its products’
              nutrition profile and set the landscape for inclusive
              and sustainable nutrition in the country. Given the
              World Health Organization’s recommendation of
              2,000 mg per day intake of sodium for adults, the
              Food Group set out its sodium threshold to 667
              mg per serving of processed meats and processed
              dairy products.</p>

            <p>The guidelines put a formal structure to sodium
              reduction efforts initiated as early as 2007. With
              the Filipinos’ penchant for patis (fish sauce), toyo
              (soy sauce), and dried fish, many of the Company’s
              processed meat products catered to this flavor
              profile. It was a challenge to reformulate products
              without significantly changing its taste. Moreover,
              as salt is a preservative, reducing it would also
              affect shelf life.</p>

            <Image src="/page/nuggets.png" quality={100} width={950} height={500} alt='Nuggets Front' />

            <p>Among the early achievements was a 25% sodium
              reduction for Purefoods Fun Nuggets using a
              salt replacer technology. Since then, nine more
              products have been reformulated to reduce
              sodium content by 25% to 40% through a direct
              reduction of salt. These are Purefoods Pork Katsu,
              Purefoods Chicken Katsu, Higante Chicken Franks
              with Cheese, Tender Juicy Cheesy Spaghetti,
              Tender Juicy Cheesy Pizza, Purefoods Deli Spicy
              Pepper Beef Franks, Purefoods Chicken Sisig,
              STAR Corned Beef, STAR Corned Beef Chunky
              Cheese, and Purefoods Classic Honeycured Bacon.
            </p>

            <p>The Company continues to improve the nutrient
              profile of its products in line with its commitment
              to responsible food production. </p>


            <Slider storiesItem={storiesCustomerWelfareResponsibility} />

          </section>
        </article>
      </div>
    </section>
  )
}
