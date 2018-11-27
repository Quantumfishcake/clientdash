<template>
 <div class="row toprow">
    <div class='col-md-4 pl-5'>
      <img src='../../assets/images/download.svg' />
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7' >
      <div class='toprow-grey'>ACTIVE SEO KEYWORDS</div>
      <div class='toprow-blk'>{{SEO}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>ACTIVE PPC KEYWORDS</div>
      <div class='toprow-blk'>{{PPC}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'># OF PRODUCTS</div>
      <div class='toprow-blk'>{{numprod}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>LAUNCH DATE</div>
      <div class='toprow-blk'>{{launchdate}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
  name: 'Row1',
 data() {
   return {
 
     SEO: this.data && this.data.data && this.data.data['active seo keywords'],
     PPC: this.data && this.data.data && this.data.data['active ppc keywords'],
     numprod: this.data && this.data.data && this.data.data['number of products'],
     launchdate: this.data && this.data.data && this.data.data['launch date']
   }
 }
}
</script>