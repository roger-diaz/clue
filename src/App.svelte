<script>
  import List from "./components/List.svelte";

  let persons = ["Verduzco", "Mostaza", "Marlene", "Moradillo", "Escarlata", "Blanca"];
  let weapons = ["Candelabro", "Daga", "Tubo de plomo", "Revolver", "Soga", "Llave inglesa"];
  let places = ["Salon de baile", "Sala de billar", "Terraza", "Comedor", "Pasillo", "Cocina", "Biblioteca", "Sala", "Estudio"];
</script>

<div class="flex flex-col min-h-screen">
  <header class="flex flex-col bg-black ">
    <img src="images/clue.png" alt="title" class="md:w-60 md:h-16" />
  </header>
  <main class="grow  bg-white dark:bg-black">
    <List values={persons} title="Quien?" />
    <List values={weapons} title="Con que?" width="12" height="16" rounded={false} />
    <List values={places} title="Donde?" height="16" rounded={false}  />
  </main>
</div>