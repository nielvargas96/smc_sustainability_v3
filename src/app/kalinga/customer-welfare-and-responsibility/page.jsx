import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Customer Welfare and Responsibility',
  description: 'Customer Welfare and Responsibility | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Customer Welfare and Responsibility</h1>

            <p>Across the diverse business units of San Miguel,
              one of our priority responsibilities is to ensure
              the health and safety of our customers. This
              is a cornerstone upon which our brands have
              built their reputation and gained the trust of
              consumers. The key elements of our customer
              welfare and responsibility program vary
              according to the nature of each business.</p>

            <p>For SMFB, compliance with the regulations
              of the Food and Drug Administration (FDA) is
              primary. This includes obtaining a License to
              Operate for each production facility, Certificates
              of Product Registration, and compliance
              with mandatory labelling requirements
              such as product name, manufacturer’s
              name and address, nutrition information,
              list of ingredients, allergen declaration,
              serving size, net content, lot/batch number,
              and manufacturing and expiration dates. If
              applicable, storage and handling conditions, and
              directions for use are indicated. Additional label
              markings such as vitamin fortification, low calorie, low-alcohol or no preservatives are also
              validated and approved by FDA. Each business
              monitors new guidelines released periodically
              by the FDA and ensures that product
              development personnel are informed and
              trained in the required compliance measures
            </p>

            <p>
              Prior to releasing products to market, the
              company diligently conducts assessment of
              all ingredients used in product formulations,
              conducts sensory evaluation with respondents
              matching their target market, and establishes
              shelf life of each product. Standard parameters
              of all raw materials, finished goods and
              packaging are fully documented. Once in the
              market, samples from each production batch
              are retained in the manufacturing plant for
              reference in case of any product complaint that
              may arise.
            </p>

            <p>For Food in particular, efforts are ongoing to
              improve the nutritional value of our products.
              Recent declarations have linked obesity
              and non-communicable diseases such as
              hypertension and diabetes to processed food.
              To address this concern, the Food Group has
              been working on ways to improve the nutritional
              quality of its products, including fortification
              with vitamins and minerals, reformulation to
              reduce sodium and preservatives, and the
              launch of plant-based food. The reformulation
              process is painstaking and iterative as it aims
              to achieve target nutritional values while
              preserving the taste that consumers are
              accustomed to.</p>

            <p>The marketing of consumer goods is likewise
              subject to certain regulations, more so for
              alcoholic beverages. All the advertising
              materials released through media and on
              digital platforms comply with the requirements
              of Ad Standards Council, a self-regulating
              organization that aims to safeguard truth in
              advertising and give paramount consideration to
              the consumer’s interest. This includes a one second frame at the end of each commercial
              reminding the viewer to “Drink Responsibly.”
              The same caution is present in all outdoor
              advertising and merchandising materials.
              Thus, we do our part not to promote excessive
              drinking but capitalize on brand equity to
              promote our products. </p>

            <p>For our cement business, NCC follows
              Philippine National Standards (PNS) in
              labelling its products. This includes product
              classification, specification and application,
              trade name, trademark of the manufacturer,
              batch identification number, and information on
              disposal of packaging, which are in accordance
              with PNS 07:2018, PNS 63:2019, and PNS ASTM
              C91:2005.</p>

            <p>For infrastructure, a Road Safety Audit Report
              is produced based on two components, data
              collection and data evaluation. The audited
              project (e.g., Skyway, NAIAx, SLEX, TPLEX,
              STAR Tollway) must abide by several laws and
              regulations, including those relating to the
              environment, public health, safety, municipal
              and provincial requirements, and internal
              performance standards. Laws that address
              process safety management, right-to-know
              issues, or environmental management are
              examples of governmental controls.
            </p>

            <p>The organization and the Toll Regulatory Board
              (TRB) jointly inspect the tollways during an
              initial phase while driving a van equipped
              with a dashboard camera. TRB then reviews
              the video footage to assess the requirements
              for signages, their proper placement and
              categorization, the presence of hazardous items,
              and other safety-related issues. Through these
              parameters and procedures, the organization
              can then ensure safer and more convenient road
              use for motorists.
            </p>

            <p>The Company’s commitment to deliver quality
              products and services, and not cause any harm
              to people and the environment, is demonstrated
              by its ISO and Food Safety certifications, of
              which there were 134 installations with valid
              certificates as of the end of December 2022.</p>

            <div className='full-img'>
              <Image style={{ borderRadius: '0' }} src="/page/TollRegulatoryBoard.png" width={1144} height={603} alt='Toll Regulatory Board  ' />
            </div>

            <p>Gathering and addressing product complaints is
              another essential element in ensuring customer
              welfare. The Company has a Customer Care
              Hotline +632 8632-2000 which is staffed by
              SMITS subsidiary, ProSync. We have a San
              Miguel Corporation Facebook page, various
              Facebook brand pages, company websites and
              email addresses through which customers
              the video footage to assess the requirements
              for signages, their proper placement and
              categorization, the presence of hazardous items,
              and other safety-related issues. Through these
              parameters and procedures, the organization
              can then ensure safer and more convenient road
              use for motorists.
              The Company’s commitment to deliver quality
              products and services, and not cause any harm
              to people and the environment, is demonstrated
              by its ISO and Food Safety certifications, of
              which there were 134 installations with valid
              certificates as of the end of December 2022.
              and other individuals send in complaints,
              inquiries, and other feedback. ProSync sorts the
              information and sends these to the respective
              contact persons in charge of each business. We
              also employ social media monitoring tools to
              track any issues or posts mentioning San Miguel
              or our brands.</p>

            <div className='full-img'>
              <Image src="/page/qa_graph.png" quality={100} width={1135} height={446} alt='Graph ' />
            </div>
            <p>Customer complaints about food, in particular,
              are managed by Quality Assurance specialists
              following a standardized procedure, with
              the goal of resolving them within 24 hours.
              In addition to their technical knowledge
              about the products, the specialists are given
              soft skills training to listen, empathize, and
              properly interact with customers. An escalation
              protocol is defined should it be necessary to
              involve levels of management to settle issues.
              The organization appreciates that customer
              complaints and feedback are opportunities to
              identify areas for improvement and further
              strengthen food safety controls in place.</p>

            <div className='full-img'>

              <Image src="/page/food_lab.png" quality={100} width={950} height={500} alt='Food Lab ' />
              <Image src="/page/food_lab2.png" quality={100} width={950} height={500} alt='Food Lab ' />
            </div>



            {/* <h3 className='orange'> VEEGA  meat-free  products</h3>

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
              flakes, tapa, and tocino as well as vegetarian ready-toeat viands bulgogi and spicy soy garlic balls. Hence,
              whether a consumer is a fully committed vegan or a
              flexitarian looking to incorporate healthier meals in his
              diet, there is something that Veega has to offer.</p>

            <p>Veega products are available in most supermarkets,
              convenience stores and quick service restaurants,
              where it is a mainstay of healthy meals from meatless
              pizza to healthy nachos, salad, and pasta.</p> */}


            {/* <h3 className='orange'>
              Raised without antibiotics
            </h3>

            <div className='full-img'>
              <Image src="/page/chicks.png" quality={100} width={950} height={500} alt='Raised without antibiotics' />
            </div>
            <p>When it comes to the safety of its
              consumers, San Miguel Foods, Inc. (SMFI)
              adheres to a strict policy of raising its
              Magnolia chickens without antibiotic
              growth promotants, beta-agonists,
              hormones, or steroids. These are basic
              and absolute, inflexible rules of SMFI
              to guarantee the health of its chickens
              but more importantly, the safety of its
              consumers.</p>

            <p>Vaccines are given to day-old chicks at the
              hatchery to protect them against disease. No
              injections of hormones or any other chemicals
              are given to the broiler chickens at the farms
              from start to harvest. In cases when antibiotics
              are needed for treatment, animal-only antibiotics
              are given under close supervision by a licensed
              veterinarian. An appropriate withdrawal period
              is strictly enforced to ensure no antimicrobial
              residue is present in the meat.</p>

            <p>The living environment plays a key role in
              ensuring that the chickens are in good health and
              protected from diseases and other stressors. The
              company’s farms use Controlled Climate Systems,
              environmentally controlled facilities that are
              maintained at five to seven degrees cooler than
              outside temperature. Chickens are given access to
              quality feeds and clean water 24/7.</p>

            <p>By keeping the ambient temperature at an ideal
              level for the chickens, controlling humidity,
              and utilizing automated feeding and watering
              equipment, chickens are raised in comfortable and
              stress-free conditions, compared to conventional
              open-sided houses. Closed houses also provide
              better biosecurity, keep wild birds out, and protect
              the flock from diseases.
            </p> */}

            {/* <h3 className='orange'>Don’t pass the salt, please</h3>

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
              to responsible food production. </p> */}

            {/* <h3 className='orange'>Purpose in a bottle </h3>

            <p>
              The role of beer is deeply embedded
              within a culture that “it acts like a window
              into who we are as individuals and as
              members of larger social groups, and in
              so many ways shapes the cultural norms
              and hierarchies that pattern the society
              around us.” (Wilson & Stone, 2022).
            </p>

            <p>In the Philippines, beer is among the most
              celebrated alcoholic beverages, with 2.1 billion
              liters consumed annually*. New trends have been
              introduced in recent years, such as concoctions
              with experimental flavor profiles to accommodate
              the ever-changing consumer lifestyles. Still, the
              role of beer as the cultural glue that drives social
              discourse remains the same.</p>

            <p>Ahead of the curve was San Miguel, recognizing
              early on the importance of beer in the social space.
              SMB launched in 1999 as the country’s first lowcalorie beer for consumers who loved to drink but
              disliked the bloated feeling after a night out. San
              Mig Light (SML) was a breakthrough in the local
              scene, its tagline, “Sa mahaba-habang usapan, San
              Mig Light,” resonated deeply with the emerging
              drinker profile of that era.</p>

            <p>San Mig Light would become the most visible
              brand in bars and gastropubs over the years,
              emerging as the drink of choice among young,
              upwardly mobile drinkers. The brand became
              associated with what was “present and
              happening,” Eventually, SML would pivot into
              spaces where it could align with social causes. In
              2017, the brand tapped into a growing inclusivity
              awareness among Filipinos through a campaign
              featuring women in male-dominated fields such
              as aviation, firefighting, and biochemistry. Taking
              the creative direction a notch higher, the brand
              executed podcasts and mounted round-table
              discussions nationwide with key opinion leaders
              to kickstart conversations on inclusivity and
              empowerment.</p>

            <div className='full-img'>
              <Image src="/page/SML_Bucket.png" width={950} height={500} alt='San Miguel Lights - Buckets' />
            </div>
            <p>San Mig Light conversations have progressed
              beyond promoting a product and into the realm
              of purpose. It seeks to influence important
              discussions that challenge the status quo and
              bring up issues that people might be hesitant to
              talk about. This way, the brand aims to contribute
              to shaping a better culture. </p>

            <p>The impact of its 2017 campaign would garner
              San Mig Light a win at the Asia Pacific Tambuli
              Awards—a recognition given to brands able to
              seamlessly integrate creativity and results with
              positive change.</p>

            <p>The brand’s messaging has evolved over
              the years, from simply promoting the beer’s
              100-calorie content, to conversations all day
              long, to driving conversations relevant to today’s
              society. In so doing, the brand has been able to
              communicate its values not just for San Mig Light
              but for the entire San Miguel brand. </p>

            <p>SML has successfully shifted its value by
              immersing itself into our cultural fabric, becoming
              an emblem of the socially conscious Filipino.
              <br />
              <small><b>*Source: United States Department of Agriculture </b></small>
            </p> */}

            <Slider storiesItem={storiesCustomerWelfareResponsibility} />
          </section>
        </article>
      </div>
    </section>
  )
}
