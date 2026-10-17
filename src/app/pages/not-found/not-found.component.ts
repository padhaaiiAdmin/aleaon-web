import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container box">
        <span class="eyebrow">404</span>
        <h1>This page doesn’t exist</h1>
        <p>The link may be old, or the address may have a typo.</p>
        <div class="btn-row">
          <a routerLink="/" class="btn btn--primary">Go to the home page</a>
          <a routerLink="/contact" class="btn btn--secondary">Book a demo</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .box { display: grid; gap: 18px; justify-items: center; text-align: center; padding-block: 48px; }
    p { color: var(--slate-600); font-size: 1.1rem; }
  `,
})
export class NotFoundComponent {
  constructor() {
    inject(SeoService).set({ title: 'Page not found | Aleaon Technologies', description: 'This page could not be found.', path: '/404' });
    inject(Meta).updateTag({ name: 'robots', content: 'noindex' });
  }
}
