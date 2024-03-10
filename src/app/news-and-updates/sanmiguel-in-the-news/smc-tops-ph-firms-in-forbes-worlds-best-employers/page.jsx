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
          <h1>SMC tops PH firms in Forbes&apos; World&apos;s Best Employers&apos; list</h1>
        </div>

        <div className='description-text'>

          <Image src='/news/rsa-forbes-best.png' alt='image' width={490} height={700} />

          <p>
            BY JAMES A. LOYOLA <br />
            November 28, 2023,  03:43 PM <br />
            Access the original article <a href="https://mb.com.ph/2023/11/27/smc-tops-ph-firms-in-forbes-world-s-best-employers-list" target="_blank">here</a>

          </p>

          <p>
            Diversified conglomerate San Miguel Corporation (SMC) climbed 131 spots and surged to number 43 on the annual World&apos;s Best Employers list by Forbes Magazine and research firm Statista.
          </p>

          <p>
            In a statement, SMC said it emerged as the runaway leader among the few Filipino firms that made it to the global ranking. The firm climbed to 43rd place this year from 174 in last year&apos;s ranking, to become the only Philippine firm to make it to the top 50 of the world&apos;s best.
            <br /> <br />
            Other Philippine companies that made it to the elite roster are Security Bank (54th), Metropolitan Bank and Trust Company or Metrobank (162nd), Ayala Corporation (186th), Alliance Global (283rd), Landbank (304th), LT Group (361st), and SM Investments (420th).
            <br /> <br />
            According to Forbes.com, rankings were determined through a survey conducted by market research firm Statista, which covered more than 170,000 employees who work for various multinational companies and institutions from over 50 countries worldwide.
            <br /> <br />
            &apos;It&apos;s a great honor to make it to this list of the world&apos;s 700 best employers, along with some of the most recognized and most successful Philippine firms,&apos; said SMC President and CEO Ramon S. Ang.
            <br /> <br />
            He noted that, &apos;this just goes to show that Filipinos can compete and run proudly with the very best in the world. It also shows that given the right training, motivation, support, and a sense of a higher purpose, the Filipino workforce is highly motivated, effective, dedicated, and therefore fulfilled in their work.&apos;
            <br /> <br />
            &apos;Specific to us in San Miguel, I believe that our strong emphasis on business for nation-building, our core value of malasakit, coupled with our decisive and impactful actions related to greater sustainability, has really resonated with our employees,&apos; added Ang.
            <br /> <br />
            He said &apos;we have also always strived to provide our employees an environment where they can learn, realize their potential, build good relationships with colleagues, and feel they are part of not just a great heritage, but also of something bigger. We believe this has greatly contributed to whatever successes we&apos;ve had over the years.&apos;
            <br /> <br />
            This is the second time that SMC has ranked high in a global business survey this year. In September, it placed in the top 50 percent of Time Magazine&apos;s list of the World&apos;s Best Companies for 2023, ranking 347 overall, and making it to the top two of just six Filipino firms that made it to the list.
            <br /> <br />
            Ang said these favorable rankings signify that San Miguel is still one of the companies that many Filipinos admire and want to work for.
            <br /> <br />
            This is especially relevant as the company aims to create new employment opportunities through its various major projects, including the New Manila International Airport (NMIA)--said to be the single largest investment by a Filipino company, and in the Philippines by far.
            <br /> <br />
            Recently, it renewed a partnership with the Technical Educations and Skills Authority (TESDA), to expand a joint skills training partnership to train more workers for upcoming job opportunities at the NMIA and other major SMC projects nationwide.
            <br /> <br />
            Apart from competitive compensation and benefits, SMC has various programs to help employees hone their skills to advance in their careers and maintain their health and well-being.
            <br /> <br />
            The company also provides employees with opportunities to give back to the community through volunteerism for its various Corporate Social Responsibility (CSR) and Sustainability programs.
            <br /> <br />
            For the Forbes and Statista survey, companies were rated based on criteria including talent development, remote working options, parental leave benefits, diversity, work-life balance, and pride in the product or services that company offers.
            <br /> <br />
            Respondents were also asked if they would recommend their company to family and friends and also rate companies within their own industries and countries.
          </p>

        </div>
      </div>

    </section>
  )
}
