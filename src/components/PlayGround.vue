<template>
<div class="playground">
  <game-map></game-map>
</div>
</template>

<script>
import GameMap from "@/components/GameMap.vue";

export default {
  name: "PlayGround",
  components: {GameMap}
}
</script>

<style scoped>
.playground{
  height: 84vh;
  width: 70vw;
  margin: 40px auto;

}
</style>