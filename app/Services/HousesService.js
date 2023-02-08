import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { sandboxApi } from "./AxiosService.js";

class HousesService {
  async getHouses() {
    const res = await sandboxApi.get('/houses')
    console.log('[what is my]', res.data)
    const newArray = res.data.map(house => new House(house))
    appState.houses = newArray
    console.log(newArray);
  }
}

export const housesService = new HousesService()