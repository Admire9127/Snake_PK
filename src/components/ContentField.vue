<template>
  <div class="container Field">
    <div class="card">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentField"
}
</script>

<style scoped>
.Field{
  margin-top: 20px;
}
</style>