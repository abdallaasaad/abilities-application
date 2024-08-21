class EventManager {
  constructor(storage) {
    this.events = {};
    this.storage = storage;
  }

  addEvent(date, text, color) {
    const dateString = date.toDateString();
    if (!this.events[dateString]) {
      this.events[dateString] = [];
    }
    this.events[dateString].push({ text, color });
    this.storage.saveEvents(this.events);
    this.renderEvents(date);
  }

  removeEvent(date, index) {
    const dateString = date.toDateString();
    if (this.events[dateString]) {
      this.events[dateString].splice(index, 1);
      if (this.events[dateString].length === 0) {
        delete this.events[dateString];
      }
      this.storage.saveEvents(this.events);
      this.renderEvents(date);
    }
  }

  renderEvents(date) {
    const eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = "";

    const dateString = date.toDateString();
    const events = this.events[dateString] || [];

    events.forEach((event, index) => {
      const eventItem = document.createElement("div");
      eventItem.className = "event-item";
      eventItem.style.borderLeft = `5px solid ${event.color}`;
      eventItem.innerHTML = `
            <span>${event.text}</span>
            <button class="remove-event" data-date="${dateString}" data-index="${index}">Delete</button>
        `;
      eventsList.appendChild(eventItem);
    });

    // event listeners to delete buttons
    eventsList.querySelectorAll(".remove-event").forEach((button) => {
      button.addEventListener("click", (e) => {
        const customEvent = new CustomEvent("removeEvent", {
          detail: {
            dateString: e.target.dataset.date,
            index: parseInt(e.target.dataset.index),
          },
        });
        document.dispatchEvent(customEvent);
      });
    });
  }

  hasEvents(dateString) {
    return this.events[dateString] && this.events[dateString].length > 0;
  }

  loadEvents() {
    this.events = this.storage.loadEvents() || {};
  }
}
