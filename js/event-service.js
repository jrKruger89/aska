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
      this.appendEvents(this.events);
      console.log(this.events);
      this.filterEvents("Foredrag og kursus");
    });
  }

  //var stævner = myArray.filter(category => category.includes('stævner'))

  /*
  let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */ /*
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
*/ /*
console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
*/

  // append users to the DOM
  appendEvents(events) {
    let htmlTemplate = "";
    for (const event of events) {
      htmlTemplate += /*html*/ `
    <article>
      <p>${event.date}</p>
      <div class="whitespace"></div>
      <p>${event.name}</p>
      <div class="whitespace"></div>
      <button class="button4 dark-green" onclick="showDetailView('${event.id}')">Læs mere & tilmeld</button>
    </article>
    `;
    }

    document.querySelector("#content").innerHTML = htmlTemplate;
  }

  filterEvents() {
    document.addEventListener("change", () => {
      const checkedValues = [...document.querySelectorAll(".eventCheckBox")]
        .filter((input) => input.checked)
        .map((input) => input.value);
      const result = this.events.filter((item) => {
        if (item.category.some((tag) => tag == checkedValues)) {
          return item;
        }
      });
      this.appendEvents(result);
      if (checkedValues.length < 1) {
        this.appendEvents(this.events);
      }
    });
  }
}

// sort by category
function orderBy(value) {
  if (value === "name") {
    sortByName();
  } else if (value === "year") {
    sortByYear();
  }
}

function sortByName() {
  _movies.sort((movie1, movie2) => {
    return movie1.title.rendered.localeCompare(movie2.title.rendered);
  });
  appendMovies(_movies);
}

function sortByYear() {
  _movies.sort((movie1, movie2) => {
    return movie1.acf.year.localeCompare(movie2.acf.year);
  });
  appendMovies(_movies);
}
