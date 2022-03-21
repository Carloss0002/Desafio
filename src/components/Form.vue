<template>
  <div id="Home">
      <!--Inicio Container-->
        <div class="capsulaFormulario"> 
            <!--Inicio Formulário-->
              <div class="adesivos">
                 <h2>Quais Adesivos</h2> 
                    <div class="formulario">
                            
                        <label>
                          <input type="checkbox"  value="react" v-model="produtos">
                            React
                        </label>
                            
                        <label>
                          <input type="checkbox"  value="vue" v-model="produtos">
                            Vue
                        </label>
        
                        <label for="Angular">    
                         <input type="checkbox" id="Angular" value="angular" v-model="produtos">
                            Angular
                        </label>
                    </div>
                </div>    
                    <!--Fim Formulario-->
                    
                    <!--Area do contador de produtos-->
                    <div class="quantidade">
        
                    <h2>Quantos adesivos de cada?</h2>
                        
                        <button @click="quantidade++">+</button>
                        <input type="number" min="1" :placeholder="quantidade" disabled>
                        <button v-on:click="quantidade--">-</button>
                        
                        
                        <p id="res"></p>
                    </div> 
                </div>
                    
                    <!--inicio do TextArea-->
                    <div class="areaTexto"> 
                        <label for="texto">Alguma Observação?</label><br>
                        
                        <textarea id="texto" cols="170" rows="10" placeholder="Alguma dúvida? Recado?" v-model="texto"></textarea>
                    </div>
                    
                    <!--Button enviar-->
                    <div class="botaoEnviar">
            
                        <button @click="enviarConteudo">Enviar</button>
                        
                    </div>
                    
  </div>
</template>

<script>
export default {
      name: 'Home',

      data(){
          return{
              produtos: [],
              quantidade: 0,
              texto: '',
             
          }
      },
      methods:{
          enviarConteudo(){
               
               /*Variavel texto*/
               let texto = document.getElementById('res') 
               /*if Reduzido Para economizar linhas de Codigo*/ 
               if(this.produtos === [] || this.quantidade === 0 || this.quantidade < 0){
                   
                   texto.innerText='Algo está errado. Por Favor Confira seu Pedido'

                   } else{
                       this.$router.push(`/Confirmar/${this.produtos}/${this.quantidade}`)
                       }
          }
      }
}
</script>

<style scoped>
    #Home{
        margin-left: 20px;
    }
    h2{
        font-size: 36px;
    }
    label{
        font-size: 30px;
    }
    button{
        background: rgb(47, 54, 118);
        border: none;
        color: white;
        height: 20px;
        width: 30px;
        font-weight: 900;
    }
    input{
        width: 25px;
        height: 15px;
        text-align: center;
    }
     input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    textarea{
        margin: 15px;
    }
    p{
        
        color: red;
        font-weight: 300;
    }
    .capsulaFormulario{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .adesivos{
        display: flex;
        flex-direction: column;
    }
    .botaoEnviar{
        margin-left: -20px;
        background: #dde2e8;
        height: 100px;
        margin-top: 20px;
        text-align: end;
    }
    .botaoEnviar button{
         width: 110px;
         height: 50px;
         margin-right: 40px;
         margin-top: 25px;
         border-radius: 10px;
    }
    .formulario{
        display: flex;
        flex-direction: row;
    }
    .areaTexto{
        margin-top: 40px;
    }
</style>