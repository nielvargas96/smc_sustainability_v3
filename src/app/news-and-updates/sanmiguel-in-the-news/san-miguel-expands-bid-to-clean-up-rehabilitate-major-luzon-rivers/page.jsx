import React from 'react'
import '../../style.scss'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'San Miguel in the News | News and Updates',
  description: 'Sanmiguel in the News | News and Updates | SMC Sustainability',
}

export default function page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>San Miguel expands bid to clean up, rehabilitate major Luzon rivers</h1>
        </div>

        <div className='description-text'>
          <Image src='/news/rehabilitate-luzon-rivers.png' alt='image' width={896} height={570} />

          <p>
            By: Manila Standard <br />
            October 22, 2023, 8:50 pm

            Access the original article <a href="https://manilastandard.net/spotlight/environmental-and-sustainability/314382512/san-miguel-expands-bid-to-clean-up-rehabilitate-major-luzon-rivers.html" target="_blank">here</a>
          </p>

          <p>
            San Miguel Corp. (SMC) is setting its sights on a more ambitious goal: cleaning up and rehabilitating three major river systems as well as other tributaries and waterways throughout Metro Manila, Pampanga, Cavite and Bulacan.
            <br /><br />
            Dubbed as “SMC’s Adopt-A-River program,” the initiative is possibly the country’s biggest and most impactful corporate social responsibility (CSR) effort in collaboration with the national and local governments.
            <br /><br />
            SMC is initiating the project three years after it launched its landmark river cleanup and flood mitigation initiative—which has led to the removal of over 3 million metric tons of silt and solid wastes from the Pasig, Tullahan, and San Juan Rivers.
            <br /><br />
            The initiative has gained broad-based support from various stakeholders, including national, provincial and city governments, whose localities stand to benefit from the massive undertaking.
            <br /><br />
            Department of Environment and Natural Resources (DENR) Secretary Ma. Antonia Yulo-Loyzaga and Department of Public Works and Highways (DPWH) Secretary Manual Bonoan led national government support for the program at the formal signing of the memoranda of agreement.
            <br /><br />
            Also present at the signing and joining the effort were Cavite Gov. Juanito Victor Remulla, Pampanga Gov. Dennis Pineda, and Navotas City Mayor John Ray Tiangco.
            <br /><br />
            “This initiative is unlike anything we have seen before. It is perhaps the most extensive environmental effort involving both government and the private sector. In one decisive move, we are cleaning up many major rivers and waterways. We are doing this as a public service, at no cost to the government or taxpayers,” SMC president and chief executive Ramon S. Ang said.
            <br /><br />
            He added that:
            <br /><br />
            “ It is important to understand that cleaning up rivers is not a quick fix. It is a very important step in the river restoration process. It paves the way for polluted waterways to heal,” he added.
            <br /><br />
            SMC began its river advocacy three years ago spending over P3 billion and removing over three million metric tons of oil and waste from Pasig River, Tullahan River and San Juan River.
            <br /><br />
            The massive initiative covers the following rivers:
            <br /><br />
            • River systems in Bulacan including the Meycauayan, Maycapiz-Taliptip, and Mailad Rivers, the Bambang Creek, Marilao River, Sta. Maria River, Guiguinto River, Pamarawan River, Labangon-Angat River, Malolos River and Hagonoy River.
            <br /><br />
            • Pampanga River
            <br /><br />
            • Maragondon River and other related tributaries in Cavite
            <br /><br />
            • Waterways in Navotas City, including Muzon River, Batasan River and the Navotas River
            <br /><br />
            • San Pedro River in Laguna
            <br /><br />
            • San Juan River
            <br /><br />
            Loyzaga lauded the company for its continuous efforts to clean up major river systems and the expansion of the program, aligned with government’s environmental objectives.
            <br /><br />
            “This partnership enables DENR to achieve three main mandates by investing and allowing water to flow and impound it correctly where it is needed. Most of all, we are able to fulfill a new role assigned to us by our President when he created the Water Resources Management Office… We are very grateful to San Miguel Corporation for its kind and generous support to our government activities,” Loyzaga said.
          </p>
        </div>
      </div>

    </section>
  )
}
