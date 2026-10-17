import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { DemoBandComponent } from '../../shared/demo-band.component';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent, DemoBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container intro">
        <span class="eyebrow">About Aleaon</span>
        <h1>We build software for Indian schools</h1>
        <p class="lead">
          Aleaon Technologies makes software for K-12 schools in India. Our first product,
          <strong>Padhaaii</strong>, brings a school’s admissions, attendance, timetables, exams,
          fees and parent communication into one system.
        </p>
      </div>
    </section>

    <section class="section section--white" aria-labelledby="why-title">
      <div class="container split">
        <div class="split-head">
          <span class="eyebrow">Why we started</span>
          <h2 id="why-title">Schools deserve software made for how they work</h2>
        </div>
        <div class="split-body">
          <p>
            Most schools still run on a mix of registers, spreadsheets, messaging groups and separate apps that
            don’t talk to each other. Office staff enter the same information again and again, and parents hear
            about things last.
          </p>
          <p>
            Padhaaii replaces that patchwork with one system, designed around the realities of Indian schools:
            an April–March academic year, fee counters that take cash and cheques, gate registers, class teachers
            and subject teachers with different responsibilities, and parents who live on their phones.
          </p>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="principles-title">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How we build</span>
          <h2 id="principles-title">What guides our work</h2>
        </div>
        <div class="principles">
          @for (p of principles; track p.title) {
            <div class="card principle">
              <span class="icon"><app-icon [name]="p.icon" /></span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-demo-band title="Talk to us about your school" />
  `,
  styles: `
    .intro { display: grid; gap: 20px; max-width: 820px; margin-left: 0; }
    .lead { font-size: 1.2rem; color: var(--slate-600); }
    .lead strong { color: var(--indigo-900); font-weight: 600; }
    .split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr); gap: 48px; }
    .split-head { display: grid; gap: 14px; align-content: start; }
    .split-body { display: grid; gap: 18px; font-size: 1.08rem; }
    .principles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
    .principle { display: grid; gap: 10px; align-content: start; }
    .principle p { color: var(--slate-600); }
    .icon {
      width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center;
      background: var(--teal-50); color: var(--teal-700); margin-bottom: 6px;
    }
    @media (max-width: 860px) {
      .split, .principles { grid-template-columns: minmax(0, 1fr); }
      .split { gap: 20px; }
    }
  `,
})
export class AboutComponent {
  readonly principles = [
    { icon: 'layers', title: 'One system, not ten', text: 'Every module shares the same records, so information entered once shows up everywhere it’s needed.' },
    { icon: 'students', title: 'Built for the people using it', text: 'Office staff, principals, teachers and parents each get a view made for their job, on the device they actually use.' },
    { icon: 'cloud', title: 'Data kept in India', text: 'School data is hosted on servers in India, and each school sees only its own information.' },
  ];

  constructor() {
    inject(SeoService).set({
      title: 'About Aleaon Technologies — makers of Padhaaii',
      description: 'Aleaon Technologies builds software for Indian K-12 schools. Our first product, Padhaaii, runs a school’s admissions, attendance, timetables, exams, fees and parent communication.',
      path: '/about',
    });
  }
}
