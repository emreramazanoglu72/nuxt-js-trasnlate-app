<template>
  <div class="container mt-4 p-0 card p-0">
    <div class="card-header">Trasnlate App</div>
    <div class="form-group row p-2 justify-content-center">
      <div class="col-sm-5">
        <label for=""> Dil Seçin Lütfen</label>
        <select v-model="selectTranslateLang" class="form-control mb-2">
          <option :disabled="selectTranslate == 'tr'" value="tr">Türkçe</option>
          <option :disabled="selectTranslate == 'en'" value="en">İngilizce</option>
          <option :disabled="selectTranslate == 'de'" value="de">Almanca</option>
          <option :disabled="selectTranslate == 'ru'" value="ru">Rusca</option>
        </select>
        <textarea
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="trasnlateText"
        />
      </div>
      <div class="col-sm-1 text-center">
        <img src="~/static/repeat.png" @click="reverse" height="25" alt="" />
      </div>
      <div class="col-sm-5">
        <font-awesome-icon icon="repeat" />

        <font-awesome-icon icon="repeat" />
        <label for="">Çevrilecek Dil Seçin Lütfen </label>
        <select v-model="selectTranslate" class="form-control mb-2">
          <option :disabled="selectTranslateLang == 'tr'" value="tr">Türkçe</option>
          <option :disabled="selectTranslateLang == 'en'" value="en">İngilizce</option>
          <option :disabled="selectTranslateLang == 'de'" value="de">Almanca</option>
          <option :disabled="selectTranslateLang == 'ru'" value="ru">Rusca</option>
        </select>
        <textarea
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="responseText"
          disabled
        />
      </div>
    </div>
    <button
      class="btn btn-dark w-75 align-self-center btn-md mb-4"
      :disabled="trasnlateText.length < 3"
      @click="translate"
    >
      Çevir
    </button>
  </div>
</template>

<script>
import TrasnlateRequest from "~/modules/TrasnlateRequest";

export default {
  name: "TrasnlateArea",
  data() {
    return {
      selectTranslateLang: "tr",
      selectTranslate: "en",
      trasnlateText: "",
      responseText: "",
    };
  },
  methods: {
    async translate(e) {
      const response = await TrasnlateRequest(
        this.trasnlateText,
        this.selectTranslate,
        this.selectTranslateLang
      );
      this.responseText = response;
      console.log("keywords", response);
    },
    reverse() {
      var oldLang = this.selectTranslate;
      var oldLangT = this.selectTranslateLang;

      var oldResponse = this.responseText;
      var oldText = this.trasnlateText;

      this.selectTranslate = oldLangT;
      this.selectTranslateLang = oldLang;

      this.trasnlateText = oldResponse;
      this.responseText = oldText;
    },
  },
};
</script>
