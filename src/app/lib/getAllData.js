
import axios from "axios";

export async function getAllData(text) {
   try {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&lang={ru}&appid=a8916d3e56bed9b05ead709df1cb8734`)
      return data.data;
   } catch(e) {
      console.error(e)
   }
}