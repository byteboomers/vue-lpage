<template>
  <div>
      <slot
        :subset="subset"
        :totalPages="totalPages"
        :isFirstPage="isFirstPage"
        :isLastPage="isLastPage">
      </slot>
  </div>
</template>

<script>
export default {
  props: ['page', 'data', 'resultsPerPage'],
  computed: {
    subset() {
      const firstEntry = (this.pageInt - 1) * this.resultsPerPageInt;
      const lastEntry = firstEntry + this.resultsPerPageInt;
      return this.data.slice(firstEntry, lastEntry);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.resultsPerPageInt);
    },
    isFirstPage() {
      return this.pageInt === 1;
    },
    isLastPage() {
      return this.pageInt === this.totalPages;
    },
    // Converters
    pageInt() {
      return parseInt(this.page);
    },
    resultsPerPageInt() {
      return parseInt(this.resultsPerPage);
    }
  },
  watch: {
    pageInt(page) {
      if (page < 1) {
        this.$emit('underflow');
      } else if (page > this.totalPages) {
        this.$emit('overflow');
      }
    },
    resultsPerPageInt() {
      if (this.pageInt > this.totalPages) {
        this.$emit('overflow');
      }
    }
  }
};
</script>