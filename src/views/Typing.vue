<template>
  <div class="main">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8">
          <div
            class="border-bottom-0 mt-3 p-2 rounded-top bg-info text-white shadow"
          >
            <h2>Tes Seberapa Cepat Kamu Mengetik</h2>
          </div>
          <div class="text border border-light p-3 bg-light text-dark shadow">
            <h3 v-if="status">Ketik kata-kata dibawah ini !</h3>
            <h3 v-else>
              Klik Tombol <span class="text-primary"> Mulai </span> Untuk
              Memulai Tes
            </h3>
            <div class=" border mt-3 p-3 rounded ">
              <div v-if="status">
                <b-form-textarea
                  readonly
                  class="border-0"
                  id="textarea-no-resize"
                  v-model="sentence"
                  placeholder="Fixed height textarea"
                  rows="3"
                  no-resize
                ></b-form-textarea>
              </div>
              <div v-else>
                <b-card>
                  <b-skeleton animation="wave" width="85%"></b-skeleton>
                  <b-skeleton animation="wave" width="55%"></b-skeleton>
                  <b-skeleton animation="wave" width="70%"></b-skeleton>
                </b-card>
              </div>
            </div>
            <b-row align-v="center" class=" m-3">
              <b-col>
                <b-icon icon="clock" font-scale="1.5" shift-v="0"></b-icon>
              </b-col>
              <b-col cols="11" align-h="center">
                <b-progress
                  :value="60 - countDown"
                  :max="60"
                  animated
                ></b-progress>
              </b-col>
            </b-row>
            <div>
              <div class="mt-2 p-3">
                <b-form-textarea
                  id="textarea"
                  v-model="message"
                  placeholder="Ketik Disini..."
                  rows="3"
                  no-resize
                  @keyup.enter.space="afterSpace"
                  @keyup.enter.delete="backspace"
                ></b-form-textarea>
              </div>
            </div>
            <b-button
              v-if="status"
              @click="resetGame()"
              variant="success"
              pill
              size="lg"
              >Reset</b-button
            >
            <b-button
              v-else
              @click="startGame()"
              variant="primary"
              pill
              size="lg"
              >Mulai</b-button
            >
          </div>
        </b-col>
        <b-col sm="4">
          <b-row align-h="center">
            <b-col>
              <div
                class="border-bottom-0 mt-3 p-2 rounded-top bg-success text-white shadow w-80"
              >
                <b-row align-h="center">
                  <b-col cols="1">
                    <img
                      src="../assets/trophypng.png"
                      width="45"
                      height="45"
                      alt="logo"
                    />
                  </b-col>
                  <b-col>
                    <h2>Ladderboard</h2>
                  </b-col>
                </b-row>
                <div
                  class="border-bottom-0 mt-1 p-2 rounded-top bg-white text-white shadow w-70"
                >
                  <table-ladder></table-ladder>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col>
              <div
                class="border-bottom-0 mt-3 p-2 rounded-top bg-primary text-white shadow w-70"
              >
                <b-row align-h="center">
                  <b-col class="m-1" cols="1">
                    <img
                      src="../assets/histori.png"
                      width="40"
                      height="40"
                      alt="logo"
                    />
                  </b-col>
                  <b-col>
                    <h2>Playing History</h2>
                  </b-col>
                </b-row>
                <div
                  class="border-bottom-0 mt-1 p-2 rounded-top bg-white text-white shadow w-70"
                >
                  <table-history :history="history"></table-history>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-col cols="1">
      <div>
        <b-modal ref="my-modal" hide-footer title="Hasil Perhitungan Akhir">
          <b-row class="mb-2">
            <b-col class="text-center" cols="12">
              <h1 v-if="!status" class="text-primary">{{ counterTrue }} KPM</h1>
            </b-col>
          </b-row>
          <b-row class="my-2 pl-3">
            <b-col cols="9">
              <h5>
                Kata Benar :
              </h5>
            </b-col>
            <b-col class="text-left "
              ><h5 class="font-weight-bold text-success">
                {{ counterTrue }}
              </h5></b-col
            >
          </b-row>
          <b-row class="my-2 pl-3">
            <b-col cols="9">
              <h5>
                Kata Salah :
              </h5>
            </b-col>
            <b-col class="text-left "
              ><h5 class="font-weight-bold text-danger">
                {{ counterFalse }}
              </h5></b-col
            >
          </b-row>
          <b-row class="my-2 pl-3">
            <b-col cols="9">
              <h5>
                Akurasi :
              </h5>
            </b-col>
            <b-col class="text-left ">
              <h5 v-if="!status" class="font-weight-bold text-success">
                {{ accuracyWord }}
              </h5>
              <b-spinner
                v-else
                variant="secondary"
                small
                label="Small Spinner"
              ></b-spinner>
            </b-col>
          </b-row>
          <b-row class="my-2 pl-3">
            <b-col cols="9">
              <h5>
                Total Karakter :
              </h5>
            </b-col>
            <b-col class="text-left ">
              <h5 v-if="!status" class="font-weight-bold text-success">
                {{ totalWord }}
              </h5>
              <b-spinner
                v-else
                variant="warning"
                small
                label="Small Spinner"
              ></b-spinner>
            </b-col>
          </b-row>
          <b-button
            class="mt-3"
            variant="outline-danger"
            @click="resetGame"
            block
            >Kembali</b-button
          >
          <b-button
            class="mt-2"
            variant="outline-success"
            @click="sendLadder"
            block
            >Masukan Ladderboard</b-button
          >
        </b-modal>
      </div>
    </b-col>
    <div class="w-100 p-3 mt-4 bg-dark text-light">
      <footer-child></footer-child>
    </div>
  </div>
