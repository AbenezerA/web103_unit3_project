import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import { useParams } from 'react-router-dom'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [fEvents, setFEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index)
                console.log("location data by id:", locationData)
                setLocation(locationData)
                
                // console.log("id from params:", id)
                const eventsData = await EventsAPI.getAllEvents()
                // const filteredEvents = eventsData.filter(event => event.locationid == index);
                setFEvents(eventsData)
                // console.log("events:", events)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.street}, {location.city}, {location.state} {location.zipcode}</p>
                </div>
            </header>

            <main>
                {
                    fEvents && fEvents.length > 0 ? fEvents.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents