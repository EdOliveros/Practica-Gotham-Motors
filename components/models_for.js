import { lista as models } from './lista.js'

console.log('el array esta aqui', models)

export let cards = ''

for(let i = 0; i < models.length; i++) {
    cards += `
        <div class="col">
          <div class="card position-relative">
            <img class='myImg' src="${models[i].img}" class="card-img-top" alt="Modelo 1">
            <div class="card-body position-absolute bottom-0 start-0 p-3">
              <h5 class="card-title text-white">${models[i].modelo}</h5>
              <a href="#" class="btn btn-light">Ver mas</a>
            </div>
          </div>
        </div>

        <style> 
            .myImg {
                width: auto;
                height: 300px;
                object-fit: cover;
            }
        </style>
    `
}