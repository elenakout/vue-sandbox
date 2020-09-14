<template>
  <div class="editor"></div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    content: '<p>Some initial content</p>',
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.editor {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
