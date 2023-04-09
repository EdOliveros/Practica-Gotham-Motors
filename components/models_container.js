import { cards } from "./models_for.js"

const models = 
    `
      <section class="py-5">
        <div class="container">
          <h2 class="text-left mb-5">Nuestros Modelos</h2>
          <div class="row row-cols-1 row-cols-md-3 g-3" >
          ${cards}

          </div>
        </div>
      </section>
    `
export default models