<template>
  <div>
    <BackgroundImage />
    <TreeImage />
    <Layout>
      <TextSection>
        <h1>It's a bugs world</h1>
        <p>
          Hi there! We love trees, that's were we sleep, eat breakfast, dinner
          and lunch, meet our friends, hang out and party! And there can be many
          of us in a single tree .. go on .. find out how many ...
        </p>
        <DefaultLink to="/critters">Let's go</DefaultLink>
      </TextSection>
    </Layout>
  </div>
</template>

<script>
import BackgroundImage from '../components/BackgroundImage.vue';
import Layout from '../components//Layout.vue';
import TextSection from '../components//TextSection.vue';
import DefaultLink from '../components//DefaultLink.vue';
import TreeImage from '../components//TreeImage.vue';

export default {
  name: 'Home',
  components: {
    BackgroundImage,
    DefaultLink,
    Layout,
    TextSection,
    TreeImage,
  },
};
</script>

<style></style>
