import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://webhook.site/c18b8359-7583-4c51-978e-627adb681258'
})

export const passengerAPI = {
    setPassengerData(data) {
        return instance.post('', data)
            .then(response => response.data)
    }
}