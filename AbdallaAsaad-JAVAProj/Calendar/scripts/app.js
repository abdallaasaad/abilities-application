function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

Promise.all([
  loadScript("./scripts/calendar.js"),
  loadScript("./scripts/event.js"),
  loadScript("./scripts/storage.js"),
  loadScript("./scripts/weather.js"),
])
  .then(() => {
    const storage = new Storage();
    const eventManager = new EventManager(storage);
    const weather = new Weather();
    const calendar = new Calendar(eventManager, weather);
    calendar.init();

    // create all nexessery scripts
    document.addEventListener("removeEvent", (e) => {
      calendar.eventManager.removeEvent(
        new Date(e.detail.dateString),
        e.detail.index
      );
      calendar.renderCalendar();
    });
  })
  .catch((error) => {
    console.error("Error loading scripts:", error);
  });
