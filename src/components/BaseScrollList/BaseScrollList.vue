<template>
  <div class="base-scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor,
      }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="{
          width: `${columnWidths[i]}px`,
          ...headerStyle[i]
        }"
        v-html="headerItem"
        :align="aligns[i]"
      />
    </div>
    <div
      class="base-scroll-list-rows"
      v-for="(rowData, rowIndex) in rowsData"
      :key="rowIndex"
      :style="{
        height: `${rowHeights[rowIndex]}px`,
        backgroundColor: rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
        fontSize: `${actualConfig.rowFontSize}px`,
        color: actualConfig.rowColor,
      }"
    >
      <div
        class="base-scroll-list-columns"
        v-for="(colData, colIndex) in rowData"
        :key="colData + colIndex"
        :style="{
          width: `${columnWidths[colIndex]}px`,
          ...rowStyle[colIndex]
        }"
        v-html="colData"
        :align="aligns[colIndex]"
      />
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import useScreen from '../../hooks/useScreen'
  import cloneDeep from 'lodash/cloneDeep'
  import assign from 'lodash/assign'

  const defaultConfig = {
    // 标题数据，格式：['a','b','c']
    headerData: [],
    // 标题样式，格式：[{},{},{}]
    headerStyle: [],
    // 行样式
    rowStyle: [],
    // 行背景色
    rowBg: [],
    // 标题的背景色
    headerBg: 'rgb(90,90,90)',
    // 标题的高度
    headerHeight: 35,
    // 标题是否展示序号
    headerIndex: false,
    // 序号列标题的内容
    headerIndexContent: '#',
    // 序号列标题的样式
    headerIndexStyle: {
      width: '50px'
    },
    // 序号列内容的样式
    rowIndexStyle: {
      width: '50px'
    },
    // 数据项，二维数组
    data: [],
    // 每页显示数据量
    rowNum: 10,
    // 居中方式
    aligns: [],
    headerFontSize: 28,
    rowFontSize: 28,
    headerColor: '#fff',
    rowColor: '#000'
  }
  export default {
    name: 'BaseScrollList',
    props: {
      config: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const id = `base-scroll-list-${uuidv4()}`
      const { width, height } = useScreen(id)
      const actualConfig = ref([])
      const headerData = ref([])
      const headerStyle = ref([])
      const rowStyle = ref([])
      const columnWidths = ref([])
      const rowBg = ref([])
      const rowHeights = ref([])
      const rowsData = ref([])
      const rowNum = ref(defaultConfig.rowNum)
      const aligns = ref([])

      const handleHeader = (config) => {
        const _headerData = cloneDeep(config.headerData)
        const _headerStyle = cloneDeep(config.headerStyle)
        const _rowStyle = cloneDeep(config.rowStyle)
        const _rowsData = cloneDeep(config.data)
        const _aligns = cloneDeep(config.aligns)
        if (_headerData.length === 0) {
          return
        }
        if (config.headerIndex) {
          _headerData.unshift(config.headerIndexContent)
          _headerStyle.unshift(config.headerIndexStyle)
          _rowStyle.unshift(config.rowIndexStyle)
          _rowsData.forEach((rows, index) => {
            rows.unshift(index + 1)
          })
          _aligns.unshift('center')
        }
        // 动态计算header中每一列的宽度
        let usedWidth = 0
        let usedColumnNum = 0
        // 判断是否自定义width
        _headerStyle.forEach(style => {
          // 如果自定义width，则按照自定义width进行渲染
          if (style.width) {
            usedWidth += +style.width.replace('px', '')
            usedColumnNum++
          }
        })
        // 动态计算列宽时，使用剩余的宽度除以剩余的列数
        const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum)
        const _columnWidth = new Array(_headerData.length).fill(avgWidth)
        _headerStyle.forEach((style, index) => {
          // 如果自定义width，则按照自定义width进行渲染
          if (style.width) {
            const headerWidth = +style.width.replace('px', '')
            _columnWidth[index] = headerWidth
          }
        })

        columnWidths.value = _columnWidth
        headerData.value = _headerData
        headerStyle.value = _headerStyle
        rowStyle.value = _rowStyle
        rowsData.value = _rowsData
        aligns.value = _aligns

        console.log(_aligns, aligns.value)
      }

      const handleRows = (config) => {
        // 动态计算每行数据的高度
        const { headerHeight } = config
        rowNum.value = config.rowNum
        const unusedHeight = height.value - headerHeight
        // 如果rowNum大于实际数据长度，则以实际数据长度为准
        if (rowNum.value > rowsData.value.length) {
          rowNum.value = rowsData.value.length
        }
        const avgHeight = unusedHeight / rowNum.value
        rowHeights.value = new Array(rowNum.value).fill(avgHeight)

        // 获取行背景色
        if (config.rowBg) {
          rowBg.value = config.rowBg
        }
      }

      onMounted(() => {
        const _actualConfig = assign(defaultConfig, props.config)
        // 赋值rowsData
        rowsData.value = _actualConfig.data || []
        handleHeader(_actualConfig)
        handleRows(_actualConfig)

        actualConfig.value = _actualConfig
      })

      return {
        id,
        headerData,
        headerStyle,
        rowStyle,
        aligns,
        columnWidths,
        rowHeights,
        rowsData,
        rowBg,
        actualConfig
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-scroll-list {
    width: 100%;
    height: 100%;

    .base-scroll-list-text {
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }

    .base-scroll-list-header {
      display: flex;
      align-items: center;
      .header-item {
      }
    }

    .base-scroll-list-rows {
      display: flex;
      align-items: center;

      .base-scroll-list-columns {
      }
    }
  }
</style>
