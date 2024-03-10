import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Business Ethics and Compliance',
  description: 'Business Ethics and Compliance | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Business Ethics and Compliance</h1>

            <p>San Miguel Corporation stands firm in its
              commitment to the highest standards of
              integrity, fairness, and honesty in all of its
              business affairs. Upholding these principles
              is not just a matter of good practice, but a
              fundamental pillar of the Company’s success.
              We believe that to build a truly sustainable
              enterprise, a culture of good governance
              must permeate throughout all levels of the
              organization. Thus, we have implemented
              policies and programs that promote ethical
              business practices. At the heart of our efforts
              is our Manual on Corporate Governance,
              which serves as a comprehensive guide
              to implementing and institutionalizing the
              principles of good governance throughout the
              entire San Miguel Group.</p>

            <p>Pursuant to this, we also established a
              Corporate Governance Committee, which is
              responsible for overseeing the implementation
              of our corporate governance framework,
              ensuring that the policies and procedures
              remain relevant, and periodically evaluating
              the performance of the Board and executive
              management.</p>

            <Image src="/page/ANTI_CORRUPTION.png" width={445} height={215} alt='Anti Corruption' />


            <p>
              Our dedication to good governance is further
              evidenced by the requirement that the Board
              of Directors and key officers attend continuing
              training on corporate governance, including
              courses on developments in business and
              regulatory environments and emerging
              risks relevant to the Company. First-time
              Directors receive orientation on their duties
              and responsibilities, covering SEC-mandated
              topics on corporate governance, and an
              introduction to the Company’s business, Articles
              of Incorporation, and Code of Business Conduct
              and Ethics.
            </p>

            <p>Our Code of Ethics and Conduct reflects our
              unwavering commitment to ethical business
              practices, fair dealings, respect for trade
              secrets and confidential information, and the
              responsible use of Company funds and assets.
              Our Compliance Officer ensures that the
              Code of Ethics is properly disseminated to all
              directors, senior management, and employees.
              Furthermore, all employees are provided with
              a copy of the SMC Employee Handbook and are
              required to acknowledge receipt of the same.
              By acknowledging, employees state that they
              understood its contents and commit themselves
              to comply with the items contained therein,
              including SMC’s core purpose and values and
              the policies governing the Company’s activities.
            </p>

            <p>We also have policies in place to promote
              proper business conduct. Our Whistle-blowing
              Policy encourages our employees, suppliers,
              and other stakeholders to report any suspected
              wrongdoing within the organization. This
              policy protects informing employees and
              others from retribution or retaliation by
              ensuring confidentiality. All bona fide cases
              are investigated, and if necessary, audited.
              Critical concerns are communicated through the
              proper channels, and if they are related to anticorruption, then they are referred to the Audit
              Committee of the Board.</p>

            <h3 className='blue'>Under our No Gifts Policy,
              we ask our employees not
              to accept personal favors
              or gifts from individuals
              or entities doing
              business with the Group,
              including in matters of
              hiring and awarding of
              contracts. Transactions
              with the government
              and regulators are
              done with the highest
              level of transparency
              to foster trust with our
              stakeholders.</h3>


            <p>We have a Conflict of Interest Policy that
              requires all directors, officers, and employees to
              disclose any potential conflicts of interest. The
              expectation is that employees’ actions are made
              in the best interest of the Group. </p>

            <p>Under our No Gifts Policy, we ask our
              employees not to accept personal favors or gifts
              from individuals or entities doing business with
              the Group, including in matters of hiring and
              awarding of contracts. Transactions with the
              government and regulators are done with the
              highest level of transparency to foster trust with
              our stakeholders.</p>

            <p>Furthermore, we prioritize the protection of
              sensitive information through our Information
              Security Management System. By carefully
              classifying and managing information, we are
              able to protect data against theft, cyberattacks,
              and other forms of malicious activity. At the
              same time, we recognize the importance
              of transparency and collaboration with our
              stakeholders, and we classify information as
              public to ensure that the right people have
              access to the right information.
            </p>

            <p>At San Miguel, our dedication to good corporate
              governance is not just a matter of good practice
              — it is a fundamental pillar of our success.
              Our efforts to promote responsible and ethical
              business conduct, through our policies and
              training programs, serve as a testament to our
              commitment to excellence in all aspects of our
              business operations.</p>

            <p>In 2022, there were zero reported incidents of
              corruption in the Group. Moreover, there were
              no legal actions regarding anti-competitive
              behavior and violations of antitrust and
              monopoly legislation that were pending or
              completed during the period.</p>

            <p>Our Manual on Corporate Governance, Code of
              Ethics and Conduct, and other policies are
              found on SMC’s company website at https://
              www. sanmiguel.com.ph/page/company-policy.</p>

            <Image src="/page/LEGAL_ACTIONS.png" width={437} height={256} alt='Anti Corruption' />

          </section>
        </article>
      </div>
    </section>
  )
}
