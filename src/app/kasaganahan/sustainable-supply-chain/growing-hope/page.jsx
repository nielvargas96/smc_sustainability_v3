import Image from 'next/image'
import React from 'react'
import { storiesSustainableSupplyChain } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Growing Hope',
  description: 'Growing Hope | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1 className='blue'>Growing Hope</h1>

            <Image style={{ borderRadius: '25px' }} src="/page/samuel_lago_farmer.png" width={438} height={516} alt='Samuel lago' />


            <p>
              <small><b><i>“Ako po ay dating OFW sa Saudi,
                nagsumikap po akong makabili
                ng sariling lupa. Nang nakaipon,
                nagdesisyon akong umuwi at
                makasama na ang aking pamilya.”</i></b>
              </small>
            </p>

            <p>
              <i>
                “Noong 1996, ako nagsimulang magtanim. Simula
                noon, naranasan ko na ang iba’t-ibang suliranin
                sa pagsasaka, katulad ng madalas na pagbagyo,
                mga insekto sa pananim, kakulangan sa imbakan
                or storage, pagpapatuyuan ng mais, madalasang
                pagbabago ng teknolohiya sa pagtatanim, mataas na
                gastusin sa pananim, mahirap na daanang farm to
                market roads, at ang hirap sa pakikipagtransaksyon
                sa mga buyers na madalas pang manipulahin ang
                presyo at timbang na kulang pa na pangpuhunan at
                kapital. Sa pag-asam ko na mapaunlad ang aking
                mga kagamitan sa pagsasaka nagkaroon ako ng mga
                utang na naging dahilan upang makontrol na ng aming
                pinagkakautangan or financier ang mga binebenta
                naming mais. Sa mababang halaga na lamang naming
                ito naibebenta at minsan pa kahit konting dumi lamang
                ay mas lalo pang binababaan pa ang presyuhan sa
                amin.
              </i>
            </p>

            <p>
              <i>
                Naging iba ang ihip ng hangin ng makausap ko at
                makilala ang isang tauhan ng B-MEG na nagpaliwanag
                sa akin ng programang ito. Hindi ako makapaniwala
                dahil bilang isang simpleng magsasaka hindi ko maisip
                na makakapagsupply ako sa pangarap kong kumpanya
                (SMC). Ako’y nagagalak dahil sa 25 years kong
                pagsasaka ay makararanas na din ang aking pamilya
                ng kapanatagan at kaginhawaan.
              </i>
            </p>

            <p>
              <i>
                Marami pang magandang naidulot sa aming
                mga farmers ang pakikipag-ugnayan at
                pakikipagtransaksyon sa San Miguel Foods/B-MEG.
                Una po rito ang kasiguraduhan ng presyo ng mais.
                Kampante po ako na hindi magkakaroon ng iregular or
                biglang pagbaba ng presyo ng aking mais. Pangalawa,
                ang maayos at tamang pagtitimbang at pagsusuri ng
                kalidad ng aming mga mais. Pangatlo po ang mabilis
                na transaksyon at pag-galaw ng aming mga mais.
              </i>
            </p>

            <p>
              <i>
                At ang panghuli, bilang isang farmer dinanas
                naming madalas mabaon sa utang at mabigyan ng di
                makatarungang pagpresyo sa aming mga mais. Ngunit
                dahil sa B-MEG nagkaroon kami ng kapanatagan ng
                isip at motibasyon na ipagpatuloy ang pagtatanim.
              </i>
            </p>

            <p>
              <i>
                Sana po ipagpatuloy ninyong suportahan ang maliliit
                na farmers na katulad namin. Maraming salamat.”
              </i>
            </p>

            <Slider storiesItem={storiesSustainableSupplyChain} />
          </section>
        </article>
      </div>
    </section>
  )
}
