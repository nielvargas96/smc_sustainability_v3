import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Digital Transformation',
  description: 'Digital Transformation | SMC Sustainability',
}


export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Digital Transformation</h1>

            <p>We see digital transformation as a key driver
              of sustainable development, whether it is in
              automating and digitizing processes to improve
              productivity or in investing in new technologies
              and innovation that future proof our businesses.</p>

            <p>We began streamlining our manual processes
              in 1995, which led to adopting integrated
              Enterprise Resource Planning systems for
              financial consolidation, treasury, sales and
              manufacturing operations. Since then, we have
              periodically updated our systems, taking into
              account our business continuity and disaster
              recovery plans and our information security
              governance. In doing so, we have operated more
              efficiently, reduced costs, and enhanced our
              competitiveness in the market. </p>


            <p>Starting in 2018, we shifted our processes to a
              cloud platform. This has enabled us to increase
              our disaster recovery capabilities, reduce
              reliance on on-premise infrastructure, and
              improve energy efficiency.</p>

            <p>We have also implemented several IT
              innovations throughout the years. These include
              automation through workflow approval and
              launching various systems for management
              reporting, business controls, financial
              consolidation and reporting, and regulatory
              compliance.
            </p>

            <p>To promote sustainable energy consumption, we
              procure only TCO Certified desktops, laptops,
              and printers. TCO Certified is the world’s most
              comprehensive sustainability certification for
              IT products. Furthermore, we have undertaken
              initiatives to pursue consolidation of our servers
              through virtualization and having an energy-efficient data center. By adopting invertertype technology for our cooling systems and
              modifying the DC rack design, we have reduced
              our power consumption from these systems by
              30% and 15%, respectively. Our lower energy
              consumption decreased the carbon footprint
              from our data centers. Additionally, we ensure
              proper disposal of our IT assets and equipment in compliance with the DENR EMB’s Hazardous
              Waste Management standards.</p>

            <h3 className='blue'>Starting in 2018, we
              shifted our processes to a
              cloud platform. This has
              enabled us to increase
              our disaster recovery
              capabilities, reduce
              reliance on on-premise
              infrastructure, and
              improve energy efficiency</h3>

            <p>On IT governance, we have implemented robust
              governance protocols to ensure compliance
              with policies and guidelines, thereby promoting
              a digitally safe work environment. Information
              security and cybersecurity measures are
              comprehensively managed through an
              established framework that safeguards
              company assets and data.</p>

            <p>There are many other examples of initiatives
              within the Group that aim to digitally transform
              our ways of doing business for the better.</p>

            <h3 className='blue'>e-Commerce</h3>
            <p>We leverage online selling platforms to improve
              product accessibility. In 2022, we relaunched
              an online ordering system called San Miguel
              Mart as a mobile app and continued to utilize
              the country’s top e-commerce sites to sell our
              products. </p>

            <h3 className='blue'> Digital Marketing </h3>

            <div className='full-img'>
              <Image src="/page/digital_team.png" width={950} height={500} alt='Digital Marketing' />
            </div>

            <p>Our Food Division connects and interacts with
              our consumers through digital media in the
              form of ads, online baking demonstrations, live
              veterinary consultations and webinars. Their
              consistent release of relevant and engaging
              digital content has effectively drawn audiences
              to our social media platforms. To date, our
              Magnolia Chicken, Purefoods Tender Juicy
              Hotdog, and Home Foodie Facebook pages have
              more than one million followers. Meanwhile, our
              Spirits Division has also delivered innovative
              and engaging campaigns across all its brands,
              such as cocktail making videos that showcase
              the unique flavors and versatility of its products.
              Its flagship brand Ginebra San Miguel has
              garnered acclaim for its digital advertising
              campaigns, winning the Catholic Mass Media
              Award for Best Digital Ad for three straight
              years (from 2020 to 2022).
            </p>

            <h3 className='blue'> Technical Leadership  </h3>
            <div className='full-img'>
              <Image src="/page/RTE_Plant.png" width={950} height={500} alt='Digital Marketing' />
            </div>

            <p>Our Beer and NAB Division employs stateof-the-art brewing technology. Our highly
              experienced brewmasters and quality assurance
              practitioners provide technical leadership and
              direction to continuously improve and maintain
              the highest standards in product quality.
              New products and variants are explored and
              attuned to the evolving consumer profile and
              preferences.
            </p>

            <h3 className='blue'>Innovative Packaging</h3>

            <p>
              Our Packaging group maintains advanced
              manufacturing facilities and best practices in
              packaging procedures. Its glass manufacturing
              facility in Cavite uses robotic technology in
              its glass forming processes as well as highly
              automated equipment for palletizing. Moreover,
              glass molds are produced using modern
              machining technologies to provide total mold
              and machine solutions at superior quality.
              The lithograph sheets used for metal crowns
              and lug caps utilize ultraviolet or UV printing
              technology to achieve long-lasting, more
              vibrant, and clearer labels of metal closures,
              while minimizing VOCs in the process. Finally,
              its plastic pallets and slatted plastic flooring
              for poultry houses have several designs that
              are tailored to meet the unique needs and
              preferences of customers.
            </p>

            <h3 className='blue'>Robotics</h3>

            <p>We are among the pioneers of robotic palletizing
              system in the domestic feeds industry, which
              can perfectly stack 42 bags of feeds in just
              under five minutes; hence resulting in shorter
              cycle times, increased productivity and less
              wastage from torn bags. As of end-2022, six
              feed mills have robotic palletizers in place.</p>


          </section>
        </article>
      </div>
    </section>
  )
}
