<template>
  <div class="main">
    <b-container>
      <b-row>
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="12" md="auto">
              <vue-typed-js
                :strings="[
                  'Ukur Kecepatan Ketikanmu!',
                  'Adu Tekan Dengan Temanmu!',
                  'Seberapa Cepat Jarimu!',
                ]"
                :loop="true"
                :backDelay="500"
                :typeSpeed="100"
              >
                <h1><span class="typing"></span></h1> </vue-typed-js
            ></b-col>
          </b-row>
        </b-container>
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="12" md="auto" class="pt-2">
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Ukur dan buktikan bahwa kamu memiliki kecepatan diatas
                  rata-rata
                </p>
                <footer class="blockquote-footer">
                  Ivan Fabriano Syahputra <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="bv-example-row shadow p-3 mb-5 bg-white rounded ">
          <b-row align-v="center">
            <b-col align="center" class="pt-3">
              <div class="card center" style="width: 18rem;">
                <img
                  class="card-img-top"
                  src="../assets/ketik.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Tes Kecepatan Ketik</h5>
                  <p class="card-text">
                    Lihat seberapa cepat kamu mengetik per satu menitnya.
                    Jadilah yang tercepat dan diatas rata rata kebanyakan orang.
                  </p>
                  <b-btn variant="primary" to="/typing"
                    >Tes Kecepatan Ketik</b-btn
                  >
                </div>
              </div>
            </b-col>
            <b-col align="center" class="pt-3">
              <div class="card" style="width: 18rem;">
                <img
                  class="card-img-top"
                  src="../assets/versus.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Adu Kecepatan Tekan</h5>
                  <p class="card-text">
                    Lihat seberapa banyak kamu menekan sebuah tombol dalam satu
                    menit. Adu dengan temanmu. Jadilah yang tercepat.
                  </p>
                  <b-btn variant="primary" to="/pushing"
                    >Tes Kecepatan Tekan</b-btn
                  >
                </div>
              </div>
            </b-col>
            <b-col align="center" class="pt-3">
              <div class="card" style="width: 18rem;">
                <img
                  class="card-img-top"
                  src="../assets/klik.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Tes Kecepatan Klik</h5>
                  <p class="card-text">
                    Lihat seberapa cepat kamu dapat melakukan klik dengan mouse
                    mu. Hitung dalam satuan menit. Jadilah salah satu tercepat
                  </p>
                  <a href="#" class="btn btn-primary">Tes Kecepatan Klik</a>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
    <div class="w-100 p-3 bg-dark text-light">
      <footer-cont></footer-cont>
    </div>
  </div>
</template>

<script>
import FooterCont from "../components/FooterCont.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { FooterCont },
};
</script>

<style scoped>
.abstract {
  display: inline-flex;
  margin-top: 1000;
}
</style>
