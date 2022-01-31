<template>
  <div>
    <div class="container">
      <div class="card-image">
        <img src="../assets/pexels-daria-zlatkina-10007896.jpg" alt="img1" />
      </div>
      <div class="card-image">
        <img src="../assets/pexels-justyna-serafin-10035617.jpg" alt="img2" />
      </div>
      <div class="card-image">
        <img src="../assets/pexels-daria-zlatkina-10007896.jpg" alt="img1" />
      </div>
      <div class="card-image">
        <img src="../assets/pexels-justyna-serafin-10035617.jpg" alt="img2" />
      </div>
      <div class="card-image">
        <img src="../assets/pexels-daria-zlatkina-10007896.jpg" alt="img1" />
      </div>
      <div class="card-image">
        <img src="../assets/pexels-justyna-serafin-10035617.jpg" alt="img2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  margin: 25px 0;
}

.card-image {
  height: 300px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
