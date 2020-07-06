<template>
  <div class="editor">
    <vue-editor v-model="content" />
    <h1 class="mt-10">Preview</h1>
    <p>{{ content }}</p>
    <p v-html="content"></p>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  components: { VueEditor },
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
