import Blueprint from './components/blueprint'
// import './page.scss'
import Hero from './components/hero'
import Rsa from './components/rsa'
import Sustainability from './components/sustainbility'
import Targets from './components/targets'
import Glance from './components/glance'
import AnnualReport from './components/annualReport'


export default function Index() {
  return (
    <>
      <Hero />
      <Rsa />
      <Blueprint />
      <Sustainability />
      <Targets />
      <Glance />
      <AnnualReport />
    </>
  )
}
