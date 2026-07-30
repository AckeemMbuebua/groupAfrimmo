import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoPayload {
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly siteOrigin = 'https://www.groupeafrimmo.com';

  update({ title, description }: SeoPayload): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    const absoluteUrl = this.currentUrl();
    this.meta.updateTag({ property: 'og:url', content: absoluteUrl });
    this.ensureCanonical(absoluteUrl);
  }

  private currentUrl(): string {
    const location = this.doc.defaultView?.location ?? this.doc.location;
    const pathname = location?.pathname && location.pathname !== '/index.html' ? location.pathname : '/';
    return `${this.siteOrigin}${pathname}${location?.search ?? ''}`;
  }

  private ensureCanonical(href: string): void {
    let canonical = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.doc.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(canonical);
    }
    canonical.setAttribute('href', href);
  }
}
