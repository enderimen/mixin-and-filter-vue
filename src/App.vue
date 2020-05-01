<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <hr />
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p>{{ text | reverseText }}</p>
        <hr />
        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>{{ text }} ({{ text | countLetter }})</p>
        <hr />
        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->

        <p>{{ reverseTextComputed }}</p>

        <p>{{ countLetterComputed }}</p>

        <hr />
        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
      </div>
    </div>
  </div>
</template>
<script>
import { transformMixin } from "./transformMixin";

export default {
  data() {
    return {
      text: "Hello filter!"
    };
  },
  filters: {
    reverseText: text => {
      return text
        .split("")
        .reverse()
        .join("");
    }
  },
  mixins: [transformMixin]
};
</script>
<style>
</style>
