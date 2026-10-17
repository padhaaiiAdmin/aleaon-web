import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { IconComponent } from '../../shared/icon.component';
import { SITE } from '../../site.config';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unavailable';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly site = SITE;
  readonly status = signal<Status>('idle');
  readonly submitted = signal(false);

  readonly roles = ['Owner / Trustee', 'Principal', 'Vice principal', 'School administrator', 'Teacher', 'Other'];
  readonly sizes = ['Under 300', '300 – 800', '800 – 1,500', '1,500 – 3,000', 'Over 3,000'];
  readonly plans = ['Not sure yet', 'Standard', 'Premium'];

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    school: ['', [Validators.required, Validators.maxLength(120)]],
    role: ['', Validators.required],
    city: ['', [Validators.required, Validators.maxLength(60)]],
    students: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/)]],
    email: ['', [Validators.required, Validators.email]],
    plan: ['Not sure yet'],
    message: ['', Validators.maxLength(1000)],
    consent: [false, Validators.requiredTrue],
    // Honeypot: real visitors never see or fill this.
    website: [''],
  });

  constructor() {
    inject(SeoService).set({
      title: 'Book a demo of Padhaaii school ERP | Aleaon Technologies',
      description: 'Book a demo of Padhaaii for your school. Tell us about your school and the Aleaon team will get in touch to arrange a walkthrough.',
      path: '/contact',
    });
    const plan = inject(ActivatedRoute).snapshot.queryParamMap.get('plan');
    if (plan && this.plans.includes(plan)) this.form.controls.plan.setValue(plan);
  }

  invalid(name: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.submitted());
  }

  async submit(): Promise<void> {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.controls.website.value) return; // bot

    if (!SITE.demoFormEndpoint) {
      this.status.set('unavailable');
      return;
    }

    this.status.set('sending');
    const { website, ...data } = this.form.getRawValue();
    try {
      const res = await fetch(SITE.demoFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'aleaon.com/contact', submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(String(res.status));
      this.status.set('sent');
      this.form.reset();
      this.submitted.set(false);
    } catch {
      this.status.set('error');
    }
  }
}
