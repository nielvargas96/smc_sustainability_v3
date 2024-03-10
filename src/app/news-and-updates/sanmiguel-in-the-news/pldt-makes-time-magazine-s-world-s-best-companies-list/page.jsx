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
          <h1>PLDT, SMC, Ayala, BDO, Jollibee, Metrobank among world&apos;s best companies </h1>
        </div>

        <div className='description-text'>

          <Image src='/news/pldt-ayala.png' alt='image' width={600} height={350} />

          <p>
            BY JAMES A. LOYOLA <br />
            Sep 16, 2023, 07:24 PM <br />
            Access the original article <a href="https://mb.com.ph/2023/9/16/pldt-makes-time-magazine-s-world-s-best-companies-list " target="_blank">here</a>
          </p>

          <p>
            Six Philippine corporations —PLDT, Ayala Corp., San Miguel Corp., BDO Unibank, Metrobank, Jollibee Foods Corp. — made it to the list of 750 &apos;World&apos;s  Best Companies  2023&apos; by TIME Magazine and analytics partner Statista.
            <br /> <br />
            According to the Time.com, the inaugural list of world&apos;s best companies was based on a formula of revenue growth, employee-satisfaction surveys, and rigorous environmental, social, and corporate governance data.
            <br /> <br />
            Notably, the top four in the list was occupied by American tech companies —  Microsoft, Apple, Alphabet (which owns Google), and Meta Platforms (Facebook).
            <br /> <br />
            &apos;It is a great honor for PLDT to be named one of the world&apos;s best companies, and to be the only Philippine telco on the list,&apos; PLDT and Smart Communications President and CEO Alfredo S. Panlilio said in a statement.
            <br /> <br />
            He noted that, &apos;this recognition affirms our strategic direction and inspires us to continue doing business responsibly, elevating customer experience, achieving operational excellence and new areas of growth, and making our company the best place to work.&apos;
            <br /> <br />
            Panlilio has identified sustainability as one of the key pillars underpinning PLDT&apos;s strategy. The company includes Sustainability in its CEO scorecard, as well as formulated ESG-focused key performance indicators across company units and functions.
            <br /> <br />
            Earlier this year, PLDT released its 2022 Sustainability Report that aligns with the Global Reporting Initiative framework.
            <br /> <br />
            The company is also a Registered Participant to the United Nations Global Compact, signifying commitment to uphold principles of human rights, labor, environment, and anti-corruption in the conduct of its business.
            <br /> <br />
            PLDT also announced a decarbonization roadmap that targets a 40 percent reduction of Scope 1 and Scope 2 greenhouse gas emissions by 2030, coming from a 2019 baseline.
            <br /> <br />
            The company benchmarks with CDP for climate reporting standards and is a pioneering supporter of the Task Force for Climate-related Financial Disclosures in the Philippines.
            <br /> <br />
            Fostering a dynamic and optimal approach to decision-making and governance, PLDT upholds a board diversity policy that encompasses its board of directors with different backgrounds.
            <br /> <br />
            On the revenue growth criteria, PLDT has consistently demonstrated an upward trend in revenues since 2020. In 2022, the company generated over 205 billion pesos in total revenues, equivalent to a 6% increase versus the previous year.
            <br /> <br />
            PLDT also embarked on an organizational transformation journey in support of its aspiration to become a company that employees love to work for.
            <br /> <br />
            The company follows a roadmap of initiatives designed to cultivate talent and maximize the potential of its employees, build a purpose-driven culture, and promote new ways of working.
            <br /> <br />
            In July 2023, PLDT was named as the Philippines&apos; most valuable brand at $2.6 billion based on an independent study by Brand Finance, a London-based business valuation and strategy consulting firm.
            <br /> <br />
            In the same report, the company was also cited to have the highest Sustainability Perceptions Value among all listed brands at $222 million.
          </p>
        </div>
      </div>

    </section>
  )
}
