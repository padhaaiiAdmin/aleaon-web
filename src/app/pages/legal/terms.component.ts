import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SITE } from '../../site.config';

/** TODO(before launch): have this reviewed by a lawyer. Covers the website only. */
@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container prose">
        <span class="eyebrow">Legal</span>
        <h1>Terms of use</h1>
        <p class="updated">Last updated: {{ updated }}</p>

        <p>
          These terms apply to your use of aleaon.com, run by {{ site.company }}. Use of the Padhaaii product
          is governed by a separate agreement between each school and {{ site.company }}.
        </p>

        <h2>Using this website</h2>
        <p>
          You may use this website to learn about our products and to contact us. Please don’t try to disrupt the site,
          access parts of it that aren’t meant for you, or submit false information through our forms.
        </p>

        <h2>Content</h2>
        <p>
          The text, images, logos and product screenshots on this site belong to {{ site.company }}.
          The names Aleaon and Padhaaii and their logos may not be used without our written permission.
        </p>

        <h2>Accuracy</h2>
        <p>
          We work to keep product information on this site accurate, but features and plans can change. The
          agreement your school signs with us is what defines the service you receive.
        </p>

        <h2>Links to other sites</h2>
        <p>We are not responsible for the content of websites we link to.</p>

        <h2>Liability</h2>
        <p>
          This website is provided “as is”. To the extent the law allows, {{ site.company }} is not liable for any loss
          arising from your use of it.
        </p>

        <h2>Law</h2>
        <p>These terms are governed by the laws of India.</p>

        <h2>Questions</h2>
        <p>Reach us through the <a routerLink="/contact">contact page</a>.</p>
      </div>
    </section>
  `,
  styles: `
    .prose { display: block; }
    h1 { margin: 12px 0 8px; }
    .updated { color: var(--slate-500); margin-bottom: 32px; }
  `,
})
export class TermsComponent {
  readonly site = SITE;
  readonly updated = '9 October 2026';

  constructor() {
    inject(SeoService).set({
      title: 'Terms of use | Aleaon Technologies',
      description: 'Terms for using the Aleaon Technologies website, aleaon.com.',
      path: '/terms',
    });
  }
}
