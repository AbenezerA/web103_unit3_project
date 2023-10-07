const getAllLocations = async () => {
    try {
        const response = await fetch('http://localhost:3000/')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getLocationById = async (id) => {
    try {
        console.log("about to fetch...")
        const response = await fetch(`http://localhost:3000/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}


export default { 
    getAllLocations,
    getLocationById
 }