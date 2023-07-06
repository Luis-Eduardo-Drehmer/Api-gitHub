import { baseUrl, eventsQuantity } from "/src/scripts/variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}${userName}/events`);
    const eventList = await response.json();
    let createPushEvents = [];

    console.log(eventList);
    eventList.forEach((event) => {
        if ((event.type === "PushEvent" || event.type === "CreateEvent") && createPushEvents.length <= 9) {
            createPushEvents.push(event);
        }
    });
    return createPushEvents;
}

export { getEvents }