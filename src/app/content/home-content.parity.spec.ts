import { describe, expect, it } from 'vitest';
import { HOME_EN } from './home.en';
import { HOME_FR } from './home.fr';

function leafPaths(value: unknown, prefix = ''): string[] {
  if (value === null || value === undefined) {
    return [prefix];
  }
  if (Array.isArray(value)) {
    return [prefix];
  }
  if (typeof value === 'object') {
    return Object.keys(value as object).flatMap((key) =>
      leafPaths((value as Record<string, unknown>)[key], prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

describe('HOME_FR / HOME_EN parity', () => {
  it('shares the same nested key structure', () => {
    const frPaths = new Set(leafPaths(HOME_FR));
    const enPaths = new Set(leafPaths(HOME_EN));
    expect(frPaths).toEqual(enPaths);
  });

  it('has non-empty list sections', () => {
    expect(HOME_FR.stats.items.length).toBeGreaterThan(0);
    expect(HOME_EN.stats.items.length).toBe(HOME_FR.stats.items.length);
    expect(HOME_FR.expertise.cards.length).toBe(HOME_EN.expertise.cards.length);
    expect(HOME_FR.services.lines.length).toBe(HOME_EN.services.lines.length);
    expect(HOME_FR.faq.items.length).toBe(HOME_EN.faq.items.length);
  });
});
