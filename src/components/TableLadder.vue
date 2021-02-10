<template>
  <div class="tableLadder">
    <table class="table table-striped table-small">
      <thead>
        <tr>
          <th>nama</th>
          <th>Kata Per Menit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.kpm }}</td>
        </tr>
      </tbody>
    </table>
    <b-button @click="getLadder">coba</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getLadder();
  },
  methods: {
    getLadder() {
      fetch("https://seberapa-cepat-default-rtdb.firebaseio.com/data.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const result = [];
          for (const id in data) {
            result.push({ id: id, name: data[id].name, kpm: data[id].kpm });
          }
          result.sort((a, b) => parseFloat(b.kpm) - parseFloat(a.kpm));
          this.items = result;
          
        });
    },
  },
};
</script>

<style>
.tableLadder {
  height: 200px;
  overflow: auto;
}
</style>