</template>

<script>
import TableLadder from "../components/TableLadder.vue";
import TableHistory from "../components/TableHistory.vue";
import FooterChild from "../components/FooterChild.vue";
export default {
  name: "Typing",
  components: {
    TableLadder,
    TableHistory,
    FooterChild,
  },
  data() {
    return {
      message: "",
      sentence:
        "Adalah aku suka makan apa itu tidak saya akan menanam tangan saya mereka tanpa bila hendak tidur tanpa kerbau hibernasi mengayam membeli kamu nona tinta tanpa penggunaan supaya anda tak mengenal siapa apapun dimanapun hendak sehingga mereka sholat bertuhan andai jika pada hari itu menggunakan",
      arrword: [],
      counterTrue: 0,
      counterFalse: 0,
      index: 0,
      arrmessage: [],
      arrmessageclone: [],
      value: 100,
      countDown: 60,
      status: false,
      statImage: false,
      accuracyWord: 0,
      totalWord: 0,
      history: [],
      counter: 0,
    };
  },
  computed: {},
  created() {
    this.countDownTimer();
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    afterSpace() {
      this.arrmessage = this.message.split(" ");
      if (
        this.arrmessage[this.arrmessage.length - 2] == this.arrword[this.index]
      ) {
        this.counterTrue++;
      } else this.counterFalse++;
      this.index++;
    },
    backspace() {
      this.arrmessageclone = this.message.split(" ");
      if (this.arrmessageclone.length < this.arrmessage.length) {
        this.index--;
        if (
          this.arrmessageclone[this.arrmessageclone.length - 1] ==
          this.arrword[this.index]
        ) {
          this.counterTrue++;
        }
      }
    },
    startGame() {
      this.arrword = this.sentence.split(" ");
      this.status = true;
      this.countDownTimer();
      this.countDown = 60;
      this.counterTrue = 0;
      this.counterFalse = 0;
      this.index = 0;
      this.message = "";
      this.totalWord = 0;
    },
    resetGame() {
      this.hideModal();
      this.status = false;
      this.countDown = 61;
      this.counterTrue = 0;
      this.counterFalse = 0;
      this.message = "";
      this.statImage = false;
      this.index = 0;
    },
    sendLadder() {
      fetch("https://seberapa-cepat-default-rtdb.firebaseio.com/data.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Ivan", kpm: this.counterTrue }),
      });
      this.hideModal();
    },
    countDownTimer() {
      if (this.status) {
        if (this.countDown > 0) {
          setTimeout(() => {
            this.countDown -= 1;
            this.countDownTimer();
          }, 1000);
          if (this.countDown < 20) {
            this.statImage = true;
          }
        } else {
          this.status = false;
          this.statImage = false;
          if (this.counterTrue != 0) {
            this.accuracyWord = Math.round(
              (this.counterTrue / (this.counterTrue + this.counterFalse)) * 100
            );
          } else {
            this.accuracyWord = 0;
          }
          this.totalWord = this.counterTrue + this.counterFalse;
          this.index = 0;
          this.showModal();
          this.counter++;
          this.history.push({
            num: this.counter,
            kpm: this.counterTrue,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.border-primary {
  border-width: 3px !important;
}
</style>
