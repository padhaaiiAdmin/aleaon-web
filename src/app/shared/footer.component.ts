import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AleaonLogoComponent } from './aleaon-logo.component';
import { SITE } from '../site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, AleaonLogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container grid">
        <div class="about">
          <app-aleaon-logo [size]="40" [dark]="true" />
          <p>
            {{ site.product }} is a product of {{ site.company }} — school management software
            built for Indian K-12 schools.
          </p>
          @if (site.contactEmail) {
            <p><a [href]="'mailto:' + site.contactEmail">{{ site.contactEmail }}</a></p>
          }
          @if (site.contactPhone) {
            <p><a [href]="'tel:' + site.contactPhone">{{ site.contactPhone }}</a></p>
          }
        </div>

        <nav aria-label="Product">
          <h2>Product</h2>
          <a routerLink="/padhaaii">Padhaaii overview</a>
          <a routerLink="/padhaaii" fragment="attendance">Attendance</a>
          <a routerLink="/padhaaii" fragment="fees">Fees</a>
          <a routerLink="/pricing">Pricing</a>
        </nav>

        <nav aria-label="Company">
          <h2>Company</h2>
          <a routerLink="/about">About</a>
          <a routerLink="/contact">Book a demo</a>
          <a [href]="site.productAppUrl" rel="noopener">School login</a>
        </nav>

        <nav aria-label="Legal">
          <h2>Legal</h2>
          <a routerLink="/privacy">Privacy policy</a>
          <a routerLink="/terms">Terms of use</a>
        </nav>
      </div>

      <div class="container base">
        <span>© {{ year }} {{ site.company }}. All rights reserved.</span>
        <span>Made in India, hosted in India.</span>
      </div>
    </footer>
  `,
  styles: `
    .footer { background: var(--night); color: #A5B4FC; padding: 72px 0 28px; }
    .grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .about { display: grid; gap: 18px; align-content: start; max-width: 360px; }
    .about p { color: var(--slate-300); font-size: 0.95rem; }
    nav { display: grid; gap: 10px; align-content: start; }
    h2 { font-size: 0.8rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--white); margin-bottom: 6px; }
    a { color: var(--slate-300); text-decoration: none; font-size: 0.95rem; }
    a:hover { color: var(--teal-300); }
    .base {
      margin-top: 56px; padding-top: 24px; border-top: 1px solid rgba(165, 180, 252, 0.16);
      display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 0.85rem;
    }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr 1fr; } .about { grid-column: 1 / -1; } }
    @media (max-width: 420px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
