import { LegalLayout, type TocEntry } from '../components/legal/LegalLayout';
import { A, Callout, Email, H3, Li, Ol, P, Section, Strong, Ul, Var } from '../components/legal/Prose';
import { links } from '../lib/links';
import { legal } from './config';

const toc: TocEntry[] = [
  { id: 'summary', title: 'Summary' },
  { id: 'billing', title: 'How billing works' },
  { id: 'cancel', title: 'How to cancel' },
  { id: 'money-back', title: `${legal.moneyBackDays}-day money-back guarantee (all customers)` },
  { id: 'eu-withdrawal', title: 'Right of withdrawal (EU, EEA and UK consumers)' },
  { id: 'other-refunds', title: 'Other refunds: billing errors and service problems' },
  { id: 'exceptions', title: 'When we may refuse a refund' },
  { id: 'processing', title: 'How refunds are paid' },
  { id: 'chargebacks', title: 'Chargebacks' },
  { id: 'statutory', title: 'Your statutory rights' },
  { id: 'contact', title: 'Contact' },
];

export function RefundPolicy() {
  const { pricing } = legal;

  return (
    <LegalLayout
      title="Refund Policy"
      description={`This policy explains how to cancel a ${legal.productName} subscription and when you can get your money back. It is part of our Terms of Service.`}
      toc={toc}
    >
      <Section id="summary" title="1. Summary">
        <Callout>
          <Ul>
            <Li><Strong>Cancel anytime.</Strong> Cancelling stops future charges; you keep access until the end of the period you paid for.</Li>
            <Li><Strong>{legal.moneyBackDays}-day money-back guarantee</Strong> on every payment, for every customer, no questions asked.</Li>
            <Li><Strong>EU, EEA and UK consumers</Strong> additionally have a statutory {legal.withdrawalDays}-day right of withdrawal.</Li>
            <Li>Billing errors and duplicate charges are always refunded in full.</Li>
            <Li>Refunds go back to the original payment method within {legal.refundProcessingTime}.</Li>
          </Ul>
        </Callout>
      </Section>

      <Section id="billing" title="2. How billing works">
        <Ul>
          <Li>The <Strong>monthly plan</Strong> starts with a {pricing.introDays}-day introductory period for {pricing.introPrice}. Unless you cancel before it ends, it continues at {pricing.monthlyPrice} per month.</Li>
          <Li>The <Strong>quarterly plan</Strong> ({pricing.quarterlyPrice}) and the <Strong>annual plan</Strong> ({pricing.annualPrice}) are paid up front for the whole period.</Li>
          <Li>All plans <Strong>renew automatically</Strong> for the same period until you cancel. We charge the payment method on file at the start of each period. Prices are in {pricing.currency} and exclude taxes unless shown otherwise at checkout.</Li>
          <Li>Building and editing resumes is free; a subscription is required to download PDFs.</Li>
        </Ul>
      </Section>

      <Section id="cancel" title="3. How to cancel">
        <Ol>
          <Li>Sign in and open <Strong>Billing</Strong> in the top menu.</Li>
          <Li>Click <Strong>Cancel subscription</Strong> and confirm. You will receive a confirmation email.</Li>
        </Ol>
        <P>
          You can also cancel by emailing <Email value={legal.contactEmail} /> from the address linked to your account; we will
          confirm within two business days. Cancellation takes effect at the end of the current billing period: no further
          charges are made, and you keep full access until then. Cancelling does not by itself trigger a refund — see the
          sections below for when a refund applies.
        </P>
      </Section>

      <Section id="money-back" title={`4. ${legal.moneyBackDays}-day money-back guarantee (all customers)`}>
        <P>
          If you are not satisfied for any reason, you can request a <Strong>full refund of any payment within {legal.moneyBackDays} days
          of the date it was charged</Strong> — this applies to the introductory charge, to the first standard charge and to every
          renewal. The guarantee applies to all customers worldwide, whether or not you are a consumer, and regardless of how much
          you used the Service during those {legal.moneyBackDays} days.
        </P>
        <P>
          To use it, email <Email value={legal.contactEmail} /> with the email address of your account and the word “refund”, or cancel
          from the Billing page and request the refund in the same message. When a refund is granted your subscription ends
          immediately and PDF downloads are disabled; your resumes remain available in the editor.
        </P>
        <P>
          After {legal.moneyBackDays} days from a charge, that charge is non-refundable except as described in sections 5, 6 and 10 —
          cancelling an annual or quarterly plan in the middle of a period does not entitle you to a pro-rated refund of the
          remaining months, unless mandatory law in your country provides otherwise.
        </P>
      </Section>

      <Section id="eu-withdrawal" title="5. Right of withdrawal (EU, EEA and UK consumers)">
        <P>
          If you are a consumer living in the European Union, the European Economic Area or the United Kingdom, you have the right
          to withdraw from your subscription contract within <Strong>{legal.withdrawalDays} days</Strong> without giving any reason. The
          withdrawal period expires {legal.withdrawalDays} days after the day the contract is concluded (the day of your first order).
        </P>
        <P>
          To exercise the right of withdrawal you must inform us (<Strong><Var value={legal.companyName} /></Strong>,{' '}
          <Email value={legal.contactEmail} />) of your decision by an unequivocal statement, for example an email. You may use the model
          withdrawal form below, but it is not obligatory. To meet the deadline it is sufficient that you send your communication
          before the withdrawal period has expired.
        </P>
        <H3>Effects of withdrawal</H3>
        <P>
          If you withdraw, we will reimburse all payments received from you without undue delay and in any event not later than 14
          days from the day on which we are informed about your decision, using the same means of payment you used for the initial
          transaction, unless you have expressly agreed otherwise; you will not incur any fees as a result of the reimbursement.
        </P>
        <P>
          Because you asked us to start providing the Service during the withdrawal period, the law allows us to charge a
          proportionate amount for the Service provided until you informed us of your withdrawal. <Strong>We waive this deduction:</Strong>{' '}
          under our money-back guarantee (section 4) you receive a full refund if you withdraw within {legal.withdrawalDays} days.
        </P>
        <H3>Model withdrawal form</H3>
        <div className="rounded-xl border border-border bg-white p-5 text-sm leading-relaxed text-muted-foreground space-y-2">
          <p>(Complete and return this form only if you wish to withdraw from the contract.)</p>
          <p>To: <Var value={legal.companyName} />, <Var value={legal.contactEmail} /></p>
          <p>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service: {legal.productName} subscription (plan: ____________),</p>
          <p>Ordered on (*) / received on (*): ____________</p>
          <p>Name of consumer(s): ____________</p>
          <p>Address of consumer(s): ____________</p>
          <p>Email address used for the account: ____________</p>
          <p>Signature of consumer(s) (only if this form is notified on paper): ____________</p>
          <p>Date: ____________</p>
          <p>(*) Delete as appropriate.</p>
        </div>
        <P>
          The right of withdrawal applies to the conclusion of the contract; automatic renewals of an existing subscription do not
          start a new withdrawal period, but every renewal payment is covered by our {legal.moneyBackDays}-day money-back guarantee.
        </P>
      </Section>

      <Section id="other-refunds" title="6. Other refunds: billing errors and service problems">
        <P>We refund in full, without time limit, where:</P>
        <Ul>
          <Li>you were charged twice for the same period, or charged after you had cancelled;</Li>
          <Li>you were charged an amount different from the price displayed at checkout;</Li>
          <Li>we discontinue the Service or materially reduce its core functionality during a period you have paid for (pro-rated for the remaining time);</Li>
          <Li>the Service was unavailable or did not work as described for a significant part of a billing period and we were unable to fix it within a reasonable time after you told us (pro-rated, or in full where the law so requires).</Li>
        </Ul>
      </Section>

      <Section id="exceptions" title="7. When we may refuse a refund">
        <P>We may refuse or limit a refund that is not required by law where:</P>
        <Ul>
          <Li>the request is made more than {legal.moneyBackDays} days after the charge and none of the situations in section 6 applies;</Li>
          <Li>we detect abuse of this policy, for example repeated subscribe-and-refund cycles, use of multiple accounts to obtain the introductory price more than once, or sharing of an account;</Li>
          <Li>the account was suspended or terminated for a material breach of our <A href={links.terms}>Terms of Service</A>;</Li>
          <Li>the request is made by someone other than the account holder.</Li>
        </Ul>
      </Section>

      <Section id="processing" title="8. How refunds are paid">
        <Ul>
          <Li>Refunds are issued to the original payment method. We cannot send refunds to a different card or account.</Li>
          <Li>We process approved refunds within 14 days, and usually much faster; your bank or card issuer may take a further {legal.refundProcessingTime} to show the credit.</Li>
          <Li>Refunds are made in the currency of the original charge. We do not reimburse currency conversion differences or fees charged by your bank.</Li>
          <Li>Where a refund is granted for the current period, PDF downloads are disabled as soon as the refund is issued.</Li>
        </Ul>
      </Section>

      <Section id="chargebacks" title="9. Chargebacks">
        <P>
          If you believe a charge is wrong, please contact us before disputing it with your bank or card issuer — we resolve
          genuine billing problems quickly and a refund from us is faster than a chargeback. If a chargeback is filed for a charge
          that was valid, we may suspend the account until the dispute is resolved and provide the card network with evidence of
          the purchase and use of the Service. Nothing in this section limits your right to dispute a charge under the rules of
          your payment provider or applicable law.
        </P>
      </Section>

      <Section id="statutory" title="10. Your statutory rights">
        <P>
          This policy is in addition to, and does not limit, any rights you have under mandatory law in your country of residence —
          including rights under the EU Consumer Rights Directive and the Digital Content and Digital Services Directive, the UK
          Consumer Rights Act 2015, and US state laws on automatic renewal and consumer protection. Where such a law gives you a
          greater right than this policy, the law applies.
        </P>
      </Section>

      <Section id="contact" title="11. Contact">
        <P>
          <Strong><Var value={legal.companyName} /></Strong><br />
          Email: <Email value={legal.contactEmail} /><br />
          Website: <A href={legal.websiteUrl}>{legal.websiteHost}</A>
        </P>
      </Section>
    </LegalLayout>
  );
}
