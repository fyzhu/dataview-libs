<template>
  <div id="imooc-container" ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
  import { debounce } from '../../utils'

  export default {
    name: 'ImoocContainer',
    props: {
      options: Object
    },
    setup(props) {
      const refName = ref(null)
      const width = ref(0)
      const height = ref(0)
      const originalWidth = ref(0)
      const originalHeight = ref(0)
      const ready = ref(false)
      let context, dom, observer

      const initSize = () => {
        return new Promise((resolve) => {
          nextTick(() => {
            // dom = context.$refs[refName]
            dom = refName.value
            // 获取大屏的真实尺寸
            if (props.options && props.options.width && props.options.height) {
              width.value = props.options.width
              height.value = props.options.height
            } else {
              width.value = dom.clientWidth
              height.value = dom.clientHeight
            }
            // 获取画布尺寸
            if (!originalWidth.value || !originalHeight.value) {
              originalWidth.value = window.screen.width
              originalHeight.value = window.screen.height
            }
            // console.log(width.value, height.value, originalWidth.value, originalHeight.value)
            resolve()
          })
        })
      }

      const updateSize = () => {
        if (width.value && height.value) {
          dom.style.width = `${width.value}px`
          dom.style.height = `${height.value}px`
        } else {
          dom.style.width = `${originalWidth.value}px`
          dom.style.height = `${originalHeight.value}px`
        }
      }

      const updateScale = () => {
        // 获取真实的视口尺寸
        const currentWidth = document.body.clientWidth
        const currentHeight = document.body.clientHeight
        // 获取大屏最终的宽高
        const realWidth = width.value || originalWidth.value
        const realHeight = height.value || originalHeight.value
        // console.log(currentWidth, currentHeight)
        const widthScale = currentWidth / realWidth
        const heightScale = currentHeight / realHeight
        dom && (dom.style.transform = `scale(${widthScale}, ${heightScale})`)
      }

      const onResize = async (e) => {
        await initSize()
        updateScale()
      }

      const initMutationObserver = () => {
        const MutationObserver = window.MutationObserver
        observer = new MutationObserver(onResize)
        observer.observe(dom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true
        })
      }

      const removeMutationObserver = () => {
        if (observer) {
          observer.disconnect()
          observer.takeRecords()
          observer = null
        }
      }

      onMounted(async () => {
        ready.value = false
        // context = getCurrentInstance().ctx
        await initSize()
        updateSize()
        updateScale()
        window.addEventListener('resize', debounce(100, onResize))
        initMutationObserver()
        ready.value = true
      })

      onUnmounted(() => {
        window.removeEventListener('resize', onResize)
        removeMutationObserver()
      })

      return {
        refName,
        ready
      }
    }
  }
</script>

<style lang="scss">
  #imooc-container {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    z-index: 999;
  }
</style>
