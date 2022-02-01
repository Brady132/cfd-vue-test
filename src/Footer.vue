<template>
  <footer class="footer">
      <p>&copy; 2022 - Designed by CFD Felix</p>
  </footer>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

.footer {
  padding: 50px;
  background-color: goldenrod;
}

.footer p{
    text-align: center;
    font-size: 30px;
}

</style>
