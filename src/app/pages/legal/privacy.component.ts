import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SITE } from '../../site.config';

/**
 * TODO(before launch): have this reviewed by a lawyer, and add the grievance contact
 * once SITE.contactEmail is set. Covers this website only, not the Padhaaii product.
 */
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container prose">
        <span class="eyebrow">Legal</span>
        <h1>Privacy policy</h1>
        <p class="updated">Last updated: {{ updated }}</p>

        <p>
          This policy explains how {{ site.company }} (“Aleaon”, “we”, “us”) handles personal data collected through
          this website, aleaon.com. It is written to meet the Digital Personal Data Protection Act, 2023 (DPDP Act).
          Data that schools store in the Padhaaii product is covered by each school’s agreement with us, not by this policy.
        </p>

        <h2>What we collect</h2>
        <p>When you request a demo through our form, we collect:</p>
        <ul>
          <li>your name, role, mobile number and email address;</li>
          <li>your school’s name, city and approximate number of students;</li>
          <li>the plan you’re interested in and any message you write.</li>
        </ul>
        <p>We do not ask for, and you should not send, information about students through this form.</p>

        <h2>Why we use it</h2>
        <p>
          We use these details only to contact you about a demo of Padhaaii, answer your questions and send you a quote.
          We rely on your consent, which you give by ticking the box on the form.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We do not sell your data. It is stored with service providers that host our website and email systems,
          who process it only on our instructions. We may disclose it if the law requires us to.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep demo requests for as long as we are in discussion with your school, and delete them within
          12 months of our last contact unless your school becomes a customer.
        </p>

        <h2>Your rights</h2>
        <p>Under the DPDP Act you can:</p>
        <ul>
          <li>ask for a summary of the personal data we hold about you;</li>
          <li>ask us to correct, update or erase it;</li>
          <li>withdraw your consent at any time, after which we will stop contacting you;</li>
          <li>raise a grievance with us, and then with the Data Protection Board of India if it isn’t resolved.</li>
        </ul>

        <h2>Contact</h2>
        @if (site.contactEmail) {
          <p>For any privacy request or grievance, write to <a [href]="'mailto:' + site.contactEmail">{{ site.contactEmail }}</a>.</p>
        } @else {
          <p>For any privacy request or grievance, reach us through the <a routerLink="/contact">contact page</a>.</p>
        }

        <h2>Cookies</h2>
        <p>This website does not use advertising or tracking cookies.</p>

        <h2>Changes</h2>
        <p>If we change this policy, we will update the date at the top of this page.</p>
      </div>
    </section>
  `,
  styles: `
    .prose { display: block; }
    h1 { margin: 12px 0 8px; }
    .updated { color: var(--slate-500); margin-bottom: 32px; }
  `,
})
export class PrivacyComponent {
  readonly site = SITE;
  readonly updated = '9 October 2026';

  constructor() {
    inject(SeoService).set({
      title: 'Privacy policy | Aleaon Technologies',
      description: 'How Aleaon Technologies collects and uses personal data on aleaon.com, under India’s Digital Personal Data Protection Act, 2023.',
      path: '/privacy',
    });
  }
}
