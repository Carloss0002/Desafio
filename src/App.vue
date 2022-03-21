<template>
  <div id="app">
     <header>
       <h1>Formulario  Para Compra de  <span>Pacotes e Adesivos</span></h1>
     </header>
    <router-view></router-view>

  </div>
</template>

<script>




export default {

}
</script>

<style scoped>
    *{
      margin: 0;
      padding: 0;
    }
    #app{
      background: #fff;
    }
    header{
      background: rgb(47, 54, 118);
      color: white;
      text-align: center;
      align-content: center;
      height: 200px;
    }
    h1{
      position: absolute;
      width: 1000px;
      height: 64px;
      left: 221px;
      top: 68px;

      font-family: 'Segoe UI';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 64px;
      font-weight: 100;
    }

</style>
