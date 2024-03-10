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
          <h1>SMGP secures P40 billion financing for BESS projects</h1>
        </div>

        <div className='description-text'>
          <p>
            MANILA, Philippines — San Miguel Global Power Holdings Corp. (SMGP), the energy arm of conglomerate San Miguel Corp., has secured up to P40 billion project financing from local banks to fund the development of its battery energy storage system (BESS) projects.
            <br /><br />
            SMGP, through wholly owned subsidiary Universal Power Solutions Inc. (UPSI), entered into financing agreements with China Banking Corp., Bank of Commerce and BDO Unibank Inc. for a term loan facility of up to P40 billion.
            <br /><br />
            The project financing will be divided into two tranches of up to P28 billion for Tranche A and up to P12 billion for Tranche B.
            <br /><br />
            SMGP said the funding would be used for UPSI’s BESS projects built or to be built across multiple sites across the country.
            <br /><br />
            SMGP, as shareholder of UPSI, has also entered into relevant agreements as sponsor and shares security grantor of its subsidiary in the project financing.
            <br /><br />
            SMGP is eyeing to complete one of the largest integrated battery storage networks in the world – a total of 32 battery storage stations, which will have a combined capacity of 1,000 megawatts.
            <br /><br />
            The company said its BESS projects would allow the safe integration of renewal energy to the national grid.
            <br /><br />
            BESS can be used to bridge the energy security gap by storing excess energy when it is available, and releasing it when demand is high.
            <br /><br />
            “When completed, SMGP expects the BESS business to contribute meaningfully to its revenues,” the company said.
            <br /><br />
            SMGP remained profitable in 2022 despite the rise of coal and other fuel prices to unprecedented levels.
            <br /><br />
            The company posted consolidated revenues of P221.4 billion and EBITDA of P42.32 billion last year, which were both at par with results in prior years.
            <br /><br />
            SMGP has collectively a combined installed capacity of approximately 19 percent of the national grid, 25 percent of the Luzon grid, and seven percent of the Mindanao grid as of end-June.
          </p>
        </div>
      </div>

    </section>
  )
}
