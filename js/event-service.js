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

export default class Event {
  constructor() {
    this.eventRef = collection(_db, "events");
    this.readData();
  }

  readData() {
    // ========== READ ==========
    // watch the database ref for changes
    onSnapshot(this.eventRef, (snapshot) => {
      // mapping snapshot data from firebase in to user objects
      this.events = snapshot.docs.map((doc) => {
        const event = doc.data();
        event.id = doc.id;
        return event;
      });
      this.appendUsers(this.events);
      console.log(this.events);
    });
  }

  // append users to the DOM
  appendUsers(events) {
    let htmlTemplate = "";
    for (const event of events) {
      htmlTemplate += /*html*/ `
    <article>
      <h3>${event.name}</h3>
    </article>
    `;
    }
    document.querySelector(".calender").innerHTML = htmlTemplate;
  }
}
