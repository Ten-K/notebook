<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      Hello
    </f-text>

    <f-text align="center">
      <f-button round type="primary" class="start" href="/docs/HTML.html">
        😊 快速开始
      </f-button>
      <f-button round href="https://github.com/Tyh2001/vitePress-demo" target="_blank">
        Github
      </f-button>
    </f-text>
  </f-main>
</template>

<style scoped>
.f-main {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.f-button-default {
  margin-left: 10px;
}

.f-text {
  display: block;
  line-height: 40px;
}
.start {
  margin-right: 10px;
}
</style>
