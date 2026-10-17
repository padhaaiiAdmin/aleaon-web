import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { DemoBandComponent } from '../../shared/demo-band.component';

/**
 * TODO(before launch): replace the placeholder feature lists with what each plan includes.
 */
const PLANS = [
  {
    name: 'Standard',
    for: 'For schools getting started with a complete ERP.',
    features: ['[Standard plan feature 1]', '[Standard plan feature 2]', '[Standard plan feature 3]', '[Standard plan feature 4]'],
    featured: false,
  },
  {
    name: 'Premium',
    for: 'For schools that want every module and more support.',
    features: ['Everything in Standard', '[Premium plan feature 1]', '[Premium plan feature 2]', '[Premium plan feature 3]'],
    featured: true,
  },
];

const FAQS = [
  { q: 'How is pricing worked out?', a: 'Pricing depends on your school’s size and the plan you choose. Book a demo and we’ll send a quote for your school.' },
  { q: 'Where is our school’s data stored?', a: 'On cloud servers in Mumbai, India.' },
  { q: 'Does it follow the Indian academic year?', a: 'Yes. Padhaaii uses an April–March academic year by default, and you can set your own dates.' },
  { q: 'Can we use our own logo and colours?', a: 'Yes. Each school gets its own login address and its own branding inside the portal.' },
  { q: 'Do you support biometric attendance?', a: 'Yes, for teachers and staff, using eSSL biometric devices. The devices send attendance straight to Padhaaii, so the school needs no static IP or local server.' },
  { q: 'Is there an app for parents and teachers?', a: 'Yes. Parents, students and teachers each get their own view in the Padhaaii mobile app.' },
];

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, DemoBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <div class="section-head section-head--center">
          <span class="eyebrow">Pricing</span>
          <h1>Plans for every school</h1>
          <p>Two plans, priced for your school’s size. Contact us for a quote.</p>
        </div>

        <div class="plans">
          @for (p of plans; track p.name) {
            <article class="plan" [class.plan--featured]="p.featured" [attr.aria-labelledby]="'plan-' + p.name">
              <h2 [id]="'plan-' + p.name">{{ p.name }}</h2>
              <p class="for">{{ p.for }}</p>
              <p class="price">Contact us for pricing</p>
              <ul class="check-list">
                @for (f of p.features; track f) {
                  <li>{{ f }}</li>
                }
              </ul>
              <a routerLink="/contact" [queryParams]="{ plan: p.name }"
                 class="btn" [class.btn--primary]="p.featured" [class.btn--secondary]="!p.featured">
                Get a quote for {{ p.name }}
              </a>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section section--white" aria-labelledby="faq-title">
      <div class="container faq-wrap">
        <h2 id="faq-title">Questions schools ask</h2>
        <div class="faq">
          @for (f of faqs; track f.q) {
            <details>
              <summary>{{ f.q }}</summary>
              <p>{{ f.a }}</p>
            </details>
          }
        </div>
      </div>
    </section>

    <app-demo-band />
  `,
  styles: `
    .plans { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; max-width: 880px; margin-inline: auto; }
    .plan {
      display: grid; gap: 16px; align-content: start; padding: 36px;
      background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg);
    }
    .plan--featured { border: 2px solid var(--indigo-800); box-shadow: var(--shadow-lg); }
    .plan h2 { font-size: 1.6rem; }
    .for { color: var(--slate-600); }
    .price { font-size: 1.3rem; font-weight: 600; color: var(--indigo-900); padding: 14px 0; border-block: 1px solid var(--slate-200); }
    .plan .btn { margin-top: 8px; }

    .faq-wrap { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 48px; }
    .faq { display: grid; }
    details { border-bottom: 1px solid var(--slate-200); }
    summary {
      cursor: pointer; list-style: none; padding: 20px 36px 20px 0; position: relative;
      font-weight: 600; color: var(--indigo-900); font-size: 1.05rem;
    }
    summary::-webkit-details-marker { display: none; }
    summary::after {
      content: '+'; position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
      font-size: 1.5rem; font-weight: 400; color: var(--teal-600);
    }
    details[open] summary::after { content: '−'; }
    details p { padding: 0 0 20px; color: var(--slate-600); }

    @media (max-width: 760px) {
      .plans, .faq-wrap { grid-template-columns: minmax(0, 1fr); }
      .faq-wrap { gap: 16px; }
      .plan { padding: 28px; }
    }
  `,
})
export class PricingComponent {
  readonly plans = PLANS;
  readonly faqs = FAQS;

  constructor() {
    const seo = inject(SeoService);
    seo.set({
      title: 'Pricing — Padhaaii Standard and Premium plans | Aleaon',
      description: 'Padhaaii school ERP comes in two plans, Standard and Premium, priced for your school’s size. Contact Aleaon Technologies for a quote.',
      path: '/pricing',
    });
    seo.setJsonLd('faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
}
