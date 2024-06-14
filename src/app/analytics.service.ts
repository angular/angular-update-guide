import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

/** Extension of `Window` with potential Google Analytics fields. */
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?(...args: any[]): void;
    /** Legacy Universal Analytics `analytics.js` field. */
    ga?(...args: any[]): void;
  }
}

@Injectable({ providedIn: 'root' })
/**
 * Google Analytics Service - captures app behaviors and sends them to Google Analytics.
 *
 * Note: Presupposes that the legacy `analytics.js` script has been loaded on the
 * host web page.
 *
 * Associates data with properties determined from the environment configurations:
 *   - Data is uploaded to a legacy Universal Analytics property
 *   - Data is uploaded to our main Google Analytics 4+ property.
 */
export class AnalyticsService {
  constructor() {
    this._installGlobalSiteTag();
  }

  send(name: string, value: string | boolean | number) {
    this._legacyGa('send', 'event', name, value);
    this._gtag('event', name, { value });
  }

  private _gtag(...args: any[]) {
    if (window.gtag) {
      window.gtag(...args);
    }
  }

  private _legacyGa(...args: any[]) {
    if (window.ga) {
      window.ga(...args);
    }
  }

  private _installGlobalSiteTag() {
    const url = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsId}`;

    // Note: This cannot be an arrow function as `gtag.js` expects an actual `Arguments`
    // instance with e.g. `callee` to be set. Do not attempt to change this and keep this
    // as much as possible in sync with the tracking code snippet suggested by the Google
    // Analytics 4 web UI under `Data Streams`.
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());

    // Configure properties before loading the script. This is necessary to avoid
    // loading multiple instances of the gtag JS scripts.
    window.gtag('config', environment.googleAnalyticsId, { debug_mode: true });

    const el = window.document.createElement('script');
    el.async = true;
    el.src = url;
    window.document.head.appendChild(el);
  }
}
