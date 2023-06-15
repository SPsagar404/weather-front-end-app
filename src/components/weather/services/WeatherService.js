class WeatherService {
    async getWeatherByCity(cityname) {
        try {
            const apiUrl = `http://65.2.143.137:8080?`;
            const response = await fetch(apiUrl + new URLSearchParams({
                city: cityname
            }));
            const data = await response.json();
            if (response.ok) {
                return {
                    city: data.city,
                    temperature: data.temperature,
                    description: data.condition.weatherConditontype,
                    humidity: data.humidity,
                    icon:data.condition.iconUrl,
                    country:data.country
                };
            } else {
                throw new Error('Error fetching weather data.');
            }
        } catch (error) {
            throw new Error('Error fetching weather data.');
        }
    }
}

export default new WeatherService();
