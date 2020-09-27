<template>
  <div>
    <BackgroundImage />
    <Layout>
      <Loader :isLoading="isLoading" v-if="isLoading" />
      <Result
        :circumference="circumference"
        :height="height"
        v-if="showResult"
      />
      <div v-if="!isLoading && !showResult">
        <TextSection>
          <h1>Enter measurements</h1>
          <p>
            Just enter the measurements of your tree, hit the button and see how
            many of us critters live there
          </p>
          <div class="inputWrapper">
            <div class="flexParent">
              <div class="flexChild">
                <p>Circumference {{ circumference }} m</p>
                <input
                  v-model.number="circumference"
                  type="range"
                  min="1"
                  max="50"
                />
              </div>
              <div class="flexChild">
                <p>Height {{ height }} m</p>
                <input v-model.number="height" type="range" min="1" max="100" />
              </div>
            </div>
          </div>
          <button v-on:click="setLoading">
            Get amount of bugs
          </button>
        </TextSection>
      </div>
    </Layout>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
import Result from '../components/Result.vue';
import BackgroundImage from '../components/BackgroundImage.vue';
import Layout from '../components/Layout.vue';
import TextSection from '../components/TextSection.vue';

export default {
  name: 'Critters',
  components: {
    BackgroundImage,
    Layout,
    Loader,
    Result,
    TextSection,
  },
  data() {
    return {
      height: 1,
      circumference: 1,
      isLoading: false,
      showResult: false,
    };
  },
  methods: {
    setLoading: function() {
      this.isLoading = true;
      window.setTimeout(() => {
        this.isLoading = false;
        this.showResult = true;
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.inputWrapper {
  margin: 20px 0;
}

.flexParent {
  display: flex;
  flex-direction: column;
  .flexChild {
    display: flex;
    flex-direction: column;
    p {
      padding-right: 10px;
    }
    input {
      appearance: none;
      height: 8px;
      background: #fff;
      outline: none;
      opacity: 0.7;
      transition: opacity 0.2s;
      border-radius: 10px;
      border: 1px solid $green;
    }
    input:hover {
      opacity: 1;
    }
    input::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: $green;
      cursor: pointer;
    }

    input::-moz-range-thumb {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: $green;
      cursor: pointer;
    }
  }
}
</style>
