<template>
  <div class="box">
    <h1>Bonjour 👋</h1>
    <form>
      <button type="button" class="btn btn-view-image">
        <a href="../affiche1.vue"> Afficher l'image 1</a>
      </button>

      <button type="button" class="btn btn-view-image">
        <a href=""> Afficher l'image 2</a>
      </button>

      <button type="button" class="btn btn-view-image">
        <a href=""> Afficher l'image 3</a>
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

a {
  color: aliceblue;
}

.box {
  margin: 25px auto;
  background-color: burlywood;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  margin: auto 5px;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  background-color: coral;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.btn:hover {
  background-color: cornflowerblue;
  box-shadow: 1px 1px 6px lightgray;
}
</style>
