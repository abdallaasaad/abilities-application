class Storage {
  saveEvents(events) {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }

  loadEvents() {
    const savedEvents = localStorage.getItem("calendarEvents");
    return savedEvents ? JSON.parse(savedEvents) : null;
  }
}
