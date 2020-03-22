<template>
  <div class="timeline container">
    <h1>{{title}}</h1>
    <!-- Latest update -->
    <div class="time">
      <vue-timeline-update
        :date="new Date('2020-02-26')"
        title="v2.2.0 - Initial D"
        :description="desc"
        thumbnail="https://www.growthbunker.dev/images/vuetimeline/macross.jpg"
        category="news"
        icon="code"
        color="red"
      />

      <!-- Another update -->
      <vue-timeline-update
        :date="new Date('2016-11-22')"
        title="v2.1.0 - Hunter X Hunter"
        description="Today I am thrilled to announce the release of Vue.js 2.1.0."
        thumbnail="https://www.growthbunker.dev/images/vuetimeline/macross.jpg"
        category="announcement"
        icon="code"
        color="turquoise"
      />

      <!-- Yet another update -->
      <vue-timeline-update
        :date="new Date('2016-09-30')"
        title="v2.0.0 - Ghost in the Shell"
        description="Today I am thrilled to announce the release of Vue.js 2.0.0"
        thumbnail="https://www.growthbunker.dev/images/vuetimeline/macross.jpg"
        category="announcement"
        icon="code"
        color="white"
        is-last
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'timeline',
    desc:
      'Yesterday we just celebrated the 5th Vueniversary — today we are excited to announce the release of Vue 2.6 !In the past year, we spent <br> a lot of time working on the new CLI and prototyping for 3.0. As a result, Vue core 2.x hasn’t received major updates in quite a while. It’s about time! This release combines a number of substantial improvements, internal changes and new features which are highlighted in this post. For full details, make sure to also check out the full release note on GitHub.',
  }),
};
</script>

<style lang="scss" scoped>
.time {
  width: 50vw;
}
</style>
