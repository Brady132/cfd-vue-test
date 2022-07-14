<template>
  <div class="box">
    <h1>Bienvenue 👋</h1>
    <p>Sur la page du test</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
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
</style>
