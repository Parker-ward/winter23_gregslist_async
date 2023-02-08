export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get HouseCard() {
    return `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${this.imgUrl}" class="card-img-top house-img"
          alt="house">
        <div class="card-body">
          <div class="card-title fs-5">${this.bedrooms + ' ' + this.bedrooms}</div>
          <p>${this.description ? this.description : "Beautiful House"}</p>
          <div class="d-flex justify-content-between">
          </div>
          </div>
          </div>
          </div>
    `
  }

}