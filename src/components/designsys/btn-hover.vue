<template>
  <div class="btn-hover">
      <a href="#" role="button">Hover</a>

  </div>
</template>


<style lang="scss" scoped>
.btn-hover {
    position: relative;
    z-index: 5;
    background: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    font-size: 2rem;
    padding: 15px;

    a {
        position: relative;
        overflow: hidden;
        color: #272727;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1rem 2rem;
        z-index: 3;

        &::before {
            content: '';
            position: absolute;
            top: 3px;
            bottom: 3px;
            left: 3px;
            right: 3px;
            background: #fff;
            border: #272727 solid 4px;
            z-index: -1;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right:0;
            background: #ff652f;
            // transform: rotate(-90deg) translate(-50%, -100%);
            // transform-origin: top left;
            transform:  translate(-75%, 50%);
            transition: transform 300ms;
            z-index: -2;
        }

        &:hover::after {
            transform: rotate(0) translate(0, 0);
        }
    }
}


</style>
