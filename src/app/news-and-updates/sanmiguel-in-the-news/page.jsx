import React from 'react'
import '../style.scss'
import NewsBanner from './banner'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'San Miguel in the News | News and Updates',
  description: 'Sanmiguel in the News | News and Updates | SMC Sustainability',
}

// STATIC pages  - Ms .Joie 
// It should be dynamic ikaw na bahala - Niel

export default function page() {
  return (
    <section className="news-update-container">

      <div className="block-content">
        <div className="news-title">
          <h1>San Miguel in the News</h1>
        </div>

        {/* <NewsBanner /> */}

        <div className="news-tabs-container">
          <div className="tabs">
            <div className="btn-tab active"><span>All</span></div>
            {/* <div className="btn-tab"><span>2023</span></div>  */}
          </div>
        </div>

        <div className="tabs-content">

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>
            <div className="description-container">
              <p>November 06, 2023</p>
              <h5>Shared prosperity: What CEOs should do</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/shared-prosperity-what-ceos-should-do" title="Read More">Read More</Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>November 28, 2023</p>
              <h5>Sharing prosperity</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/shared-prosperity" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>November 10, 2023</p>
              <h5>SMC tops PH firms in Forbes&apos; World&apos;s Best Employers&apos; list</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/smc-tops-ph-firms-in-forbes-worlds-best-employers" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>November 8, 2023</p>
              <h5>BOTEful Batanes: Where Every Bottle Counts GINEBRA para sa Kalikasan</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/boteful-batanes-where-every-bottle-counts" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 17, 2023</p>
              <h5>Gov Pineda thanks SMC for &apos;desilting project&apos; in Pampanga River</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/gov-pineda-thanks-smc-for-desilting-project-in-pampanga-river" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 14, 2023</p>
              <h5>Better world community centers for a better PH</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/better-world-community-centers-for-a-better-ph" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 2, 2023</p>
              <h5>SMC opens its biggest community center near Smokey Mountain</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/smc-opens-its-biggest-community-center-near-smokey-mountain"
                title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 11, 2023</p>
              <h5>RSA&apos;s commitment to mitigate flooding in NCR deserves our full support</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/rsa-commitment-to-mitigate-flooding-in-ncr-deserves-our-full-support" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 11, 2023</p>
              <h5>Mindanao cassava growers given direct market</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/mindanao-cassava-growers-given-direct-market" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>September 22, 2023</p>
              <h5>Pasig River&apos;s fish renaissance: Ramon Ang&apos;s resolute mission</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/pasig-rivers-fish-renaissance-ramon-angs-resolute-mission" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>November 28, 2023</p>
              <h5>These Six Philippine Companies Make It to TIME&apos;s 750 Best Companies of 2023</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/philippine-companies-in-time-best-companies" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>September 16, 2023</p>
              <h5>PLDT, SMC, Ayala, BDO, Jollibee, Metrobank among world&apos;s best companies</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/pldt-makes-time-magazine-s-world-s-best-companies-list" title="Read More">
                Read More
              </Link>
            </div>
          </div>

          <div className="tab-item">
            <div className="image-container">
              <Image src="smc_placeholder.png" height={188} width={184} alt="News and Update" />
            </div>

            <div className="description-container">
              <p>October 22, 2023</p>
              <h5>San Miguel expands bid to clean up, rehabilitate major Luzon rivers</h5>
              <Link href="/news-and-updates/sanmiguel-in-the-news/san-miguel-expands-bid-to-clean-up-rehabilitate-major-luzon-rivers" title="Read More">
                Read More
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
