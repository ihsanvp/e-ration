import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';

export function initializeDatabase(credential: string, projectId: string) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(credential)),
    databaseURL: `https://${projectId}.firebaseio.com`
  });

  const firestore = admin.firestore();
  fireorm.initialize(firestore);
}
