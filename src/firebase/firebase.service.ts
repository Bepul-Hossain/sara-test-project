/* eslint-disable prettier/prettier */
import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault({
        type: "service_account",
        project_id: "trps-3cf60",
        private_key_id: "",
        private_key: "",
        client_email: "",
        client_id: "",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "",
        universe_domain: "googleapis.com",
      } as any),
    });
  }

  async sendNotification(token: string, title: string, message: string) {
    console.log({
      token,
      notification: { title, body: message },
    });
    
    // await admin.messaging().send({
    //   token,
    //   notification: { title, body: message },
    // });
  }
}
