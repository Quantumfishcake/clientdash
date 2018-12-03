<template>
     <div class="row bg-w m-0">
   <table class="table">
  <thead>
    <tr>
      <th scope="col" class='mid-txt'>Landing Page</th>
      <th scope="col" class='mid-txt'>Sessions</th>
      <th scope="col" class='mid-txt'>Transactions</th>
      <th scope="col" class='mid-txt'>Revenue</th>
    </tr>
  </thead>
  <tbody class='table-data'>
    <tr v-for="(item, index) in topPerforming" :key='index'>
      <th scope="row" >{{index + 1}}.{{item.name}}</th>
      <td>{{item.sessions}}</td>
      <td>{{item.transactions}}</td>
      <td>{{item.revenue}}</td>
    </tr>
  </tbody>
</table>
  </div>

</template>

<script>

import Vue from 'vue';

export default {
  name: 'TopPerforming',
  computed: {
    topPerforming() {
      return this.$store.state.topPerforming
    }
  },
}
</script>

