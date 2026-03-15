<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
name: 'GuitarChordsPage',

})

</script>

<template>
  <title>Absolutely Understand Chords</title>
  <div class="title text-center">
        Hello World!
    </div>
    
    <div class="chord-card">
        <div class="guitar-grid">
            <div
              v-for="i in 6"
              :key="i"
              class="div"
            >
              <div
                v-for="j in 6"
                :key="j"
                 class="cell"  
                >
                </div>
            </div>
        </div>
    </div>
    <p>¿Qué acorde es este? (Pista: Forma de C)</p>
</template>