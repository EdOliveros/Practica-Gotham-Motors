export const contact = `
<section id="contact" class="bg-light">
<div class="container">
  <div class="row">
    <div class="col-lg-6 mx-auto text-center mb-5">
      <h2 class="fw-bold mb-3">Contáctanos</h2>
      <p class="lead mb-0">¿Tienes alguna pregunta o comentario? ¡Escríbenos!</p>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-8 mx-auto">
      <form action="#" method="post">
        <div class="form-group mb-3">
          <label class="form-label" for="name">Nombre completo</label>
          <input class="form-control" type="text" id="name" name="name" placeholder="Ingresa tu nombre completo" required>
        </div>
        <div class="form-group mb-3">
          <label class="form-label" for="email">Correo electrónico</label>
          <input class="form-control" type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>
        </div>
        <div class="form-group mb-3">
          <label class="form-label" for="message">Mensaje</label>
          <textarea class="form-control" id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" type="submit">Enviar mensaje</button>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
`