import { describe, expect, it } from 'vitest';
import { DEFAULT_SITE_CONTENT, getContent } from './get-content';
import { SUPPORTED_LOCALES } from './locale';

describe('getContent', () => {
  it('returns French site content by default', () => {
    const content = getContent();
    expect(content.locale).toBe('fr');
    expect(content.seo.brandName).toBe('Groupe Afrimmo S.A.');
  });

  it('exposes navigation and landing domains', () => {
    expect(DEFAULT_SITE_CONTENT.navigation.main.length).toBe(4);
    expect(DEFAULT_SITE_CONTENT.landing.faq.length).toBe(7);
    expect(DEFAULT_SITE_CONTENT.projects.cards.length).toBe(7);
  });

  it('registers French and English locales', () => {
    expect(getContent('fr').locale).toBe('fr');
    expect(getContent('en').locale).toBe('en');
    expect(SUPPORTED_LOCALES).toContain('en');
  });
});
