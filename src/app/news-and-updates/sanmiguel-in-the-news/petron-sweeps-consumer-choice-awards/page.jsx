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
          <h1>Petron sweeps consumer choice awards</h1>
        </div>

        <div className='description-text'>
          <p>
            Every year, international brand research firm Standard Insights ranks the best products and services according to market perception in their Consumer Choice Awards.
            <br /><br />
            And in the petroleum sector, the awards for the retail oil and gas segment are closely watched. And this year, Filipino consumers spoke with unanimity on which petroleum firm is the country’s best.
            <br /><br />
            According to Standard Insights, Petron is the best in the country with a 45.7-percent rating, beating Pilipinas Shell’s 31 percent.
            <br /><br />
            “Petron has secured the title of best overall retail oil and gas brand in the Philippines by a resounding margin, cementing its position as the preferred choice of consumers,” the firm said.
            <br /><br />
            In terms of price and affordability, Petron also emerged on top, double the score of Shell.
            <br /><br />
            “For those budget-conscious consumers seeking affordable yet high quality fuel options, Petron (303.3 percent) has been voted as the most affordable retail oil and gas brand in the country,” it said.
            <br /><br />
            Note, of course, that this rating comes even if Petron diligently pays its taxes, compared to other fuel retailers who can offer lower pump prices by dodging government import levies.
            <br /><br />
            In terms of accessibility, Standard Insights said Petron was the runaway winner with a rating of 53.6 percent versus Shell’s 27.3 percent – naturally because the petroleum unit of San Miguel Corp. has the biggest gas station network in the country.
            <br /><br />
            Petron also emerged on top in terms of sustainability and environmental friendliness; and branding and marketing.
            <br /><br />
            Other petroleum firms in the survey were Caltex Philippines, Seaoil,  Flying V, Clean Fuel, Unioil, Total, Phoenix, PTT, Petro Gazz and FlexFuel.

          </p>
        </div>
      </div>

    </section>
  )
}
