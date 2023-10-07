import { pool } from './database.js'
import '../config/dotenv.js'

async function createEventsTable() {
    const createEventsTableQuery = `
        SELECT * FROM events;
        
    `
    try {
        const res = await pool.query(createEventsTableQuery)
        console.log('🎉 events table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating events table', err)
    }

    const createLocationsTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(50),
            city VARCHAR(50),
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(5),
            image VARCHAR(255)
        );     
    `
    try {
        const res = await pool.query(createLocationsTableQuery)
        console.log('🎉 locations table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

createEventsTable()
