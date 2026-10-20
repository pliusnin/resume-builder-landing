import { LegalLayout, type TocEntry } from '../components/legal/LegalLayout';
import { A, Callout, Email, H3, Li, P, Section, Strong, Ul, Var } from '../components/legal/Prose';
import { links } from '../lib/links';
import { legal } from './config';

const toc: TocEntry[] = [
  { id: 'agreement', title: 'Agreement and who we are' },
  { id: 'eligibility', title: 'Eligibility and accounts' },
  { id: 'service', title: 'The Service and what it is not' },
  { id: 'subscriptions', title: 'Subscriptions, prices and automatic renewal' },
  { id: 'cancellation', title: 'Cancellation, withdrawal and refunds' },
  { id: 'your-content', title: 'Your content' },
  { id: 'ai', title: 'AI-generated suggestions' },
  { id: 'acceptable-use', title: 'Acceptable use' },
  { id: 'ip', title: 'Intellectual property and licence' },
  { id: 'availability', title: 'Availability, changes and conformity' },
  { id: 'termination', title: 'Suspension and termination' },
  { id: 'warranties', title: 'Warranties and disclaimers' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'law', title: 'Governing law and disputes' },
  { id: 'changes', title: 'Changes to these Terms' },
  { id: 'general', title: 'General provisions' },
  { id: 'contact', title: 'Contact' },
];

export function TermsOfService() {
  const { pricing } = legal;

  return (
    <LegalLayout
      title="Terms of Service"
      description={`These Terms govern your access to and use of ${legal.productName}. They include important information about automatic subscription renewal, cancellation, what you may expect from the Service, and your rights as a consumer.`}
      toc={toc}
    >
      <Section id="agreement" title="1. Agreement and who we are">
        <P>
          These Terms of Service (“<Strong>Terms</Strong>”) are a legally binding agreement between you and{' '}
          <Strong><Var value={legal.companyName} /></Strong> (“<Strong>{legal.productName}</Strong>”, “we”, “us”), reachable at{' '}
          <Email value={legal.contactEmail} />. They apply to the {legal.productName} website ({legal.websiteHost}), web application,
          templates, PDF export, AI features and related services (the “<Strong>Service</Strong>”).
        </P>
        <P>
          By creating an account, placing an order or using the Service you accept these Terms, our{' '}
          <A href={links.privacy}>Privacy Policy</A> and our <A href={links.refund}>Refund Policy</A>, which form part of these
          Terms. If you do not agree, do not use the Service.
        </P>
        <P>
          If you use the Service for purposes that are mainly outside your trade, business, craft or profession, you are a{' '}
          <Strong>consumer</Strong>. Nothing in these Terms limits rights that consumers have under mandatory law in their country
          of residence, including the EU Consumer Rights Directive, the EU Digital Content and Digital Services Directive, the UK
          Consumer Rights Act 2015 and US federal and state consumer protection laws. Where these Terms conflict with such rights,
          the law prevails.
        </P>
      </Section>

      <Section id="eligibility" title="2. Eligibility and accounts">
        <Ul>
          <Li>You must be at least 18 years old, or the age of majority where you live, to create an account.</Li>
          <Li>You must provide accurate information and keep it up to date. One person may hold one account; accounts are personal and may not be shared or transferred.</Li>
          <Li>You are responsible for keeping your password confidential and for all activity under your account. Tell us promptly at <Email value={legal.contactEmail} /> if you suspect unauthorized use.</Li>
          <Li>If you use the Service on behalf of a company, you confirm that you are authorized to bind it to these Terms.</Li>
        </Ul>
      </Section>

      <Section id="service" title="3. The Service and what it is not">
        <P>
          {legal.productName} lets you enter your professional information, choose a template, generate a resume as a PDF file
          and, where available, receive AI-assisted suggestions for wording and keywords. Our templates are designed to be
          readable by common applicant tracking systems (“ATS”).
        </P>
        <Callout title="No guarantee of outcomes">
          We do not provide career, legal, immigration or employment advice, and we are not a recruiter or employment agency.
          We cannot and do not guarantee that any employer will read, accept or respond to your resume, that any particular
          ATS will parse it in a specific way, or that you will obtain interviews or a job. Marketing statements about
          “ATS scores”, pass rates or interview rates describe typical experiences and are not promises about your results.
          You are solely responsible for the accuracy, completeness and truthfulness of the information in your resume.
        </Callout>
      </Section>

      <Section id="subscriptions" title="4. Subscriptions, prices and automatic renewal">
        <P>
          Creating an account and building a resume is free. <Strong>Downloading resumes as PDF requires a paid subscription.</Strong>{' '}
          Prices are shown in {pricing.currency} and, unless stated otherwise at checkout, exclude VAT, sales tax or other taxes,
          which are added where applicable.
        </P>
        <H3>Plans</H3>
        <Ul>
          <Li><Strong>Monthly plan:</Strong> a discounted first month for {pricing.introPrice}, followed by {pricing.monthlyPrice} per month.</Li>
          <Li><Strong>Quarterly plan:</Strong> {pricing.quarterlyPrice} every 90 days.</Li>
          <Li><Strong>Annual plan:</Strong> {pricing.annualPrice} every 12 months.</Li>
        </Ul>
        <Callout title="Automatic renewal — please read">
          <Ul>
            <Li>Your subscription <Strong>renews automatically</Strong> at the end of each billing period (for the monthly plan, including the discounted first month) for a further period of the same length, at the then-current price for your plan, until you cancel.</Li>
            <Li>We charge the payment method on file on the first day of each new period. The introductory price applies once per customer.</Li>
            <Li>You can <Strong>cancel at any time</Strong> from the Billing page in your account or by emailing <Email value={legal.contactEmail} />. Cancellation stops future charges; you keep access until the end of the period you have already paid for. To avoid being charged the standard monthly price, cancel before the discounted first month ends.</Li>
            <Li>For quarterly and annual plans we send a reminder email before the renewal date, and in any case where the law requires it.</Li>
          </Ul>
        </Callout>
        <H3>Price changes</H3>
        <P>
          We may change prices for future billing periods. We will notify you by email at least 30 days before a price change
          takes effect for you. If you do not agree with the new price, you may cancel before it applies; continuing to use the
          Service after the effective date means you accept the new price. Price changes never apply retroactively to a period you
          have already paid for.
        </P>
        <H3>Failed payments</H3>
        <P>
          If a payment fails we may retry it and will notify you. If payment is not received within a reasonable time, we may
          downgrade your account to the free features (which stops PDF downloads) until payment is made. Your resumes are kept
          in accordance with our Privacy Policy.
        </P>
      </Section>

      <Section id="cancellation" title="5. Cancellation, withdrawal and refunds">
        <P>
          You may cancel your subscription at any time as described above. Our <A href={links.refund}>Refund Policy</A> explains when
          you are entitled to a refund, including our {legal.moneyBackDays}-day money-back guarantee on every payment and the
          statutory 14-day right of withdrawal for consumers in the EU, EEA and UK.
        </P>
        <P>
          <Strong>Immediate performance (EU/EEA/UK consumers):</Strong> when you subscribe you expressly request that we start providing
          the Service immediately, during the withdrawal period, and you acknowledge that if you later withdraw you will pay a
          proportionate amount for the Service used until you told us you were withdrawing — except that our money-back guarantee
          gives you a full refund if you request it within {legal.moneyBackDays} days of the payment. See the Refund Policy for details
          and a model withdrawal form.
        </P>
      </Section>

      <Section id="your-content" title="6. Your content">
        <Ul>
          <Li><Strong>You own your content.</Strong> Everything you enter into the Service (your resume data, photo and text) and the resumes we generate from it remain yours.</Li>
          <Li>You grant us a worldwide, non-exclusive, royalty-free licence to host, store, copy, process, render and transmit your content <Strong>solely to operate, secure and improve the Service for you</Strong> (for example to render your PDF, to show it to you, and to send excerpts to an AI provider when you use an AI feature). This licence ends when you delete the content or your account, except for backup copies kept as described in the Privacy Policy and content we must keep by law.</Li>
          <Li>You confirm that you have the right to use everything you upload (including any photo) and that your content does not infringe anyone’s rights, is not unlawful, and does not contain malware.</Li>
          <Li>We do not use your content to train AI models of our own, and we do not sell or share it with employers, recruiters or advertisers.</Li>
          <Li>Please keep your own copies of your resumes. We do not guarantee indefinite storage, and content is deleted when you delete it or your account.</Li>
        </Ul>
      </Section>

      <Section id="ai" title="7. AI-generated suggestions">
        <P>
          AI features generate text with a third-party large language model based on the information you provide. AI output can
          be inaccurate, incomplete, generic or inappropriate for your situation. <Strong>Review and edit every suggestion before
          using it, and never include claims that are not true.</Strong> You are responsible for the final content of your resume.
          The text you submit to an AI feature is processed by our AI provider as described in the{' '}
          <A href={`${links.privacy}#ai-features`}>Privacy Policy</A>.
        </P>
      </Section>

      <Section id="acceptable-use" title="8. Acceptable use">
        <P>You agree not to:</P>
        <Ul>
          <Li>use the Service for any unlawful purpose, or to create content that is defamatory, fraudulent, discriminatory, harassing or that infringes third-party rights;</Li>
          <Li>impersonate another person or misrepresent your qualifications in a way that violates the law;</Li>
          <Li>access the Service by automated means (bots, scrapers), probe or test its vulnerabilities, or interfere with its operation or security;</Li>
          <Li>reverse engineer, copy, resell, sublicense or redistribute the Service, our templates or any part of them, except as permitted by mandatory law;</Li>
          <Li>circumvent payment, abuse free features, trial pricing or refund rules (for example by creating multiple accounts), or share one subscription between several people;</Li>
          <Li>submit excessive or abusive requests to AI features, or attempt to extract the underlying models or prompts.</Li>
        </Ul>
        <P>We may investigate violations and take appropriate action, including removing content and suspending or terminating accounts (section 11).</P>
      </Section>

      <Section id="ip" title="9. Intellectual property and licence">
        <P>
          The Service, including its software, design, templates, text, graphics and trademarks, is owned by us or our licensors
          and is protected by copyright, trademark and other laws. We grant you a limited, personal, non-exclusive, non-transferable,
          revocable licence to use the Service in accordance with these Terms.
        </P>
        <P>
          <Strong>Resumes you generate are yours to use</Strong> for job applications and any other personal or professional purpose,
          without restriction. You may not, however, extract our templates to offer resume services to others or to build a
          competing product.
        </P>
        <P>If you send us feedback or suggestions, we may use them without obligation to you.</P>
      </Section>

      <Section id="availability" title="10. Availability, changes and conformity">
        <Ul>
          <Li>We aim to keep the Service available at all times but cannot guarantee uninterrupted availability. We may need to interrupt it for maintenance, security or technical reasons and will try to keep interruptions short and, where practical, announced.</Li>
          <Li>We continuously improve the Service and may add, change or remove features. We will not materially reduce the core functionality you have paid for during a paid period without offering you the right to terminate and receive a pro-rated refund.</Li>
          <Li><Strong>Consumers in the EU/EEA:</Strong> we are liable for any lack of conformity of the digital service as required by the Digital Content and Digital Services Directive (EU) 2019/770 as implemented in your country. If the Service does not conform, you may be entitled to have it brought into conformity, to a proportionate price reduction or to terminate the contract. We will provide updates, including security updates, that are necessary to keep the Service in conformity during your subscription.</Li>
        </Ul>
      </Section>

      <Section id="termination" title="11. Suspension and termination">
        <Ul>
          <Li><Strong>By you:</Strong> you can stop using the Service at any time and delete your account from the account settings or by emailing <Email value={legal.contactEmail} />. Deleting your account ends your subscription; see the Refund Policy for whether any amount is refundable.</Li>
          <Li><Strong>By us:</Strong> we may suspend or terminate your access, with notice where reasonably possible, if you materially breach these Terms, if required by law, if your payment is overdue, or if your use creates risk or legal exposure for us. Where the breach can be remedied we will give you a reasonable opportunity to do so before terminating. We may also discontinue the Service as a whole with at least 30 days’ notice, in which case we refund any prepaid fees for the period after discontinuation.</Li>
          <Li><Strong>Effect:</Strong> on termination your right to use the Service ends and your content is deleted as described in the Privacy Policy. Download your PDFs before closing your account. Sections that by their nature should survive (including 6, 9, 12, 13, 14 and 16) continue to apply.</Li>
        </Ul>
      </Section>

      <Section id="warranties" title="12. Warranties and disclaimers">
        <P>
          <Strong>Consumers:</Strong> you have statutory rights regarding the conformity and quality of digital services, and nothing in this
          section limits them.
        </P>
        <P>
          To the extent permitted by applicable law and except as expressly stated in these Terms, the Service is provided “as is”
          and “as available”, and we disclaim all other warranties, express or implied, including implied warranties of
          merchantability, fitness for a particular purpose and non-infringement. In particular, we do not warrant that the
          Service will meet your requirements, that AI suggestions will be accurate, or that your resume will achieve any
          particular result with any employer or ATS (see section 3).
        </P>
      </Section>

      <Section id="liability" title="13. Limitation of liability">
        <P>
          <Strong>Nothing in these Terms excludes or limits our liability</Strong> for death or personal injury caused by our negligence,
          for fraud or fraudulent misrepresentation, for intent or gross negligence, for breach of guarantees we have given, or for
          any liability that cannot be excluded or limited under applicable law — including, for consumers, liability under mandatory
          consumer protection law.
        </P>
        <P>
          Subject to the paragraph above: (a) we are not liable for indirect or consequential losses, loss of profits, loss of
          business opportunity, loss of employment or earnings, or loss of data that you could reasonably have backed up; and (b)
          our total liability to you for all claims arising out of or relating to the Service in any 12-month period is limited to
          the greater of the amounts you paid us in that period and 100 {pricing.currency}. For consumers in the EU/EEA, these
          limitations apply only to the extent permitted by the law of your country of residence and do not apply to damage caused by
          a breach of an essential contractual obligation.
        </P>
      </Section>

      <Section id="law" title="14. Governing law and disputes">
        <Ul>
          <Li><Strong>Users in the EU, EEA or UK:</Strong> these Terms are governed by the law of the country in which you have your habitual residence, including its mandatory consumer protection provisions, and any dispute may be brought before the courts of that country. We are not obliged to take part in alternative dispute resolution proceedings before a consumer arbitration body, but we are happy to try to resolve any complaint directly — please contact us first.</Li>
          <Li><Strong>Users in the United States:</Strong> these Terms are governed by the laws of the state in which you reside, without regard to its conflict-of-law rules and without prejudice to any non-waivable rights under federal law or the consumer protection laws of your state. Disputes may be brought in the state or federal courts located in your state of residence or, where permitted, in a small-claims court with jurisdiction over you.</Li>
          <Li><Strong>All other users:</Strong> these Terms are governed by the law of the country in which you reside, and the courts of that country have jurisdiction.</Li>
          <Li>The United Nations Convention on Contracts for the International Sale of Goods does not apply.</Li>
        </Ul>
        <P>Before starting formal proceedings, please contact us at <Email value={legal.contactEmail} />; most issues can be resolved quickly and informally.</P>
      </Section>

      <Section id="changes" title="15. Changes to these Terms">
        <P>
          We may update these Terms, for example to reflect changes in the Service or in the law. For material changes we will
          notify you by email or in the Service at least 30 days before they take effect. If you do not agree with a change you may
          terminate your subscription before it takes effect; continuing to use the Service afterwards means you accept the updated
          Terms. The current version is always available at <A href={links.terms}>this page</A>.
        </P>
      </Section>

      <Section id="general" title="16. General provisions">
        <Ul>
          <Li>These Terms, together with the Privacy Policy and Refund Policy, are the entire agreement between you and us regarding the Service.</Li>
          <Li>If any provision is found invalid or unenforceable, the remaining provisions remain in effect, and the invalid provision is replaced by a valid one that comes closest to its purpose.</Li>
          <Li>Our failure to enforce a provision is not a waiver of our right to do so later.</Li>
          <Li>You may not assign these Terms without our consent. We may assign them to an affiliate or a successor in a merger, acquisition or sale of assets, with notice to you.</Li>
          <Li>These Terms are written in English. If we provide a translation, the English version prevails in case of conflict, to the extent permitted by law.</Li>
        </Ul>
      </Section>

      <Section id="contact" title="17. Contact">
        <P>
          <Strong><Var value={legal.companyName} /></Strong><br />
          Email: <Email value={legal.contactEmail} /><br />
          Website: <A href={legal.websiteUrl}>{legal.websiteHost}</A>
        </P>
      </Section>
    </LegalLayout>
  );
}
