<template>
  <div id="app" class="container-fluid">
     <header class="mb-5">
       <h1>Formulario  Para Compra de  <span class="font-weight-bold">Pacotes e Adesivos</span></h1>
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
      height: 200px;
    }
    h1{
      position: absolute;
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
   @media (max-width: 991.98px){
     h1{
       position: absolute;
       left: 40px;
       font-size: 20px;
       margin-right: 20px;
     }
     span{
       word-break: break-word;
     }
   }
</style>
