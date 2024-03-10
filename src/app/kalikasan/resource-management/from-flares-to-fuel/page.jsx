
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'From Flames to Fuel',
  description: 'From Flames to Fuel | SMC Sustainability',
}

export default function Index() {

  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>From Flames to Fuel</h1>

            <div className='full-img'>
              <Image src="/page/flares_to_fuel.png" width={950} height={500} alt='Combined Bess Project' />
            </div>

            <p>As the only refining facility in the
              Philippines, the Petron Bataan Refinery
              (PBR) is critical to ensuring fuel supply
              security for the country. Today, it is
              one of the most advanced facilities in
              Asia-Pacific, having benefited from a
              major upgrade completed in 2014.</p>

            <p>As part of the Refinery’s operation, the plant may
              produce flare gas (waste gas) particularly during
              plant shutdown and startup activities and day-to-day
              operations. These waste gases are sent to the flare
              facility to ensure safe release to the environment,
              following strict environmental standards stipulated in
              RA 8749 or the Philippine Clean Air Act of 1999 and its
              Implementing Rules and Regulations.</p>

            <p>In 2014, the refinery installed a Flare Gas Recovery
              Facility to recover the flare gas composed mainly of
              hydrogen, methane, ethane, butane, propane, and
              other derivatives, and to upgrade these to fuel that
              is used for the Refinery’s operation. Consequently,
              this reduced the requirement for supplemental fuel
              from other sources and avoided the carbon emissions
              from the supplemental fuel. The facility significantly
              reduced the plant’s flaring rate from 4.1% (as % of
              total GHG contributed by flaring) in 2012 to less than
              0.7% since the completion of the project up to present.
              In 2022, actual waste gases recovered amounted to
              32,330 barrels , which is equivalent to a reduction in the
              refinery’s energy consumption of around 206,597 GJ in
              the same year. The waste gas recovered in 2022 alone
              avoided 10,123 MT of GHG emissions from flaring.</p>

            <Slider storiesItem={storiesResourceManagement} />

            {/* 

            <div className='full-img'>
              <Image src="/page/flares_to_fuel.png" width={950} height={500} alt='Combined Bess Project' /></div>

            <h3 className='green'>From  to Fuel</h3>

            <p>As the only refining facility in the
              Philippines, the Petron Bataan Refinery
              (PBR) is critical to ensuring fuel supply
              security for the country. Today, it is
              one of the most advanced facilities in
              Asia-Pacific, having benefited from a
              major upgrade completed in 2014.</p>



            <h3 className='green'>Water</h3>
            <p>Water plays a vital role in our daily reality. Out
              of 115 million Filipinos, more than half lack
              access to sustainably sourced and safe water</p>

            <p>Achieving water security remains a
              longstanding challenge for our country. We
              Filipinos are no strangers to water-related
              challenges such as water pollution, water
              scarcity, and insufficient access to sanitation.</p>

            <p>Recognizing this plight, we support the
              government’s thrust to achieve universal access
              to safe, sufficient, affordable, and sustainable
              water supply, hygiene, and sanitation by 2030.
              We will help create solutions and contribute
              to the government’s efforts in resolving
              water security challenges in the country.
              Thus, we have instituted water-saving and
              efficiency programs across our businesses and
              operations. </p>

            <Image style={{ borderRadius: '0' }} src="water_consumption.png" width={430} height={215} alt='Water Consumption' />

            <p>In 2022, 97% of our water withdrawal was
              seawater, which was used for cooling our
              equipment in our power plants and oil
              refinery. Approximately 98% of our total
              extracted water was discharged back safely to
              bodies of water at normal temperature after
              undergoing processing and treatment in our
              wastewater treatment facilities. The discharge
              of wastewater, whether to land or bodies of
              water, is highly regulated in the country and
              should satisfy the Water Quality Guidelines
              and General Effluent Standards of 2016 (DAO
              2016-08; and updated DAO 2021-19). We ensure
              our full compliance with these standards by
              establishing wastewater treatment facilities
              across our operations. We designed these
              treatment facilities to properly handle the specific
              pollutants they are intended to treat, which can be by
              a combination of physical, chemical, aerobic, and/or
              anaerobic treatment. We also have in place a tertiary
              treatment facility in cases where we can reuse treated
              wastewater. Wastewater with high chemical oxygen
              demand or COD levels is pretreated using Upflow
              Anaerobic Sludge Blanket technology to generate
              biogas that we use as fuel in our operations.
            </p>

            <p>The remaining 3% of our total water withdrawal in
              2022 was consumed by the Group as part of our
              beverage products, in our business processes—
              cleaning, rinsing, steam generation—and for office
              operations. Of our total wastewater, we were able to
              recycle 1.5 billion liters in 2022 alone, which we plan
              to boost in the coming years</p>

            <Image style={{ borderRadius: '0' }} src="/page/ghg_emisson.png" width={440} height={197} alt='Water Recycled and Reused' />


            <p>Foremost in our water sustainability initiatives is a
              flagship program called “Water for All,” an initiative
              established in 2017 that aims to reduce our Groupwide use of scarce water by 50% by 2025 against a
              2016 baseline. </p>

            <p>An example of a notable feat under “Water for
              All” comes from our cement business. As of 2022,
              our cement business reduced its scarce water
              consumption by 88% compared to 2016 values.
              Furthermore, it aims to minimize if not do away
              altogether with its freshwater usage by implementing
              solutions such as rainwater harvesting and full
              recycling. In 2022 alone, it collected 446 million liters
              of rainwater, which it used for its manufacturing
              processes. </p>

            <h3 className='green'>Water for All</h3>

            <p>We may have the most trusted and well-loved brands, the best supply chains,
              distribution systems, and manufacturing technologies, but our businesses
              cease to exist without water. Water is indispensable to our daily operations,
              whether used as an agricultural input, as raw material for our products, or to
              generate steam, cool equipment, or sanitize facilities. That is why, over many
              decades, we have invested in processes and technologies to treat, reuse, and
              recycle more water and preserve vital water sources. </p>

            <p>In 2017, even as our water management efficiency
              levels were already among the highest in the
              country, we chose to make our most significant
              commitment yet to water sustainability. We
              launched “Water for All,” our Group-wide program
              to cut non-product, utility water use by 50% by
              2025. We established the SMC Water Council,
              comprised of technical representatives from each
              of our operating businesses. They establish and
              monitor water-saving measures and set water
              consumption goals across our plants and offices
              nationwide. </p>

            <p>We have since been implementing several
              programs across the Group to achieve our target.
              This includes eliminating the wastage of water
              by adopting stricter measures to improve water
              use efficiency; utilizing water-saving technologies;
              and implementing conservation programs. All
              facilities and machinery are closely monitored for
              any signs of leakage and malfunction that could
              lead to wastage. Fixing leaks has also contributed
              significantly to our water reduction efforts. We
              have increased the recycling and reuse of water
              across all our operations and have maximized
              our utilization of desalinated seawater. We have
              also built new rainwater collection features
              and retrofitted or upgraded older facilities to
              enable rainwater harvesting. Our businesses
              optimize their wastewater treatment facilities
              and constantly try to make greater use of treated
              greywater for non-essential purposes. More
              significantly, we continue to reduce groundwater
              use, even as we work with communities to protect
              these water sources.</p>


            <Image style={{ borderRadius: '0' }} src="water_reduction_graph.png" width={368} height={280} alt='Water Reduction Graph' />

            <p>SMC’s various businesses continue to implement
              Water for All programs according to a set
              schedule, including making capital expenditures
              on improving systems in the facilities to meet their
              targets. </p>


            <div className='full-img'>
              <Image src="/page/RevivingAilingRvers.png" width={950} height={500} alt='Reviving our ailing rivers' />
            </div>
            <h3 className='green'>Reviving our ailing rivers</h3>

            <p>In August 2022, San Miguel Corporation
              completed the Tullahan River cleanup
              initiative, after 27 months of operations.
              SMC was able to extract over 1.2 million
              MT of silt and solid waste from an
              11-kilometer stretch of the river system,
              spanning four major cities. In partnership
              with the DENR, the project represented
              the largest river cleanup undertaken by
              any private company.</p>

            <p>This accomplishment would only be outpaced in
              scale and scope a year later by our next initiative—
              the Pasig River cleanup. By February 2023, just
              20 months into the project, we reached the one
              million MT milestone of silt and solid waste
              removed from the Pasig River, long a symbol of
              pollution and neglect in the Philippines.</p>

            <p>We have also begun the clean-up of Bulacan’s
              Meycauayan river, to help alleviate perennial
              flooding. </p>

            <p>Our river initiatives demonstrate SMC’s
              willingness to go beyond what is expected. While
              some of our projects are located along these
              rivers, our efforts to improve the health of our
              waterways are driven by our desire to positively
              impact the environment and the communities we
              serve. In particular, the wide-scale impacts of
              flooding and pollution on our cities and people
              have compelled us to take decisive action. </p>

            <p>In a 2021 study published in OurWorldinData.
              org, the Pasig River emerged as the top plasticsemitting river responsible for the world’s ocean
              plastics. Meanwhile, the Tullahan and Meycauayan
              Rivers are ranked four and five on that list. Four
              other Philippine rivers—the Pampanga, Libmanan,
              Rio Grande de Mindanao, and Agno rivers—also
              made it in the top 10 of that same global list.</p>

            <p>Keeping our rivers clean will help reduce the
              amount of plastic waste that pollutes our oceans,
              improve water quality, support biodiversity, and
              mitigate threats to traditional fishing grounds. But
              just as important is deepening and widening them
              to mitigate decades of siltation and pollution that
              have rendered them unable to serve their purpose
              of directing flood waters away from our cities.</p>

            <p>Fully rehabilitating our rivers will of course take
              more than just ridding them of silt and garbage.
              To transform our rivers into thriving ecosystems,
              it will require the collective efforts of various
              stakeholders, including government, communities,
              and private sector partners. While it seems like a
              daunting endeavor, taking the first steps toward
              restoration is a crucial part and one that SMC is
              more than willing to take.</p>

            <h3 className='green'>Hope Flows</h3>

            <p>Angat Dam, Metro Manila’s main water source, may be located in Bulacan,
              but for many decades, the province itself did not have access to a steady,
              sufficient supply of potable water for its over 3.7 million residents.</p>

            <p>Households would rely on deep wells, tapping into groundwater sources,
              which yielded poor-quality water. Excessive groundwater extraction over a
              long period, coupled with Bulacan’s exponential economic and population
              growth, gave rise to a more pressing concern—land subsidence, said to be
              a contributing factor to the perennial flooding in lower-lying areas in the
              province.</p>

            <p>But that would change in 2015. That year, SMC Infrastructure was awarded
              the contract for the Bulacan Bulk Water Supply project that would provide the
              province’s 24 cities and municipalities with potable water, at the lowest price
              per cubic meter in the Philippines. </p>

            <p>Since the project commenced operations in 2019, it now supplies treated
              bulk water to 12 water districts that, in turn, distribute to some 220,000
              households in Balagtas, Bocaue, Marilao, Meycauayan, Obando, San Jose del
              Monte, Bulakan, Calumpit, Guiguinto, Malolos, Plaridel, and Sta. Maria. And
              true to its commitment, this water is available to water districts at less than 1
              centavo per liter, the lowest bulk water charge in the country. </p>

            <p>In 2023, we are set to begin development on Stage 3A of the project, which
              will make potable and affordable water from the Angat reservoir and other
              surface water sources available to an additional 70,000 more households by
              early 2025. Stage 3A will cover the water districts of Baliwag, Norzagaray,
              Hagonoy, Pandi, San Ildefonso, San Miguel and San Rafael. Full completion of
              Stage 3 will bring the total coverage to the target 24 areas. </p>

            <p>Currently, the Bulacan Bulk Water Supply Project produces an average
              volume of 210 million liters per day and has a maximum capacity of 388
              million liters per day. </p> 
              
              */}
          </section>
        </article>
      </div>
    </section>
  )
}
