import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { MODULES } from '../../data/modules';
import { DemoBandComponent } from '../../shared/demo-band.component';
import { IconComponent } from '../../shared/icon.component';
import { ScreenshotComponent } from '../../shared/screenshot.component';
import { SITE } from '../../site.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent, ScreenshotComponent, DemoBandComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly modules = MODULES;

  readonly steps = [
    { title: 'Set up your school', text: 'Your classes, sections, subjects, academic calendar and staff — April to March by default, adjustable to yours.' },
    { title: 'Bring in your data', text: 'Add your students, guardians and teachers, and connect your biometric devices for staff attendance.' },
    { title: 'Go live', text: 'Staff use the web portal, while teachers and parents download the mobile app and sign in.' },
  ];

  constructor() {
    const seo = inject(SeoService);
    seo.set({
      title: 'Padhaaii School ERP for Indian K-12 Schools | Aleaon Technologies',
      description:
        'Padhaaii by Aleaon Technologies runs admissions, attendance, timetables, fees, report cards and parent communication for Indian K-12 schools — on web and mobile.',
      path: '/',
    });
    seo.setJsonLd('org', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.company,
      url: SITE.domain,
      logo: `${SITE.domain}/apple-touch-icon.png`,
    });
    seo.setJsonLd('product', {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE.product,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web, Android, iOS',
      publisher: { '@type': 'Organization', name: SITE.company },
      description: 'School management software (ERP) for Indian K-12 schools.',
    });
  }
}
