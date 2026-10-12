import { LegalLayout, type TocEntry } from '../components/legal/LegalLayout';
import { A, Callout, Email, H3, Li, P, Section, Strong, Table, Ul, Var } from '../components/legal/Prose';
import { links } from '../lib/links';
import { legal } from './config';

const toc: TocEntry[] = [
  { id: 'who-we-are', title: 'Who we are and scope' },
  { id: 'data-we-collect', title: 'Personal data we collect' },
  { id: 'how-we-use', title: 'How and why we use personal data (legal bases)' },
  { id: 'ai-features', title: 'AI features' },
  { id: 'cookies', title: 'Cookies, local storage and analytics' },
  { id: 'sharing', title: 'How we share personal data' },
  { id: 'transfers', title: 'International data transfers' },
  { id: 'retention', title: 'How long we keep personal data' },
  { id: 'security', title: 'Security' },
  { id: 'rights-eu', title: 'Your rights in the EU, EEA, UK and Switzerland (GDPR)' },
  { id: 'rights-us', title: 'Your rights in the United States (CCPA/CPRA and state laws)' },
  { id: 'children', title: 'Children' },
  { id: 'automated-decisions', title: 'Automated decision-making' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'How to contact us' },
];

export function PrivacyPolicy() {
  const facts = legal;

  return (
    <LegalLayout
      title="Privacy Policy"
      description={`This policy explains what personal data ${facts.productName} collects when you visit our website or use the resume builder, why we collect it, who we share it with, and the rights you have under the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act as amended by the CPRA, and other privacy laws.`}
      toc={toc}
    >
      <Section id="who-we-are" title="1. Who we are and scope">
        <P>
          The service is operated by <Strong><Var value={facts.companyName} /></Strong> (“<Strong>{facts.productName}</Strong>”,
          “we”, “us”), website <A href={facts.websiteUrl}>{facts.websiteHost}</A>. We are the <Strong>data controller</Strong> of
          the personal data described in this policy. You can reach us at <Email value={facts.privacyEmail} />.
        </P>
        <P>
          This policy covers our marketing website, the {facts.productName} web application (the resume builder), and
          the emails we send you (together, the “<Strong>Service</Strong>”). It does not cover third-party websites that we
          link to, or the employers and job boards you choose to send your resume to.
        </P>
        <P>
          EU representative under Art. 27 GDPR: <Var value={facts.euRepresentative} />. UK representative: <Var value={facts.ukRepresentative} />.
        </P>
      </Section>

      <Section id="data-we-collect" title="2. Personal data we collect">
        <H3>Data you give us</H3>
        <Ul>
          <Li><Strong>Account data:</Strong> first name, last name, email address and a password (we only store a cryptographic hash of your password).</Li>
          <Li><Strong>Resume content:</Strong> everything you enter in the builder — contact details, job title, work history, education, skills, languages, projects, certifications, volunteer work, a professional summary and, optionally, a photo. Resume content may include information you consider sensitive (for example a photo that reveals your ethnic origin, or details about religion, health, disability, union membership or nationality). <Strong>You decide what to include.</Strong> We process such information only because you chose to put it in your resume, on the basis of your explicit consent, and solely to produce your resume.</Li>
          <Li><Strong>Billing data:</Strong> your plan, subscription status, renewal dates and the transaction identifiers our payment provider gives us. Card numbers and bank details are entered directly with our payment provider; we never see or store full card numbers.</Li>
          <Li><Strong>Communications:</Strong> the content of support requests, feedback and other messages you send us.</Li>
        </Ul>
        <H3>Data we collect automatically</H3>
        <Ul>
          <Li><Strong>Technical and usage data:</Strong> IP address, browser type and version, device and operating system, language, referring page, pages and features used, timestamps, error reports and similar server log data.</Li>
          <Li><Strong>Analytics data</Strong> on the marketing website, collected through Google Analytics as described in section 5.</Li>
        </Ul>
        <H3>Data from third parties</H3>
        <Ul>
          <Li><Strong>Payment confirmations</Strong> (success, failure, chargeback and refund events) from our payment provider.</Li>
        </Ul>
        <P>We do not buy personal data from data brokers and we do not build advertising profiles about you.</P>
      </Section>

      <Section id="how-we-use" title="3. How and why we use personal data (legal bases)">
        <P>
          Under the GDPR we must have a legal basis for each use of your personal data. The table below lists our purposes
          and the corresponding basis.
        </P>
        <Table
          headers={['Purpose', 'Data used', 'Legal basis (GDPR)']}
          rows={[
            ['Creating and managing your account, signing you in, keeping you signed in', 'Account data, technical data', 'Performance of a contract (Art. 6(1)(b))'],
            ['Building, storing, rendering and letting you download your resumes', 'Resume content, account data', 'Performance of a contract (Art. 6(1)(b)); explicit consent for any sensitive data you include (Art. 9(2)(a))'],
            ['Providing AI suggestions when you ask for them (see section 4)', 'The resume text you submit to the feature', 'Performance of a contract (Art. 6(1)(b))'],
            ['Taking payments, managing subscriptions, issuing invoices, preventing fraud', 'Billing data, account data, technical data', 'Performance of a contract (Art. 6(1)(b)); legal obligation (Art. 6(1)(c)); legitimate interest in preventing fraud (Art. 6(1)(f))'],
            ['Sending service emails (account confirmation, password reset, billing notices, renewal reminders, important changes)', 'Account data, billing data', 'Performance of a contract (Art. 6(1)(b)); legal obligation (Art. 6(1)(c))'],
            ['Sending product news and tips by email', 'Email address, name', 'Consent (Art. 6(1)(a)) — you can unsubscribe at any time via the link in each email'],
            ['Answering support requests', 'Communications, account data', 'Performance of a contract (Art. 6(1)(b)); legitimate interest in providing support (Art. 6(1)(f))'],
            ['Keeping the Service secure, monitoring for abuse, debugging', 'Technical data, server logs', 'Legitimate interest in security and reliability (Art. 6(1)(f))'],
            ['Understanding how the marketing website is used (analytics)', 'Analytics data', 'Consent (Art. 6(1)(a)) where the law requires it for cookies; otherwise legitimate interest in improving the website (Art. 6(1)(f))'],
            ['Complying with law, responding to lawful requests, establishing or defending legal claims', 'Any of the above as relevant', 'Legal obligation (Art. 6(1)(c)); legitimate interest (Art. 6(1)(f))'],
          ]}
        />
        <P>
          Where we rely on legitimate interests we have balanced them against your interests and rights; you can object at any
          time (section 10). Where we rely on consent, you can withdraw it at any time without affecting the lawfulness of
          processing before withdrawal.
        </P>
      </Section>

      <Section id="ai-features" title="4. AI features">
        <P>
          Some features (for example “Generate summary”, bullet-point suggestions and keyword hints) use a third-party AI
          model. When you use them, the relevant text from your resume is sent to our AI provider, which returns a suggestion.
          We do not use your resume content to train models of our own.
        </P>
        <Callout title="Please note">
          Our AI provider processes the submitted text under its own terms. Depending on the provider and plan we use, the
          provider may retain inputs for a limited period for abuse monitoring, and some providers reserve the right to use
          inputs to improve their services. The current provider is listed in section 6. Do not submit information to an AI
          feature that you do not want processed by that provider. AI output is a suggestion only: review it before you rely
          on it.
        </Callout>
      </Section>

      <Section id="cookies" title="5. Cookies, local storage and analytics">
        <H3>Strictly necessary storage</H3>
        <P>
          The resume builder stores your sign-in tokens in your browser’s local storage so that you stay signed in. This storage
          is required for the application to work and is deleted when you sign out.
        </P>
        <H3>Analytics cookies (marketing website)</H3>
        <P>
          Our marketing website uses <Strong>Google Analytics 4</Strong>, provided by Google LLC (USA) and Google Ireland Limited.
          Google Analytics sets the cookies <code className="text-sm">_ga</code> and <code className="text-sm">_ga_&lt;id&gt;</code>
          (lifetime up to 2 years) to distinguish visitors and sessions, and processes your IP address, approximate location, device
          information and the pages you view to produce aggregated statistics for us. Google may use this data for its own purposes as
          described in its <A href="https://policies.google.com/privacy">privacy policy</A>.
        </P>
        <Ul>
          <Li>Where the law requires it (including in the EU, EEA and UK), analytics cookies are set only after you have given your consent, and you can change your choice at any time.</Li>
          <Li>You can also block analytics by installing the <A href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</A> or by blocking cookies in your browser settings.</Li>
          <Li>We honor the <Strong>Global Privacy Control</Strong> (GPC) browser signal as an opt-out where US state law gives it effect.</Li>
        </Ul>
        <P>We do not use advertising cookies, retargeting pixels or social media trackers.</P>
      </Section>

      <Section id="sharing" title="6. How we share personal data">
        <P>
          We share personal data only as described here. <Strong>We do not sell personal data</Strong>, and we do not “share” it for
          cross-context behavioral advertising as those terms are defined in California law.
        </P>
        <H3>Service providers (processors)</H3>
        <P>
          These companies process personal data on our behalf, under contracts that restrict them to our instructions and require
          appropriate security measures:
        </P>
        <Table
          headers={['Provider', 'Purpose', 'Location']}
          rows={facts.processors.map((processor) => [
            <Var key="name" value={processor.name} />,
            processor.purpose,
            <Var key="location" value={processor.location} />,
          ])}
        />
        <H3>Other disclosures</H3>
        <Ul>
          <Li><Strong>At your direction:</Strong> when you download a resume and send it to an employer, or share a link, the recipient receives that content from you, not from us.</Li>
          <Li><Strong>Legal reasons:</Strong> to comply with a law, regulation, court order or lawful request; to enforce our Terms; or to protect the rights, property or safety of {facts.productName}, our users or the public.</Li>
          <Li><Strong>Business transfers:</Strong> if we are involved in a merger, acquisition, financing or sale of assets, personal data may be transferred to the successor, who must honor this policy. We will notify you before your data becomes subject to a different privacy policy.</Li>
        </Ul>
      </Section>

      <Section id="transfers" title="7. International data transfers">
        <P>
          Some of our providers are located outside the European Economic Area, the United Kingdom and Switzerland, including in
          the United States. When we transfer personal data to such countries we rely on one of the following safeguards:
        </P>
        <Ul>
          <Li>an <Strong>adequacy decision</Strong> of the European Commission (or the UK or Swiss equivalent), including the EU–US Data Privacy Framework for US providers certified under it;</Li>
          <Li>the European Commission’s <Strong>Standard Contractual Clauses</Strong> (and the UK International Data Transfer Addendum), together with any supplementary measures that are necessary; or</Li>
          <Li>another transfer mechanism permitted by applicable law.</Li>
        </Ul>
        <P>You can request a copy of the relevant safeguard by contacting us (section 15).</P>
      </Section>

      <Section id="retention" title="8. How long we keep personal data">
        <Ul>
          <Li><Strong>Account data and resumes:</Strong> for as long as your account exists. When you delete your account (or ask us to), we delete your account data, resumes and generated PDFs within {facts.retention.accountAfterDeletion}; copies may persist in encrypted backups for up to {facts.retention.backups} before they are overwritten.</Li>
          <Li><Strong>Billing records:</Strong> {facts.retention.billingRecords}.</Li>
          <Li><Strong>Server logs:</Strong> {facts.retention.serverLogs}, unless needed longer to investigate a security incident.</Li>
          <Li><Strong>Analytics data:</Strong> {facts.retention.analytics}.</Li>
          <Li><Strong>Support communications:</Strong> up to 3 years after the request is closed.</Li>
          <Li><Strong>Legal claims:</Strong> data that is relevant to a dispute is kept until the dispute is resolved and limitation periods have expired.</Li>
        </Ul>
      </Section>

      <Section id="security" title="9. Security">
        <P>
          We protect personal data with technical and organizational measures appropriate to the risk, including encryption in
          transit (TLS), hashed passwords, access controls and logging, isolated rendering of PDFs, regular updates of our software
          and backups. No method of transmission or storage is completely secure; if we become aware of a personal data breach that
          is likely to result in a risk to you, we will notify the competent supervisory authority within 72 hours where the GDPR
          requires it, and inform you without undue delay where the law requires it.
        </P>
      </Section>

      <Section id="rights-eu" title="10. Your rights in the EU, EEA, UK and Switzerland (GDPR)">
        <P>If you are in the EU, EEA, UK or Switzerland, you have the following rights, subject to the conditions set out in the law:</P>
        <Ul>
          <Li><Strong>Access</Strong> — obtain confirmation whether we process your personal data and receive a copy of it.</Li>
          <Li><Strong>Rectification</Strong> — have inaccurate data corrected and incomplete data completed (you can edit most data yourself in the app).</Li>
          <Li><Strong>Erasure</Strong> (“right to be forgotten”) — have your personal data deleted, for example when it is no longer needed or you withdraw consent.</Li>
          <Li><Strong>Restriction</Strong> — have processing limited in certain situations, for example while a dispute about accuracy is resolved.</Li>
          <Li><Strong>Data portability</Strong> — receive the data you provided to us in a structured, commonly used, machine-readable format and have it transmitted to another provider where technically feasible.</Li>
          <Li><Strong>Objection</Strong> — object to processing based on our legitimate interests, and at any time to processing for direct marketing.</Li>
          <Li><Strong>Withdraw consent</Strong> — at any time, where processing is based on consent.</Li>
          <Li><Strong>Complain</Strong> — lodge a complaint with a supervisory authority, in particular in the EU member state of your habitual residence, place of work or place of the alleged infringement (in the UK, the Information Commissioner’s Office; in Switzerland, the FDPIC).</Li>
        </Ul>
        <P>
          To exercise these rights, email <Email value={facts.privacyEmail} /> from the address linked to your account or describe
          your request in enough detail for us to verify your identity. We respond within one month; this period may be extended by
          two further months for complex or numerous requests, in which case we will tell you. Exercising your rights is free of
          charge unless requests are manifestly unfounded or excessive.
        </P>
      </Section>

      <Section id="rights-us" title="11. Your rights in the United States (CCPA/CPRA and state laws)">
        <P>
          This section applies to residents of California and of other US states with comprehensive privacy laws (including
          Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Delaware, Iowa, Nebraska, New Hampshire, New Jersey,
          Tennessee, Minnesota and Maryland), to the extent those laws apply to us.
        </P>
        <H3>Categories of personal information (California)</H3>
        <P>In the preceding 12 months we have collected the following categories of personal information, as defined in Cal. Civ. Code § 1798.140:</P>
        <Table
          headers={['Category', 'Examples', 'Collected from', 'Business purpose']}
          rows={[
            ['Identifiers', 'Name, email address, IP address, account ID', 'You; your device', 'Providing the Service, security, billing'],
            ['Customer records', 'Name, phone number, address and other contact details you enter in a resume', 'You', 'Building your resume'],
            ['Commercial information', 'Plan, subscription status, payment history', 'You; payment provider', 'Billing, support'],
            ['Internet or network activity', 'Pages viewed, features used, browser and device data, log data', 'Your device', 'Security, debugging, analytics'],
            ['Professional or employment-related information', 'Work history, job titles, education, skills, certifications', 'You', 'Building your resume'],
            ['Sensitive personal information', 'Only if you choose to include it in a resume (e.g. a photo, nationality, union membership, health information)', 'You', 'Building your resume, solely at your direction'],
          ]}
        />
        <P>
          We disclose these categories to the service providers listed in section 6 for the business purposes described there.
          <Strong> We do not sell personal information and do not share it for cross-context behavioral advertising</Strong>, and we
          have not done so in the preceding 12 months. We do not use or disclose sensitive personal information for purposes other
          than providing the Service you request, so no “limit the use of my sensitive personal information” option is required. We
          do not knowingly sell or share the personal information of consumers under 16.
        </P>
        <H3>Your rights</H3>
        <Ul>
          <Li><Strong>Know / access:</Strong> the categories and specific pieces of personal information we have collected, the sources, our purposes, and the categories of third parties we disclose it to.</Li>
          <Li><Strong>Delete</Strong> the personal information we have collected from you, subject to legal exceptions.</Li>
          <Li><Strong>Correct</Strong> inaccurate personal information.</Li>
          <Li><Strong>Data portability:</Strong> receive a copy of your data in a portable format.</Li>
          <Li><Strong>Opt out</Strong> of the sale or sharing of personal information and of targeted advertising (we do none of these, and we honor Global Privacy Control signals).</Li>
          <Li><Strong>Non-discrimination:</Strong> we will not deny you the Service, charge a different price or provide a different quality because you exercised your rights.</Li>
          <Li><Strong>Appeal:</Strong> if we refuse a request, residents of states that provide an appeal right may appeal by replying to our decision; we will explain the outcome and, where applicable, how to contact your state Attorney General.</Li>
        </Ul>
        <P>
          Submit requests by email to <Email value={facts.privacyEmail} />. We verify requests by matching the information you provide
          with the information in your account, and may ask for additional confirmation. You may use an authorized agent; we will ask
          the agent for proof of your written permission and may verify your identity directly. We respond within 45 days (extendable
          once by a further 45 days with notice).
        </P>
        <P>
          <Strong>California “Shine the Light”</Strong> (Civ. Code § 1798.83): we do not disclose personal information to third parties for
          their own direct marketing purposes. <Strong>Nevada:</Strong> we do not sell covered information as defined in NRS 603A.
        </P>
      </Section>

      <Section id="children" title="12. Children">
        <P>
          The Service is not directed to children. We do not knowingly collect personal data from anyone under 16 in the EU/EEA/UK or
          under 13 in the United States (or the applicable minimum age in your country). If you believe a child has provided us with
          personal data, contact us and we will delete it.
        </P>
      </Section>

      <Section id="automated-decisions" title="13. Automated decision-making">
        <P>
          We do not make decisions about you based solely on automated processing that produce legal or similarly significant effects.
          AI suggestions are generated on request, are fully editable, and have no effect on your account or on any employer’s decision.
        </P>
      </Section>

      <Section id="changes" title="14. Changes to this policy">
        <P>
          We may update this policy from time to time. We will post the new version here and update the effective date. If the
          changes are material, we will also notify you by email or through a notice in the Service before they take effect. The
          current version is always available at <A href={links.privacy}>this page</A>.
        </P>
      </Section>

      <Section id="contact" title="15. How to contact us">
        <P>
          <Strong><Var value={facts.companyName} /></Strong><br />
          Email: <Email value={facts.privacyEmail} /><br />
          Website: <A href={facts.websiteUrl}>{facts.websiteHost}</A>
        </P>
      </Section>
    </LegalLayout>
  );
}
