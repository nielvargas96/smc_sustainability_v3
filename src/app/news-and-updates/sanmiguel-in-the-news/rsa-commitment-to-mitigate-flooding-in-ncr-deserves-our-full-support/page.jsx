import React from 'react'
import '../../style.scss'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'San Miguel in the News | News and Updates',
  description: 'Sanmiguel in the News | News and Updates | SMC Sustainability',
}

export default function Page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>RSA’s commitment to mitigate flooding in NCR deserves our full support</h1>
        </div>

        <div className='description-text'>

          <Image src='/news/jesus-lim.png' alt='image' width={800} height={400} />

          <p>
            Dr. Jesus Lim Arranza <br />
            October 11, 2023 <br />
            Access the original article <a href="https://businessmirror.com.ph/2023/10/11/rsas-commitment-to-mitigate-flooding-in-ncr-deserves-our-full-support/#:~:text=RSA's%20commitment%20to%20mitigate%20flooding%20in%20NCR%20deserves%20our%20full%20support,-Dr.&text=Ramon%20Ang's%20San%20Miguel%20Co" target="_blank">here</a>
          </p>

          <p>
            Ramon Ang’s San Miguel Corp. (SMC) has committed to rehabilitate the Pasig River and Tullahan-Tinajeros River system by continuously removing millions of tons of silt and solid waste. In about two years since SMC launched its ambitious P2-billion Pasig River cleanup initiative, the company reported that it already removed over 1.3 million tons of waste from the historic but polluted waterway.
            <br /> <br />
            On the other hand, the company’s efforts to clean up and rehabilitate the 27-kilometer Tullahan-Tinajeros River system will certainly help mitigate flooding in Malabon, Navotas, Valenzuela and other flood-prone areas north of Manila. This is a most welcome help from the private sector that will benefit all residents of the National Capital Region.
            <br /> <br />
            I salute SMC President and CEO Ramon Ang for his undying commitment to rehabilitate the Pasig River and the Tullahan-Tinajeros River system, which will help ease flooding in the metropolis. SMC has already used so much of its resources, both financial and technical, in the dredging and clean-up activities of the two rivers. Let’s not allow this huge effort to go to waste. We can all show our appreciation to SMC’s efforts to mitigate flooding by doing our part as conscientious citizens.
            <br /> <br />
            We know the positive effect of the SMC project in helping solve the NCR’s perennial flooding problem. We know that Mr. Ang is firm in his commitment in this endeavor. But it’s important to emphasize that all Metro Manila residents can help reduce flood risks in the metropolis. We all have a role to play in helping solve this problem. We can all help mitigate the effects of the solid waste problem. But we need to point out that the government agency in charge of solid waste management failed miserably in performing its mandated task.
            <br /> <br />
            To show my appreciation and support to what Mr. Ang is doing, I want to float an idea that I believe can bolster SMC’s efforts to mitigate our flooding problem in Metro Manila. My proposal involves all the local government units in the metropolis to pass a local legislation penalizing those caught in the act of throwing garbage into creeks, rivers and waterways.
            <br /> <br />
            The campaign should involve the citizenry, who are encouraged to take a cell phone photo of the offenders. As there are fines involved, whoever took the photo should be given a corresponding share of the fines collected. This  could help encourage the people living near creeks, rivers and waterways to be more vigilant against violators of the law. If the offender can’t pay the fine involved, he or she should be required to do community service.
            <br /> <br />
            I believe this is a win-win solution that benefits city residents, the community, and the city governments because they need not allocate huge funds for the campaign. In the end, this may not only partly solve the flooding problem in Metro Manila, but it could also galvanize Metro Manila residents to throw their full support behind the campaign against solid waste pollution.
            <br /> <br />
            Imagine if you have millions of citizens helping you unclog the drainage systems of Metro Manila just by using their cell phones! This will definitely complement the SMC initiative to undertake a longer term solution to the flooding problems in Metro Manila. A pre-emptive action to prevent irresponsible community members throwing garbage into the creeks and rivers will help sustain the long term impact of Ramon Ang’s commitment to rehabilitate the historic Pasig River and the Tullahan-Tinajeros River system.
            <br /> <br />
            As I said earlier, Metro Manila residents also have a big role in helping reduce flooding from river systems that run through the metropolis. As we give our support to Mr. Ang’s commendable project, let’s also do our part to truly feel the long-term impact of SMC’s multibillion-peso project to rehabilitate the historic Pasig River and the Tullahan-Tinajeros River system.
            <br /> <br />
            Dr. Jesus Lim Arranza is the chairman of the Federation of Philippine Industries and Fight Illicit Trade; a broad-based, multisectoral movement intended to protect consumers, safeguard government revenues and shield legitimate industries from the ill effects of smuggling.

          </p>

        </div>
      </div>

    </section>
  )
}
