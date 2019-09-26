<template>
  <div class="lines">
      <p>Lorem</p>

  </div>
</template>

<style lang="scss" scoped>
*, *::before, *::after {
    box-sizing: border-box;
}

.lines {
    background: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
}

p {
    color: white;
    font-size: 1.2rem;
    margin: 2rem;
}

p::before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: #ff652f;
}

p::after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: #ff652f;

}
</style>
