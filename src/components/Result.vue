<template>
  <div>
    <TextSection>
      <div v-if="range == 1">
        <h1>{{ amountOfBugs }} bugs!</h1>
        <p>
          Whoa, that's alot ... The area of your tree is {{ sqm }} square
          meters. Not every single tree is full of bugs, but there's still a
          chance that up to {{ amountOfBugs }} of us critters are living in or
          on your tree.
        </p>
      </div>
      <div v-else>
        <h1>OMG run!</h1>
        <p>
          There might be {{ amountOfBugs }} bugs crawling around in your tree
          right now! Not every tree is full of us bugs, but who knows ...
        </p>
      </div>
      <DefaultLink to="/">Go again</DefaultLink>
      <AnimationTwo v-if="range === 1" />
      <AnimationOne v-if="range === 2" />
    </TextSection>
  </div>
</template>

<script>
import TextSection from '../components/TextSection.vue';
import DefaultLink from '../components/DefaultLink.vue';
import AnimationOne from '../components/AnimationOne.vue';
import AnimationTwo from '../components/AnimationTwo.vue';

export default {
  name: 'Result',
  props: {
    isLoading: {
      type: Boolean,
    },
    circumference: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  components: {
    AnimationOne,
    AnimationTwo,
    DefaultLink,
    TextSection,
  },
  data() {
    return {
      sqm: 0,
      amountOfBugs: 0,
      range: 0,
    };
  },
  created() {
    this.setSqm();
    this.setAmountOfBugs();
    this.setRange();
  },
  methods: {
    setSqm: function() {
      this.sqm = this.height * this.circumference;
    },
    setAmountOfBugs: function() {
      this.amountOfBugs = this.sqm * 50;
    },
    setRange: function() {
      if (this.amountOfBugs > 125000) {
        this.range = 2;
      } else {
        this.range = 1;
      }
    },
  },
};
</script>

<style></style>
