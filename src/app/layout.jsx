import './globals.scss';
import { SmoothScrollProvider } from '@/components/common/SmoothScroll';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import Loading from './loading';
import { ModalProvider } from '@/components/modal/modalContext';
import Modal from '@/components/modal/modal';
import SubsidiaryModal from '@/components/modal/subsidiaryModal';
import { SubsidiaryModalProvider } from '@/components/modal/subsidiaryContext'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
      <meta property="og:title" content="SMC Sustainability" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="San Miguel Corporation - Sustainability Website" />

      {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://ik.imagekit.io/ fonts.googleapis.com fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://localhost:3000/_next/static/chunks/;" /> */}
      {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https://ik.imagekit.io/; font-src 'self https://fonts.googleapis.com/ https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://localhost:3000/_next/static/chunks/; style-src 'self' https://localhost:3000/_next/static/css/**;" /> */}

      {/* <meta
        httpEquiv="Content-Security-Policy"
        content={`
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' https://ik.imagekit.io blob: data:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://smc-sustainability.c3-interactive.ph https://sxrtmwec.forapprovalonly.net/sustainability https://sxrtmwec.forapprovalonly.net;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              block-all-mixed-content;
              upgrade-insecure-requests;
              media-src 'self' https://smc-sustainability.c3-interactive.ph https://sxrtmwec.forapprovalonly.net/sustainability https://sxrtmwec.forapprovalonly.net;
            `}
      />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
 */}

      <body>
        <div className='app'>
          <ModalProvider>
            <SubsidiaryModalProvider>
              <Header />
              <SmoothScrollProvider>
                <main className='main'>
                  <Suspense>
                    {children}
                    <ScrollToTop />
                    <Loading />
                  </Suspense>
                </main>
              </SmoothScrollProvider>
              <Footer />
              <Modal />
              <SubsidiaryModal />
            </SubsidiaryModalProvider>
          </ModalProvider>
        </div>
      </body>
    </html >
  )
}

