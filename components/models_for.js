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


              <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  ver mas
</button>

<!-- Modal -->


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <canvas id="renderCanvas"></canvas>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Understood</button>
      </div>
      </div>
      </div>
      </div>




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