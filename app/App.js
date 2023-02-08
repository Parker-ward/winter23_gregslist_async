import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";

class App {
  carsController = new CarsController()
  housescontroller = new HousesController
}

window["app"] = new App();
