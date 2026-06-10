import { describe, expect, it } from 'vitest';
import { getHomeContent } from './get-home-content';

describe('getHomeContent', () => {
  it('returns French and English home bundles', () => {
    expect(getHomeContent('fr').locale).toBe('fr');
    expect(getHomeContent('en').locale).toBe('en');
    expect(getHomeContent('fr').hero.title).toContain('Groupe Afrimmo S.A.');
    expect(getHomeContent('en').hero.title).toContain('Groupe Afrimmo S.A.');
  });
});
