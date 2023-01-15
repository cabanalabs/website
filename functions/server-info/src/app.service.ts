import { Injectable } from '@nestjs/common';
import {FirebaseService, jsonPaths} from '@cocabana/lib-core';
import {ContactUsBody} from './types';
const fetch = require('node-fetch');

@Injectable()
export class AppService {

  constructor(
      private firebaseService: FirebaseService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async signup(email: string) {
    const date = this.dateCapture();
    await this.firebaseService.pushObject('/info/signups', { email, ...date });
    this.postMessage('Newsletter Signup\n' + email);
  }

  async contactUs(body: ContactUsBody) {
    const date = this.dateCapture();
    await this.firebaseService.pushObject('/info/contactUs', { body, ...date });
    let who = body.name || '';
    if (body.organization) {
      if(who) who += ', ' + body.organization;
      else who = body.organization
    }
    this.postMessage(`Who: ${who}\nEmail: ${body.email}\nSubject: ${body.subject}\nMessage: ${body.message}`);
  }

  private dateCapture() {
    const dateStr = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles', weekday:'long', year:'numeric', month:'short', day:'numeric', hour:'numeric', minute:'numeric'})

    return  { dateStr, date: Math.floor(Date.now()/1000) };
  }
  
  private postMessage(msg: string) {
    const url = 'https://hooks.slack.com/services/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'
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = {
      text: msg
    }

    fetch(url, { method: 'post', headers, body: JSON.stringify(body) });
  }
}
