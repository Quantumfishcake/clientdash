<template>
 <div class='row'>
<b-tabs>
  <b-tab title="TOP PERFORMING LANDING PAGES"  :title-link-class="'tab-title-class'" active >
    <TopPerforming />
  </b-tab>
  <b-tab title="MONTHLY INSIGHTS" :title-link-class="'tab-title-class'">
     <Monthly />
  </b-tab>
  <b-tab title="SESSIONS BY DEVICE" :title-link-class="'tab-title-class'">
    <Sessions />
  </b-tab>
</b-tabs>
</div>

</template>

<script>

import Vue from 'vue';
import TopPerforming from './Row5-tabs/Top-performing.vue'
import Sessions from './Row5-tabs/Sessions.vue'
import Monthly from './Row5-tabs/Monthly-insights.vue'

export default {
  name: 'Row5',
  components: {
      TopPerforming,
      Sessions,
      Monthly
  }
}
</script>






