<template>
 <div class="row toprow">
    <div class='col-md-4 pl-5'>
      <img src='../../assets/images/download.svg' />
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7' >
      <div class='toprow-grey'>ACTIVE SEO KEYWORDS</div>
      <div class='toprow-blk'>{{data.data['active seo keywords']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>ACTIVE PPC KEYWORDS</div>
      <div class='toprow-blk'>{{data.data['active ppc keywords']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'># OF PRODUCTS</div>
      <div class='toprow-blk'>{{data.data['number of products']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>LAUNCH DATE</div>
      <div class='toprow-blk'>{{data.data['launch date']}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Row1',
  computed: {
    data() {
      return this.$store.state.data
    },
  },

}

</script>