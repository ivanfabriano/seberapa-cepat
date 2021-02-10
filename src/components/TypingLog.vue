<template>
  <div class="main">
    <input
      v-model="message"
      placeholder="edit me"
      @keyup.enter.space="afterSpace"
      @keyup.enter.delete="backspace"
    />

    <div class="text">
      <h1>{{ sentence }}</h1>
      <p>Message is: {{ arrmessageclone }}</p>
      <p>Message is: {{ counter }}</p>
      <b-button @click="stringToArray()" variant="primary">Mulai</b-button>
    </div>
              <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row align-v="center" class="mx-2">
              <img v-if="statImage" src="../assets/panik.png" alt="logo" />
              <img
                v-if="status && !statImage"
                src="../assets/semangat.png"
                alt="logo"
              />
              <img
                v-if="!status && !statImage"
                src="../assets/mulai.png"
                alt="logo"
              />
            </b-row>
          </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      sentence:
        "Aku adalah anak gembala selalu riang serta gembira karena aku rajin bekerja tak pernah malas ataupun lelah",
      arrword: [],
      counter: 0,
      index: 0,
      arrmessage: [],
      arrmessageclone: [],
    };
  },
  //   computed:{
  //       coba(){
  //       return this.message === " "
  //         ? false
  //         : true;
  //       },
  //       cek(){
  //           let conter=0;
  //           if(this.coba()){
  //               conter++

  //           }
  //           return conter
  //       }
  //   },
  methods: {
    afterSpace() {
      this.arrmessage = this.message.split(" ");
      if (
        this.arrmessage[this.arrmessage.length - 2] == this.arrword[this.index]
      ) {
        this.counter++;
      }
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
          this.counter++;
        }
      }
    },
    stringToArray() {
      this.arrword = this.sentence.split(" ");
    },
  },
};
</script>

<style scoped></style>
