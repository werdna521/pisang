import { API } from 'aws-amplify';

export default {
  async getTemperatureAndHumidity() {
    const response = await API.get('api4d260a1f', '/api/temp-hum/get-latest');
    const { temperature, humidity } = response.Payload;
    return {
      type: 0,
      label: 'Temp. / Humidity',
      data: [`${temperature}°C`, `${humidity}%`],
      switch: false,
    };
  },
};
