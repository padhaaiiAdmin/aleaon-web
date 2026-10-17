import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { MODULES, PLATFORM_POINTS } from '../../data/modules';
import { DemoBandComponent } from '../../shared/demo-band.component';
import { IconComponent } from '../../shared/icon.component';
import { ScreenshotComponent } from '../../shared/screenshot.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, IconComponent, ScreenshotComponent, DemoBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro">
      <div class="container intro-inner">
        <img src="/brand/padhaaii/padhaaii-lockup-horizontal.svg" alt="Padhaaii" width="240" height="64" class="lockup" />
        <h1>The school ERP that fits how Indian schools actually run</h1>
        <p class="lead">
          Eight connected modules, a web portal for your office and staff, and mobile apps for teachers and parents.
        </p>
        <nav class="jump" aria-label="Modules on this page">
          @for (m of modules; track m.id) {
            <a [routerLink]="[]" [fragment]="m.id">{{ m.name }}</a>
          }
        </nav>
      </div>
    </section>

    @for (m of modules; track m.id; let odd = $odd) {
      <section class="section feature" [class.section--white]="!odd" [id]="m.id" [attr.aria-labelledby]="m.id + '-title'">
        <div class="container feature-grid" [class.flip]="odd">
          <div class="feature-copy">
            <span class="eyebrow tag"><app-icon [name]="m.icon" [size]="18" /> {{ m.name }}</span>
            <h2 [id]="m.id + '-title'">{{ m.heading }}</h2>
            <ul class="check-list">
              @for (p of m.points; track p) {
                <li>{{ p }}</li>
              }
            </ul>
          </div>
          <app-screenshot [alt]="m.name" [src]="m.screenshot" [device]="m.device"
                          [class.phone-shot]="m.device === 'phone'" />
        </div>
      </section>
    }

    <section class="section section--dark" aria-labelledby="platform-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Built in</span>
          <h2 id="platform-title">Across every module</h2>
        </div>
        <div class="platform">
          @for (p of platform; track p.title) {
            <div class="platform-item">
              <app-icon [name]="p.icon" />
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-demo-band />
  `,
  styles: `
    .intro { padding: clamp(48px, 7vw, 88px) 0 48px; }
    .intro-inner { display: grid; gap: 22px; justify-items: start; }
    .lockup { height: 44px; width: auto; }
    h1 { max-width: 820px; }
    .lead { font-size: 1.2rem; color: var(--slate-600); max-width: 640px; }
    .jump { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .jump a {
      padding: 8px 14px; border-radius: 999px; border: 1px solid var(--slate-200); background: var(--white);
      color: var(--slate-700); text-decoration: none; font-size: 0.92rem; font-weight: 500;
    }
    .jump a:hover { border-color: var(--teal-300); color: var(--indigo-900); }

    .feature-grid {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
      gap: clamp(36px, 6vw, 80px); align-items: center;
    }
    .feature-grid.flip > app-screenshot { order: -1; }
    .feature-copy { display: grid; gap: 20px; }
    .tag { display: inline-flex; align-items: center; gap: 8px; }
    .phone-shot { justify-self: center; width: 100%; max-width: 260px; }

    .platform { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 32px; }
    .platform-item { display: grid; gap: 10px; align-content: start; }
    .platform-item app-icon { color: var(--teal-300); margin-bottom: 4px; }
    .platform-item p { font-size: 0.97rem; }

    @media (max-width: 960px) { .platform { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 860px) {
      .feature-grid { grid-template-columns: minmax(0, 1fr); }
      .feature-grid.flip > app-screenshot { order: 0; }
    }
    @media (max-width: 520px) { .platform { grid-template-columns: minmax(0, 1fr); } }
  `,
})
export class ProductComponent {
  readonly modules = MODULES;
  readonly platform = PLATFORM_POINTS;

  constructor() {
    inject(SeoService).set({
      title: 'Padhaaii Features — Admissions, Attendance, Timetable, Fees | Aleaon',
      description:
        'Explore Padhaaii: admissions pipeline, mobile and biometric attendance, auto-generated timetables, marks and report cards, fee receipts, leave, visitor management and parent notifications.',
      path: '/padhaaii',
    });
  }
}
