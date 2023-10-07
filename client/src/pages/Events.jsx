import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import unitygrid from '../assets/unitygrid.jpg'
import '../css/Event.css'

const Events = () => {
    const [locations, setLocations] = useState([])
    const [currLocationId, setCurrentLocationId] = useState(-1)
    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
                console.log("locations:", locationsData)
                
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
                console.log("events:", events)
                
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const filterEvents = () => {
        console.log("currLocationId:", currLocationId)       
        const filteredEvents = events.filter(event => event.locationid == currLocationId);
        setFilteredEvents(filteredEvents)
        console.log("filteredEvents:", filteredEvents)
    };

    return (
        <div className='all-events-main'>
            <div className='event-filters'>
                <select value={currLocationId} onChange={(e) => setCurrentLocationId(e.target.value)}>
                    <option value={-1}>See events at ...</option>
                    {
                        locations && locations.length > 0 ? locations.map((location, index) => 
                            <option key={index} value={location.id} name={location.name}>{location.name}</option>
                        ) : null
                    }
                </select>
                <button onClick={filterEvents}>Show Events</button>
            </div>
            <div className='all-events'>
                {
                    events && events.length > 0 ? 
                        currLocationId < 0 ?
                            events.map((event, index) =>
                                <div className='event-information' key={index}>
                                    <img src={event.image} />
                                    <div className='event-information-overlay'>
                                        <div className='text'>
                                            <h3>{event.title}</h3>
                                            <p>{event.date} at {event.time}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                        ) : 
                            filteredEvents.map((event, index) =>
                            <div className='event-information' key={index}>
                                <img src={event.image} />
                                <div className='event-information-overlay'>
                                    <div className='text'>
                                        <h3>{event.title}</h3>
                                        <p>{event.date} at {event.time}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </div>
        </div>
    )
}

export default Events