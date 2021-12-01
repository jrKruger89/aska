import { _db } from "./firebase-service.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  updateDoc,
  addDoc,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

export default class Sponsor {
  constructor() {
    this.sponsorRef = collection(_db, "sponsors");
    this.readData();
  }

  readData() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.sponsorRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.sponsors = snapshot.docs.map((doc) => {
        const sponsor = doc.data();
        sponsor.id = doc.id;
        return sponsor;
      });
      this.appendUsers(this.sponsors);
    });
  }
}
