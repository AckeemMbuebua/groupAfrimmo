import { ɵresolveComponentResources as resolveComponentResources } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { readdir, readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { cwd } from 'node:process';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App } from './app';

const appSourceDir = join(cwd(), 'src', 'app');
let resourceIndex: Promise<Map<string, string>> | undefined;

async function buildResourceIndex(
  dir = appSourceDir,
  acc = new Map<string, string>(),
): Promise<Map<string, string>> {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await buildResourceIndex(entryPath, acc);
        return;
      }
      if (!/\.(html|css|scss)$/.test(entry.name)) {
        return;
      }
      if (acc.has(entry.name)) {
        throw new Error(`Duplicate test resource name: ${entry.name}`);
      }
      acc.set(entry.name, entryPath);
    }),
  );
  return acc;
}

async function resolveResource(url: string): Promise<string> {
  resourceIndex ??= buildResourceIndex();
  const resourcePath = (await resourceIndex).get(basename(url));
  if (!resourcePath) {
    throw new Error(`Missing Angular test resource: ${url}`);
  }
  return readFile(resourcePath, 'utf8');
}

describe('App', () => {
  beforeEach(async () => {
    await resolveComponentResources(resolveResource);
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render shell with router outlet', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.autoDetectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
