const getAllEvents = async () => {
    try {
        const response = await fetch('http://localhost:3000/events/')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default {getAllEvents}