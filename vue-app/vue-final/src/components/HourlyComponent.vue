/* eslint-disable */
<template>
  <div>
    <h1> hello </h1>
  </div>
</template>


<script>
export default {
/* eslint-disable vue/no-unused-components */
  data: () => ({
    hourlydata: 'weather not loaded',
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=45&lon=75&appid=d99b77f6db12d188c115f676a079f2f4`
      this.hourlydata = await (await fetch(url)).json()
      console.log('hey hooo')
    }
  }
}
</script>
