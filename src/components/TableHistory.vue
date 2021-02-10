<template>
  <div class="tableHistory">
    <table class="table table-striped table-small">
      <thead>
        <tr>
          <th>Percobaan</th>
          <th>Kata Per Menit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, i) in sales" :key="i">
          <th scope="row">{{ sale.num }}</th>
          <td>{{ sale.kpm }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["history"],
  data() {
    return {
      sales: this.history,
    };
  },
  methods: {
    updateTable() {
      this.items = this.history;
    },
  },
};
</script>

<style>
.tableHistory {
  height: 150px;
  overflow: auto;
}
</style>
