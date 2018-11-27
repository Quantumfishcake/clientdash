
<template>
 <div class="row bg-w">
  
   <div style='position: relative; width: 100%;'>
    <chart />
    </div>



    

       
  </div>
 
</template>

<script>
  import chart from '../chart.js'

export default {
  
  name: 'Row3',
  props: {
    message: String
  },
  components: {
    chart 
  }
}
</script>