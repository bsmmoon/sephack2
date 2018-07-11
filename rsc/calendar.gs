function myFunction() {
  calendars = {}
  CalendarApp.getAllCalendars().forEach(function(calendar) {
    calendars[calendar.getName()] = calendar;
  });
  
  searchDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  period = 7  // days
  
  Logger.log(calendars);
  defaultCalendar = calendars['default'];
  
  for (i = 0; i < period; i++) {
    searchDay = new Date(searchDay.getTime() + 24 * 60 * 60 * 1000)
    Logger.log(searchDay)
    events = defaultCalendar.getEventsForDay(searchDay)
    Logger.log(events)
    events.forEach(function(event) {
      details = {
        title: event.getTitle(),
        location: event.getLocation(),
        startTime: event.getStartTime(),
        endTime: event.getEndTime(),
      }
      Logger.log(details);
      calendar = calendars[details.location];
      if (!calendar) {
        Logger.log('[WARNING] Unknown location found: ' + details.location);
        return;
      }
      if (calendar.getEvents(details.startTime, details.endTime).length > 0) {
        Logger.log('[LOG] Meeting already exists')
        return;
      }
      calendar.createEvent(details.title, details.startTime, details.endTime, {
        location: details.location,
      })
      Logger.log('[LOG] Meeting created at ' + details.location)
    })
  }
}

function initCron() {
  Logger.log('[LOG] Initializin cron job')
  Logger.log(ScriptApp.getProjectTriggers())
  if (ScriptApp.getProjectTriggers().length > 0) {
    Logger.log('[LOG] Cron job already exists.')
    return;
  }
  ScriptApp.newTrigger('myFunction').timeBased().everyMinutes(10).create();
  Logger.log('[LOG] Initialized cron job')
}

function removeCron() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    ScriptApp.deleteTrigger(trigger);
  })
}
