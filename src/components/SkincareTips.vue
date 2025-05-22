<template>
  <div class="skincare-tips">
    <h2>Skincare Tips</h2>
    <ul>
      <li>Always apply sunscreen before going outside.</li>
      <li>Stay hydrated by drinking plenty of water.</li>
      <li>Cleanse your face twice a day to remove impurities.</li>
      <li>Moisturize daily to keep your skin hydrated.</li>
      <li>Exfoliate once a week to remove dead skin cells.</li>
      <li>Use products suitable for your skin type.</li>
      <li>Don't forget to remove makeup before sleeping.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkincareTips',
};
</script>

<style scoped>
.skincare-tips {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.skincare-tips h2 {
  color: #333;
}

.skincare-tips ul {
  list-style-type: none;
  padding: 0;
}

.skincare-tips li {
  margin: 10px 0;
  font-size: 16px;
  color: #555;
}
</style>