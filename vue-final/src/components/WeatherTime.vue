<template>
  <div class="weather-info">
    <p> {{ format(new Date(), "yyyy-MM-dd HH:mm:ss")  }}</p>
    <p>Current temperature in {{weatherdata.name}}, {{weatherdata.sys.country}} is {{ weatherdata.main.temp }}°C.</p>
  </div>
</template>


<script>
import { format } from 'date-fns'
const WEATHER_API = process.env.VUE_APP_WEATHER
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=43.1940&lon=-80.3845&units=metric&appid=`
export default {
  data: () => ({
    weatherdata: 'weather not loaded',
    format,
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}${WEATHER_API}`
      this.weatherdata = await (await fetch(url)).json()
    }
  }
}
</script>
<style>
  .weather-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>