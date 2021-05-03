<template>
  <div>The component will appear here</div>
</template>

<script>
import PivotTable from 'webdatarocks'
export default {
  props: {
    afterchartdraw: Function,
    aftergriddraw: Function,
    beforegriddraw: Function,
    beforetoolbarcreated: Function,
    cellclick: Function,
    celldoubleclick: Function,
    componentFolder: String,
    customizeCell: Function,
    customizeContextMenu: Function,
    datachanged: Function,
    dataerror: Function,
    datafilecancelled: Function,
    dataloaded: Function,
    fieldslistclose: Function,
    fieldslistopen: Function,
    filterclose: Function,
    filteropen: Function,
    fullscreen: Function,
    global: Object,
    height: [String, Number],
    loadingdata: Function,
    loadinglocalization: Function,
    loadingolapstructure: Function,
    loadingreportfile: Function,
    localizationerror: Function,
    localizationloaded: Function,
    olapstructureerror: Function,
    olapstructureloaded: Function,
    openingreportfile: Function,
    querycomplete: Function,
    queryerror: Function,
    ready: Function,
    report: [String, Object],
    reportchange: Function,
    reportcomplete: Function,
    reportfilecancelled: Function,
    reportfileerror: Function,
    reportfileloaded: Function,
    runningquery: Function,
    toolbar: Boolean,
    update: Function,
    width: [Number, String]
  },
  setup () {
    const table = null
    const customizeToolbar = (toolbar) => {
      // get all tabs
      if (this.toolbar) {
        const tabs = toolbar.getTabs()
        toolbar.getTabs = function () {
          // There will be two new tabs at the beginning of
          // the Toolbar
          tabs.unshift({
            id: 'tab-expand',
            title: 'Expand',
            handler: expandAllData,
            icon: this.icons.fullscreen
          })
          // CUSTOM =====================
          // delete tabs[0] // Expand
          // DEFAULT ====================
          // delete tabs[1] // Connect
          // delete tabs[2] // Open
          // delete tabs[4] // Save
          // delete tabs[4] // Export
          // delete tabs[5] // Format
          // delete tabs[6] // Options
          // delete tabs[7] // Fields
          // delete tabs[8] // Fullscreen
          return tabs
        }
      }
      const expandAllData = () => {
        this.table.expandAllData(true)
      }
    }

    return { customizeToolbar, table }
  },
  mounted () {
    this.table = new PivotTable({
      ...this.$props,
      container: this.$el,
      beforetoolbarcreated: this.customizeToolbar
    })
  },
  beforeUpdate () {
    return false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~webdatarocks/webdatarocks.min.css';
</style>
