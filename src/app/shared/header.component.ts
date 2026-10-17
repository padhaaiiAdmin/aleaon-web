import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AleaonLogoComponent } from './aleaon-logo.component';
import { IconComponent } from './icon.component';
import { SITE } from '../site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AleaonLogoComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <div class="container bar">
        <a routerLink="/" class="brand" aria-label="Aleaon Technologies home">
          <app-aleaon-logo [size]="38" />
        </a>

        <nav class="nav" [class.nav--open]="open()" id="site-nav" aria-label="Main">
          <a routerLink="/padhaaii" routerLinkActive="active">Product</a>
          <a routerLink="/pricing" routerLinkActive="active">Pricing</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a [href]="appUrl" class="login" rel="noopener">School login</a>
          <a routerLink="/contact" class="btn btn--primary cta">Book a demo</a>
        </nav>

        <button type="button" class="toggle" (click)="open.set(!open())"
                [attr.aria-expanded]="open()" aria-controls="site-nav"
                [attr.aria-label]="open() ? 'Close menu' : 'Open menu'">
          <app-icon [name]="open() ? 'close' : 'menu'" />
        </button>
      </div>
    </header>
  `,
  styles: `
    .header {
      position: sticky; top: 0; z-index: 50;
      background: rgba(248, 250, 252, 0.9);
      backdrop-filter: saturate(160%) blur(10px);
      border-bottom: 1px solid var(--slate-200);
    }
    .bar { height: var(--header-h); display: flex; align-items: center; justify-content: space-between; gap: 24px; }
    .brand { display: inline-flex; text-decoration: none; }
    .nav { display: flex; align-items: center; gap: 28px; }
    .nav a:not(.btn) {
      color: var(--slate-700); text-decoration: none; font-weight: 500; padding: 8px 0;
      border-bottom: 2px solid transparent;
    }
    .nav a:not(.btn):hover { color: var(--indigo-800); }
    .nav a.active { color: var(--indigo-900); border-bottom-color: var(--teal-300); }
    .login { color: var(--slate-600) !important; }
    .cta { min-height: 42px; padding: 10px 18px; }
    .toggle {
      display: none; width: 44px; height: 44px; border-radius: 10px; border: 1px solid var(--slate-200);
      background: var(--white); color: var(--indigo-900); align-items: center; justify-content: center; cursor: pointer;
    }

    @media (max-width: 860px) {
      .toggle { display: inline-flex; }
      .nav {
        position: absolute; top: var(--header-h); left: 0; right: 0;
        flex-direction: column; align-items: stretch; gap: 0;
        background: var(--white); border-bottom: 1px solid var(--slate-200);
        padding: 8px var(--gutter) 20px; box-shadow: var(--shadow);
        display: none;
      }
      .nav--open { display: flex; }
      .nav a:not(.btn) { padding: 14px 0; border-bottom: 1px solid var(--slate-100); }
      .nav a.active { border-bottom-color: var(--slate-100); color: var(--teal-700); }
      .cta { margin-top: 16px; min-height: 48px; }
    }
  `,
})
export class HeaderComponent {
  readonly appUrl = SITE.productAppUrl;
  readonly open = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.open.set(false));
  }
}
