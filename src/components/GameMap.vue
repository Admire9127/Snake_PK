<template>
  <div ref="parent" class="gamemap">
    <canvas ref="canvas" tabindex="0"></canvas>
  </div>

</template>

<script>

import {onMounted, ref} from "vue";
import {GameMap} from "@/assets/scripts/GameMap";
export default {
  name: "GameMap",
  setup(){
    let parent = ref(null);
    let canvas = ref(null);

    onMounted(function (){
      new GameMap(canvas.value.getContext('2d'),parent.value);
    })

    return {
      parent,
      canvas,
    }
  }
}
</script>

<style scoped>
.gamemap{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>