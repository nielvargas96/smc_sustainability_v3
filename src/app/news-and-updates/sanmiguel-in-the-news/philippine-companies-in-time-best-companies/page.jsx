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
          <h1>These Six Philippine Companies Make It to TIME&apos;s 750 Best Companies of 2023</h1>
        </div>

        <div className='description-text'>

          <Image src='/news/time-best-comp.png' alt='image' width={800} height={400} />


          <p>
            By: Micah Avry Guiao <br />
            Published Sep 18, 2023 <br />
            Access the original article <a href="https://www.spot.ph/newsfeatures/adulting/106382/philippine-companies-in-time-best-companies-of-2023-a5229-20230918 " target="_blank">here</a>
          </p>

          <p>
            (SPOT.ph) TIME Magazine has recently released its 750 World&apos;s Best Companies of 2023—and six Philippine companies are part of it.
            <br /> <br />
            Ayala Corporation, San Miguel Corporation, Jollibee Foods Corporation, PLDT, Metrobank, and BDO Unibank have been recognized by TIME as key players who hold significant influence in the global economic landscape. The evaluation was rooted in three factors: employee satisfaction, revenue growth, and sustainability.
            <br /> <br />
            Conglomerate Ayala Corporation is the best-ranked Philippine company at the 309th spot with an overall score of 83.66%. Not far behind was San Miguel Corporation, which secured its position at the 347th spot with an overall score of 83.08%.
            <br /> <br />
            Of the six Philippine companies, PLDT had the highest sustainability rank at 454th place, while Jollibee Foods Corporation had the highest employee satisfaction rank at 57th place.
            <br /> <br />
            World&apos;s Best Companies of 2023 by TIME Magazine
            <br /> <br />
            Evaluating employee satisfaction was based on international surveys conducted in 58 countries with approximately 150,000 participants. These surveys considered a range of factors, including working conditions and salary structures.
            <br /> <br />
            The second and third factor was based on existing data from Statista. Revenue growth required companies to showcase growth trajectories over the past three years, while sustainability was gauged through environmental, social, and corporate governance (ESG) parameters.
            <br /> <br />
            Here&apos;s how these Philippine companies fared in ranking:
            <br /> <br />
            Ayala Corporation (Conglomerate)
            <br /> <br />
            - Rank – 309<br />
            - Overall score – 83.66%<br />
            - Sustainability rank – 535<br />
            - Employee satisfaction rank – 73<br />
            - Growth rate – Moderate

            <br /> <br />
            San Miguel Corporation (Food & Beverages)<br />

            - Rank – 347<br />
            - Overall score – 83.08%<br />
            -  Sustainability rank – 712<br />
            - Employee satisfaction rank – 67<br />
            -  Growth rate – Very High

            <br /> <br />
            Jollibee Foods Corporation (Food & Beverages)<br />

            - Rank – 421 <br />
            - Overall score – 81.94%<br />
            - Sustainability rank – 683<br />
            - Employee satisfaction rank – 57<br />
            - Growth rate – High<br />

            <br /><br />
            PLDT (Telecommunications Services)<br />
            <br />
            - Rank – 609<br />
            - Overall score – 78.71%<br />
            -  Sustainability rank – 454<br />
            - Employee satisfaction rank – 317<br />
            - Growth rate – Moderate<br />
            <br /><br />
            Metropolitan Bank & Trust Company (Banking & Financial Services)<br />

            - Rank – 634<br />
            -  Overall score – 78.12%<br />
            - Sustainability rank – 731<br />
            -  Employee satisfaction rank – 116<br />
            -  Growth rate – High<br />
            <br /><br />
            BDO Unibank (Banking & Financial Services)<br />
            <br />
            -  Rank – 647<br />
            -  Overall score – 77.85%<br />
            -   Sustainability rank – 615<br />
            -  Employee satisfaction rank – 173<br />
            -  Growth rate – Moderate<br />
            <br /><br />
            Tech giants Microsoft, Apple, Alphabet (Google&apos;s parent company), and Meta Platforms (Facebook&apos;s parent company), made the top four of the list with overall scores above 94%, with TIME noting that they did well because of significantly less carbon emissions compared to other industry counterparts.
          </p>
        </div>
      </div>

    </section>
  )
}
