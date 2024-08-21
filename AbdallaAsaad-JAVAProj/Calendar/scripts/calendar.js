class Calendar {
  constructor(eventManager, weather) {
    this.currentDate = new Date();
    this.selectedDate = null;
    this.eventManager = eventManager;
    this.weather = weather;
  }

  init() {
    this.renderCalendar();
    this.attachEventListeners();
    this.eventManager.loadEvents();
    this.weather.getWeather();
  }

  renderCalendar() {
    const currentMonth = document.getElementById("currentMonth");
    const calendarGrid = document.getElementById("calendarGrid");

    currentMonth.textContent = this.currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    const daysInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    ).getDay();

    calendarGrid.innerHTML = "";

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach((day) => {
      const weekdayElement = document.createElement("div");
      weekdayElement.className = "calendar-weekday";
      weekdayElement.textContent = day;
      calendarGrid.appendChild(weekdayElement);
    });

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day;

      const dateString = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        day
      ).toDateString();
      if (this.eventManager.hasEvents(dateString)) {
        dayElement.classList.add("has-event");
      }

      dayElement.addEventListener("click", () => this.selectDate(day));
      calendarGrid.appendChild(dayElement);
    }
    if (this.selectedDate) {
      this.eventManager.renderEvents(this.selectedDate);
    }
  }

  attachEventListeners() {
    document
      .getElementById("prevMonth")
      .addEventListener("click", () => this.changeMonth(-1));
    document
      .getElementById("nextMonth")
      .addEventListener("click", () => this.changeMonth(1));
    document
      .getElementById("addEvent")
      .addEventListener("click", () => this.addEvent());
  }

  changeMonth(delta) {
    this.currentDate.setMonth(this.currentDate.getMonth() + delta);
    this.renderCalendar();
  }

  selectDate(day) {
    this.selectedDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      day
    );
    document
      .querySelectorAll(".calendar-day")
      .forEach((el) => el.classList.remove("selected"));
    event.target.classList.add("selected");
    this.eventManager.renderEvents(this.selectedDate);
  }

  addEvent() {
    if (!this.selectedDate) {
      alert("Please select a date first");
      return;
    }

    const eventInput = document.getElementById("eventInput");
    const eventColor = document.getElementById("eventColor");
    const eventText = eventInput.value.trim();

    if (eventText) {
      this.eventManager.addEvent(
        this.selectedDate,
        eventText,
        eventColor.value
      );
      eventInput.value = "";
      this.renderCalendar();
    }
  }
}
