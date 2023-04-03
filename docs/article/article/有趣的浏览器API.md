# 有趣的浏览器API

## [SpeechSynthesisUtterance](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesisUtterance)

用于语音播报，可实现项目预警，语音提示等。

::: details 点击展开

  ```js
    // 播报语音
    function playRadio() {
      const voiceText = 'xx系统出现预警，请及时处理'
      const toSpeak = new SpeechSynthesisUtterance(voiceText);
      window.speechSynthesis.speak(toSpeak)
    }
    // 暂停
    function pauseRadio() {
      window.speechSynthesis.pause();
    }
    // 重新播报
    function resumeRadio() {
      window.speechSynthesis.resume();
    }
    // 停止
    function stopRadio() {
      window.speechSynthesis.cancel();
    }
  ```

:::

## [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

用于监听目标元素是否进入可视区域，可实现图片懒加载等。
