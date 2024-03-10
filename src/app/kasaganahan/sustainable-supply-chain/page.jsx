import Image from 'next/image'
import React from 'react'

import { storiesSustainableSupplyChain } from '@/api/api'
import Slider from '@/components/sliderStories'


export const metadata = {
  title: 'Sustainable Supply Chain',
  description: 'Sustainable Supply Chain | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Sustainable Supply Chain</h1>

            <p>It has been said that without the last UN SDG,
              SDG:17 Partnership for the Goals, achieving the
              other 16 goals would be impossible. Forging
              transformative partnerships and collaborations
              is vital in unlocking the greatest possible
              impact from sustainability initiatives. It creates
              multiplier effects and
              even makes possible a systems-level reset—
              feats that can never be achieved by going at it
              alone. </p>

            <p>In San Miguel, we strive to form positive
              alliances outside the four walls of our business,
              first within our ecosystem of suppliers. We
              regard our suppliers as partners in value
              creation and work with them in full trust
              and transparency. We believe that a genuine
              alliance with our suppliers will help us tackle
              industry-wide challenges, innovate, and test
              new technologies together, and overall find
              opportunities to improve lives.</p>

            <p>To form a truly beneficial partnership, our
              suppliers and we help each other elevate our
              individual sustainability journeys by instituting
              initiatives that inculcate ethical and sustainable
              practices in our end-to-end supply chain. </p>

            <h3 className='blue'>Supporting Local Businesses</h3>

            <p>As one of the Philippines’ largest and most
              diversified conglomerates, we have more than
              100 major facilities all over the country and
              the Asia Pacific. As such, we need a steady and
              reliable supply of raw materials and services for
              our businesses to run optimally. </p>

            <Image style={{ borderRadius: '0' }} src="/page/support_local_business_graph.png" width={426} height={282} alt='Local Business Graph' />

            <Image style={{ borderRadius: '0' }} src="/page/TOTAL_SPENDING.png" width={438} height={190} alt='TOTAL SPENDING ON LOCAL SUPPLIERS' />

            <p>In 2022, we spent 53% of our total procurement
              budget on local businesses, representing 200.5
              billion PhP in local spending. By sourcing
              locally, we hope to provide a big boon to
              the local economy, especially to our host
              communities and our fellow Filipinos. We intend
              to build capacity at the grassroots level and
              create more partner businesses that will grow
              and thrive with San Miguel. Lastly, by tapping
              local suppliers, we aim to help the environment
              through reduced emissions and energy usage
              by eliminating shipping and storage associated
              with importation. </p>

            <h3 className='blue'>On Course for a Fully Ethical and
              Sustainable Supply Chain</h3>


            <p>To succeed in building a more sustainable
              supply chain, we have laid the groundwork
              for corporate governance in our procurement
              practices. We have established a group-wide
              Procurement Policy Manual that promotes the
              adoption of good governance principles among
              our suppliers and advances ethical principles
              throughout our supply chain.
              Our Corporate Procurement Group centrally
              manages supplier accreditation for all our
              business units, except for Petron, which
              separately manages its supplier accreditation.
              Our supplier processes ensure superior quality,
              cost efficiency, and timeliness of delivery of
              materials and services to our various facilities.</p>

            <p>More recently, in 2022, we took the opportunity
              to further embed ESG principles in our
              supply ecosystem by enhancing our Supplier
              Code of Conduct. The updated Code of
              Conduct underlines our strong commitment
              to doing business in an ethical, legal, and
              environmentally and socially responsible
              manner. It applies to all our suppliers,
              personnel, agents, subcontractors, and entities
              engaged by our businesses to provide goods
              and services.  </p>

            <p>Apart from addressing compliance with antibribery, anti-fraud, data privacy, and fair-trade
              standards, our Supplier Code of Conduct
              has enhanced sections on environmental,
              occupational health and safety, and labor
              practices.
            </p>

            <p>On environmental practices, we ask our
              suppliers to continually look for ways to
              minimize consumption of energy and resources
              and the generation of GHG emissions and
              waste in their businesses. We also require
              them to comply with environmental laws and
              regulations applicable to their operations
              worldwide. </p>

            <p>On occupational health and safety, we urge
              our suppliers to provide a safe and healthy
              working environment for all their employees
              that includes appropriate training, a system for
              reporting injury and illness, medical treatment
              for any injuries sustained at work, and clean and
              safe facilities. Furthermore, we mandate our
              suppliers to comply with all relevant local and
              national laws and regulations such as DOLE’s
              OSH requirements.</p>

            <p>On labor practices, we expect our suppliers to
              treat their workers fairly and with respect and
              dignity. Our suppliers must comply with laws on
              forced labor, child labor, human trafficking and
              slavery, and minimum wage, to name a few. We
              also encourage our suppliers to exercise due
              diligence in selecting their own suppliers and
              subcontractors in order to ensure responsible
              sourcing throughout the supply chain. </p>

            <p>The Supplier Code of Conduct is an important
              element of our supplier accreditation process.
              We ask our suppliers to study and agree to
              the Code of Conduct as a pre-requisite to
              registration. By virtue of this, no suppliers of
              SMC were identified as having significant risk
              of incidents related to child labor or exposing
              young workers to hazardous working conditions
              in 2022.</p>

            <h3 className='blue'>In San Miguel, we strive
              to form positive alliances
              outside the four walls of
              our business, first within
              our ecosystem of suppliers.
              We regard our suppliers as
              partners in value creation
              and work with them in full
              trust and transparency.</h3>

            <p>Going forward, we will request our suppliers
              to fill out a sustainability checklist, which
              is a comprehensive questionnaire on social
              accountability and environmental management.</p>

            <p>To read more about our Procurement Policy
              Manual and Supplier Code of Conduct, please
              visit SMC’s company website: https://www.
              sanmiguel.com.ph/page/company-policy.</p>

            <p>Achieving a fully ethical and sustainable supply
              chain is a journey and demands constant
              engagement with our suppliers. In 2022, we
              conducted an initial engagement with the top
              20 suppliers of each of our business units to
              survey their ESG performance, a total of 263
              unique suppliers in all, accounting for 18% of
              spend. It is noteworthy that more than 52% of
              188 respondents have external certifications
              such as ISO 14001: Environmental Management
              Systems. </p>

            <p>In the coming years, we intend to do more. For
              2023, we have set a target of over 500 suppliers
              (all top suppliers of SMC and accounting for
              over 50% of the total procurement spend) with
              whom we will have regular dialogues on ESG to
              help raise their sustainability performance for
              everyone’s collective benefit.</p>

            <Image style={{ borderRadius: '25' }} src="/page/MarioCumlat2.png" width={547} height={540} alt='Mario Cumlat' />

            {/* <h3 className='blue'>Changing the landscape for corn farmers</h3>

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
              to join the program and enjoy its benefits.</p> */}

            {/* <h3 className='green'>Growing Hope  </h3>

            <div className='full-img'>
              <Image src="/page/MarioCumlat-1.png" width={950} height={500} alt='Mario Cumlat' />
            </div>

            <p><small><b><i>“Ako po ay dating OFW sa Saudi,
              nagsumikap po akong makabili
              ng sariling lupa. Nang nakaipon,
              nagdesisyon akong umuwi at
              makasama na ang aking pamilya.”</i></b></small></p>

            <p>
              <i>
                “Noong 1996, ako nagsimulang magtanim. Simula
                noon, naranasan ko na ang iba’t-ibang suliranin
                sa pagsasaka, katulad ng madalas na pagbagyo,
                mga insekto sa pananim, kakulangan sa imbakan
                or storage, pagpapatuyuan ng mais, madalasang
                pagbabago ng teknolohiya sa pagtatanim, mataas na
                gastusin sa pananim, mahirap na daanang farm to
                market roads, at ang hirap sa pakikipagtransaksyon
                sa mga buyers na madalas pang manipulahin ang
                presyo at timbang na kulang pa na pangpuhunan at
                kapital. Sa pag-asam ko na mapaunlad ang aking
                mga kagamitan sa pagsasaka nagkaroon ako ng mga
                utang na naging dahilan upang makontrol na ng aming
                pinagkakautangan or financier ang mga binebenta
                naming mais. Sa mababang halaga na lamang naming
                ito naibebenta at minsan pa kahit konting dumi lamang
                ay mas lalo pang binababaan pa ang presyuhan sa
                amin.
              </i>
            </p>

            <p>
              <i>
                Naging iba ang ihip ng hangin ng makausap ko at
                makilala ang isang tauhan ng B-MEG na nagpaliwanag
                sa akin ng programang ito. Hindi ako makapaniwala
                dahil bilang isang simpleng magsasaka hindi ko maisip
                na makakapagsupply ako sa pangarap kong kumpanya
                (SMC). Ako’y nagagalak dahil sa 25 years kong
                pagsasaka ay makararanas na din ang aking pamilya
                ng kapanatagan at kaginhawaan.
              </i>
            </p>

            <p>
              <i>
                Marami pang magandang naidulot sa aming
                mga farmers ang pakikipag-ugnayan at
                pakikipagtransaksyon sa San Miguel Foods/B-MEG.
                Una po rito ang kasiguraduhan ng presyo ng mais.
                Kampante po ako na hindi magkakaroon ng iregular or
                biglang pagbaba ng presyo ng aking mais. Pangalawa,
                ang maayos at tamang pagtitimbang at pagsusuri ng
                kalidad ng aming mga mais. Pangatlo po ang mabilis
                na transaksyon at pag-galaw ng aming mga mais.
              </i>
            </p>

            <p>
              <i>
                At ang panghuli, bilang isang farmer dinanas
                naming madalas mabaon sa utang at mabigyan ng di
                makatarungang pagpresyo sa aming mga mais. Ngunit
                dahil sa B-MEG nagkaroon kami ng kapanatagan ng
                isip at motibasyon na ipagpatuloy ang pagtatanim.
              </i>
            </p>

            <p>
              <i>
                Sana po ipagpatuloy ninyong suportahan ang maliliit
                na farmers na katulad namin. Maraming salamat.”
              </i>
            </p> */}

            <Slider storiesItem={storiesSustainableSupplyChain} />

          </section>
        </article>
      </div>
    </section>
  )
}
