import Image from 'next/image'
import React from 'react'
import { storiesBiodiversityEcosystems } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Taking Concrete Steps',
  description: 'Taking Concrete Steps | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>

            <h1 className='green'>Taking Concrete Steps </h1>

            {/* <h3 className='green'>Taking concrete  steps</h3> */}

            <div className='full-img'>
              <Image src="/page/plant.png" width={950} height={500} alt='Taking concrete  steps' />
            </div>

            <p>NCC’s Environment Management Policy states, “NCC is committed to fulfill compliance
              obligations to protect the environment where we operate, for the prevention of
              pollution, sustainable use of resources, mitigation, and adaptation to climate change,
              and for the protection of biodiversity ecosystems. We endeavor to improve our
              environmental performance, taking into account the significant aspects and impacts
              in our business operations, the needs and expectations of our customers, and of
              relevant interested parties in achieving our environmental objectives and targets.
              We pursue improvements to our environmental management system in keeping with
              our corporate values, anchored on our Vision and Mission, in our desire to become a
              world-class cement company and a true advocate of responsible mining.”
            </p>

            <p>In compliance with DENR Administrative Order
              No. 2010-21 (the Revised Implementing Rules and
              Regulations of R.A. 7942, otherwise known as the
              Philippine Mining Act of 1995), our Environmental
              Protection and Enhancement Program (EPEP)
              is a comprehensive 25-year plan, which details
              NCC’s methods and procedures to attain its
              environmental protection and management
              objectives over the life of the mine. Following
              this long-term plan, the Annual Environmental
              Protection and Enhancement Program (AEPEP)
              expounds on NCC’s plans for 2022, which included
              the following programs:</p>


            <Image style={{ borderRadius: '0' }} src="EPEP_PROGRAM.png" width={422} height={198} alt='EPEP_PROGRAM' />

            <ol>
              <li>
                <b>Establishment of Reforestation Areas.</b>
                <p>This includes establishing partnerships with
                  various groups (private sector, the academe,
                  LGUs, and community-based organizations) to
                  conduct tree planting activities and re-green areas
                  that are idle and open. For 2021 and 2022, with
                  the assistance of City Environment and Natural
                  Resources Office (CENRO) Urdaneta and CENRO
                  Alaminos, the company established partnerships
                  with people’s organizations. The first is with the
                  NAEVAM Irrigators Association Inc. located at
                  Barangay Nangapuan, San Quintin, Pangasinan,
                  which became the company’s partner in the
                  Expanded National Greening Program (ENGP) or
                  Bamboo Plantation Program. NCC established a
                  Satellite Nursery where NAEVAM can store and
                  maintain bamboo propagules until they are ready
                  for planting. NCC’s commitment is to plant 126
                  hectares of bamboo, and as of December 2022, a
                  total of 35 hectares have already been planted.
                  Another people’s organization partner is the
                  Villacorta Greenthumb Development Association
                  in Mabini, Pangasinan. The total area for this
                  program is 70 hectares, for which timber, fruit
                  bearing, and bamboo trees are to be planted.</p>

                <div className='full-img'>
                  <Image src="/page/MonitoringTeam.png" width={950} height={500} alt='Monitoring Team' />
                </div>

                <p>    <b><span><small>Members of Multipartite Monitoring Team (MMT) validating
                  NCC’s environmental compliance. MMT is composed of MGB,
                  EMB and Chairman of NCC’s host and neighboring barangays.</small></span></b> </p>
                <div className='full-img'>
                  <Image src="/page/BangolCanitIbaloiSamahangTribuKaunlaran.png" width={950} height={500} alt='Bangol Canit Ibaloi Samahang Tribu Kaunlaran' />
                </div>
                <p> <b><span><small>Members of Bangol Canit Ibaloi Samahang Tribu Sa
                  Kaunlaran propagating fruit bearing and timber wood
                  seedlings in their own nursery.</small></span></b> </p>

                <p>Amidst the restrictions brought about by the
                  pandemic, NCC celebrated Arbor Day on June
                  10, 2022 by replanting more than 1,550 assorted
                  fruit bearing and hardwood seedlings within
                  a 2-hectare land located at Purok 6, Barangay
                  Nama, Pozorrubio, Pangasinan. The activity was
                  undertaken with partners from the DENR, the
                  National Commission on Indigenous People, NCC’s
                  host and neighboring communities, indigenous
                  cultural communities, people’s organizations,
                  students, and teachers.  </p>

                <div className='full-img'>
                  <Image src="/page/ArborDayandEnvironmentalMonth.png" width={950} height={500} alt='NCC celebrated Arbor Day and Environment Month ' />
                </div>
                <p> <b><span><small>NCC celebrated Arbor Day and Environment Month through massive tree planting with its employees
                  together with partners from various schools, government agencies, Barangay Government Units,
                  Municipal Governments of Sison and Pozorrubio and Indigenous Cultural Communities.
                </small></span></b> </p>

                <p>NCC also joined the national celebration of
                  Arbor Day on June 25, 2022 by conducting tree
                  planting and officially launching its Arboretum in
                  a 2-hectare property located in Sapid Mini Forest.
                  The Arboretum houses various endemic and fruit
                  bearing trees such as palosapis, lauan, narra,
                  cacao, balimbing, guyabano, and makopa.</p>

                <p>As the development at the Mining Area
                  continues, NCC ensures that topsoil is saved for
                  reforestation. To date, a total of 4,714 MT of topsoil
                  are stored at the stockpile area for reforestation
                  activities and nursery use. Sapid Forest has been
                  an area for various environmental management
                  activities such as seedling propagation and
                  production, seed germination, and hunting of
                  wildings for propagation. A clonal facility, where
                  stem cuttings are used to reproduce seedlings,
                  has been expanded for use in research programs
                  and propagation of citrus fruits and other
                  dipterocarp trees. </p>

                <p>NCC also involves local communities in its various
                  environmental programs. This year, the company
                  partnered with Bangol Canit Ibaloi Samahang
                  Tribu Sa Kaunlaran, a community-based forest
                  management association located in Barangay
                  Inmalog, Sison, which is one of its neighboring
                  communities. As part of the collaboration, NCC
                  provided the association with the necessary
                  resources, including a nursery and essential
                  tools, to help them establish their own seedling
                  production. In return, the association sells
                  seedlings to NCC for its greening and reforestation
                  initiatives. This mutually beneficial partnership is
                  set to continue until 2026, during which period,
                  NCC will purchase 35,000 seedlings from the
                  association, while the association and its members
                  will earn an estimated income of 1.35 million PhP.</p>

                <p>NCC’s commitment to environmental sustainability
                  and community empowerment is further
                  showcased by its National Greening Program and
                  Mining Forest Program. From July 2021 to June
                  2022, NCC successfully planted 15,995 seedlings
                  over 15.4 hectares, as part of its National Greening
                  Program. Additionally, as part of its Mining
                  Forest Program, it planted 200 seedlings over 0.8
                  hectares during the same period.</p>

              </li>

              <li> <b>Water Resources.</b>
                <p>To ensure that all water leaving its facility is free
                  from harmful contaminants, NCC continuously
                  maintains all silting ponds, draining canals, and oil
                  and water separators, which are crucial in filtering
                  out any pollutants from the water. Additionally,
                  it regularly conducts clean-up drives along four
                  creeks that receive the discharged water: Buli
                  Creek, Bagutan Creek, Kubuar Creek, and Sapid
                  Creek. To further guarantee the safety of its
                  discharged water, NCC conducts monthly internal
                  water sampling, with results consistently meeting
                  DENR effluent standards. These results are
                  verified through testing carried out by an external
                  DENR-accredited testing center. Moreover, NCC
                  also ensures the proper disposal of all hazardous
                  waste generated during its operations. All
                  hazardous waste is labeled, stored, and disposed
                  properly through DENR-accredited waste haulers,
                  with no chemicals or hazardous waste ever being
                  disposed of in local water bodies.</p>
              </li>

              <li>
                <b> Noise and Vibration. </b>
                <p>To ensure that its operations are within the
                  acceptable noise levels according to DOLE and
                  DENR standards, NCC conducts its own ambient
                  noise level monitoring at Sitio Saguitlang in
                  Barangay Labayug and Barangay Inmalog.
                  Furthermore, during blasting operations, NCC
                  works with Delta Earth Moving Inc. to monitor
                  vibration levels using specialized vibrometer
                  equipment. This ensures that the vibrations
                  caused by our operations are within the required
                  parameters, and that any potential risks to nearby
                  communities or infrastructure are minimized.</p>
              </li>
              <li>
                <b>Air Quality.</b>
                <p>To control dust and emissions generated during
                  quarry operations, NCC uses water trucks at the
                  Shale and Limestone Quarry to suppress dust
                  generated during blasting operations. Additionally,
                  it employs a vacuum truck to siphon dust along
                  paved roads. Plans are in place to procure a
                  new and more efficient vacuum truck, which will
                  increase the existing equipment’s capability.
                  Furthermore, NCC conducts regular emission
                  testing of heavy equipment involved in quarry
                  operations. It also carries out internal monthly
                  ambient air monitoring at all identified sampling
                  points, in addition to confirmatory sampling
                  conducted during Multipartite Monitoring Team
                  visits. All test results have passed and are within
                  the DENR parameters, indicating that NCC’s
                  measures are effective in controlling emissions
                  and ensuring the air quality in the surrounding
                  communities.</p>

                <div className='full-img'>
                  <Image src="/page/JavaSparrow.png" width={950} height={500} alt='NCC celebrated Arbor Day and Environment Month ' />
                </div>
                <p> <b><span><small>Java Sparrow, categorized as one of the endangered
                  species, is found within NCC’s Mineral Production Sharing
                  Agreement (MPSA).
                </small></span></b> </p>

                <div className='full-img'>
                  <Image src="/page/PhilippineCollaredDove.png" width={950} height={500} alt='NCC celebrated Arbor Day and Environment Month ' />
                </div>
                <p> <b><span><small>Philippine Collared Dove, categorized as Vulnerable Species,
                  is seen roaming around NCC. Researchers believe that the
                  surrounding area of NCC provides food.
                </small></span></b></p>
              </li>

              <li>
                <b>Conservation Values. </b>
                <p>NCC conducts Information and Education
                  Campaigns to raise awareness and establish
                  volunteer programs that foster collaboration
                  between the company and the community in
                  conservation efforts.</p>
              </li>

              <li>
                <b>Environmental Research.</b>

                <ol type='a'>
                  <li><b>Inventory of Flora and Fauna</b>
                    <p>NCC upholds its commitment in identifying,
                      conserving, and enriching biodiversity, as the
                      preservation of flora and fauna is essential
                      for maintaining ecological balance. To develop
                      effective conservation and preservation programs,
                      the company must first determine the occurrence
                      and distribution of the various plant and animal
                      species thriving within the NCC’s MPSA. By doing
                      so, NCC can define and implement measures that
                      will help protect these species and their habitats.</p>
                  </li>
                  <li><b>Siltation Pond Efficiency</b>
                    <p>Quarry areas are sources of silt and sediments
                      that have the potential to cause adverse
                      impacts on aquatic ecosystems and downstream
                      communities if not properly managed. These
                      impacts can be mitigated through a number of
                      techniques. During quarry operations, silt is often
                      suspended in the water, and if left unchecked, can
                      harm sensitive aquatic organisms. To address this,
                      NCC conducts Siltation Pond Efficiency Research
                      to assess, evaluate, and monitor the sedimentation
                      rate of all siltation ponds. This research helps
                      the company develop environmental programs
                      and assess the effectiveness of its mitigating
                      measures. </p>


                    <div className='full-img'>
                      <Image src="/page/MMT_IEC.png" width={950} height={500} alt='NCC celebrated Arbor Day and Environment Month ' />
                    </div>
                    <b><span><small>An Information Education Communication on NCC’s environmental performance is conducted to
                      our host community. The activity is headed by Mines and Geosciences Bureau and Environmental
                      Management Bureau of Region 1 and members of Multipartite Monitoring Team.
                    </small></span></b>


                  </li>
                </ol>
              </li>
              <li>
                <b>Training. </b>
                <p>To stay up to date with environmental and mining
                  regulations, NCC regularly enrolls its personnel
                  in relevant training programs. For example, the
                  members of the Multipartite Monitoring Team
                  recently underwent Basic Pollution Control
                  Orientations to update them with current trends
                  in pollution control and enhance their knowledge
                  and understanding of environmental programs,
                  policies, and laws.</p>

                <p>NCC’s AEPEP, as reported in the 2022 Tenement,
                  Safety and Health, Environment and Social
                  Monitoring Validation, achieved physical and
                  financial accomplishment of 89%, which is
                  higher than the passing rate of 85%. This result
                  demonstrates NCC’s commitment to meeting and
                  exceeding regulatory standards for environmental
                  protection, safety, and social responsibility.</p>
              </li>
            </ol>


            <Slider storiesItem={storiesBiodiversityEcosystems} />

          </section>
        </article>
      </div>
    </section>
  )
}
