import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../site.config';

export interface PageSeo {
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  set(page: PageSeo): void {
    const url = SITE.domain + (page.path === '/' ? '' : page.path);
    const image = `${SITE.domain}/og-image.png`;

    // Structured data is page-specific: clear the previous page's blocks.
    this.doc.head.querySelectorAll('script[data-ld]').forEach((s) => s.remove());

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.company });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Adds or replaces a JSON-LD block identified by `id`. */
  setJsonLd(id: string, data: object): void {
    let script = this.doc.head.querySelector<HTMLScriptElement>(`script[data-ld="${id}"]`);
    if (!script) {
      script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-ld', id);
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
