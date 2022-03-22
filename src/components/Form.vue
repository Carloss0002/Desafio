<template>
  <div id="Home">
      <!--Inicio Container-->
        <div class="capsulaFormulario text-center"> 
            <!--Inicio Formulário-->
              <div class="adesivos mb-5">
                 <h2>Quais Adesivos</h2> 
                    <div class="formulario" >
                            
                        <label>
                          <input type="checkbox"  value="react" v-model="produtos">
                            React
                        </label>
                            
                        <label>
                          <input class="ml-3" type="checkbox"  value="vue" v-model="produtos">
                            Vue
                        </label>
        
                        <label for="Angular">    
                         <input type="checkbox" class="ml-3" id="Angular" value="angular" v-model="produtos">
                            Angular
                        </label>
                    </div>
                </div>    
                    <!--Fim Formulario-->
                    
                    <!--Area do contador de produtos-->
                    <div class="quantidade mb-3">
        
                    <h2>Quantos adesivos de cada?</h2>
                        
                        <button class="btn" v-on:click="decrementarQuantidade()" :disabled="!quantidade">-</button>
                         <input type="number" min="1" :placeholder="quantidade" disabled>
                        <button class="btn" @click="incrementarQuantidade()">+</button>
                        
                        
                        <p id="res"></p>
                    </div> 
                </div>
                    
                    <!--inicio do TextArea-->
                    <div class="areaTexto"> 
                        <label for="texto">Alguma Observação?</label><br>
                        
                        <textarea id="texto" class="wPorcentagem" rows="10" placeholder="Alguma dúvida? Recado?" v-model="texto"></textarea>
                    </div>
                    
                    <!--Button enviar-->
                    <div class="botaoEnviar">
            
                        <button class="btn" :disabled="!produtos.length" @click="enviarConteudo">Enviar</button>
                        
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
          incrementarQuantidade(){
              this.quantidade++
          },
          decrementarQuantidade(){
             if(this.quantidade > 0){
                this.quantidade--
             }
          },
          enviarConteudo(){ 
           let texto = document.getElementById('res')    
           if(this.quantidade == 0){
             texto.innerText = 'Este campo é muito importante'
           }   
           else{
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
        color: white;
    }
    input{
        width: 30px;
        height: 15px;
        text-align: center;
    }
     input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number]{
        width: 40px;
        height: 35px;
    }
    textarea{
        margin: 15px;
    }
    p{
        
        color: red;
        font-weight: 300;
    }
    .wPorcentagem{
        width: 90%;
    }
    .capsulaFormulario{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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