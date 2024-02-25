<script>
  import List from "./components/List.svelte";

  let persons = ["Verduzco", "Mostaza", "Marlene", "Moradillo", "Escarlata", "Blanca"];
  let weapons = ["Candelabro", "Daga", "Tubo de plomo", "Revolver", "Soga", "Llave inglesa"];
  let places = ["Salon de baile", "Sala de billar", "Terraza", "Comedor", "Pasillo", "Cocina", "Biblioteca", "Sala", "Estudio"];
</script>

<div class="flex flex-col min-h-screen">
  <header class="flex flex-col">
    <img src="images/clue.png" alt="title" class="" />
  </header>
  <main class="grow">
    <List values={persons} title="Quien?" />
    <List values={weapons} title="Con que?" />
    <List values={places} title="Donde?" />
  </main>
  <footer class="flex content-center bg-blue-700 text-gray-300 p-2">
    <h3 class="italic">Creado por Roger Diaz B.</h3>
  </footer>
</div>