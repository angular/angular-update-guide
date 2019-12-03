import { Injectable } from '@angular/core';

declare var ga: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }
  send(category: string, action: string) {
    ga('send', 'event', category, action);
  }

}
