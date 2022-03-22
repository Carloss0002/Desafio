<template>
  <div id='Confirmar'>
      <div>
          <h2>Confira o seu Pedido</h2>
            
           <p>Produtos Pedidos: {{Produto}}</p> 
                <hr>
           <p>Quantidade {{Total}}</p>     

          
      </div>

       <div class="botaoEnviar">

         
          <router-link to="/" tag="button">Alterar Pedido</router-link>
          <router-link to="/" tag="button">Enviar pedido</router-link>
       
       </div>
    
  </div>
</template>

<script>
export default {
   name: 'Confirmar', 
   props:['Produto', 'Total'],
   }
</script>

<style scoped>
   #Confirmar{
     margin-top: 80px;
     text-align: center;
   }
   h2{
     font-size: 40px;
   }
   p{
     font-size: 20px;
     font-weight: 200;
   }
   button{
     background: rgb(47, 54, 118);
     border: none;
     color: white;
     width: 200px;
     height: 50px;
     margin-left: 20px;
     margin-top: 35px;
     margin-right: 10px;
     font-size: 20px;
   }
   span{
      font-size: 25px;
      font-weight: bold;
   }
   hr{
     width: 200px;
   }
  .botaoEnviar{
        height: 100px;
        margin-top: 40px;
        text-align: center;
    }
</style>