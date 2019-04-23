# vue-lpage

> Low-level Vue pagination component

![screenshot](./screenshot.png)

## About

This is a low-level, ui-agnostic pagination component.

You pass it an array of data, the current page index and the desired amount of results per page.

It then exposes a scoped slot through which you can access the following:

- **subset**: the subset of data corresponding to the current page.
- **totalPages**: the total amount of pages.
- **isFirstPage**: whether the current page is the first one.
- **isLastPage**: whether the current page is the last one.

Recommended usage: wrap this in a high-level styled component.

## Installation

### NPM

```bash
npm install --save vue-lpage
```

[npm package link](https://www.npmjs.com/package/vue-lpage)

### CDN

```html
<script src="https://unpkg.com/vue-lpage@latest"></script>
```

## Examples

```vue
<!-- This will render [ "a", "b" ] -->
<template>
  <vue-lpage :data="['a', 'b', 'c']" :page="1" :results-per-page="2">
    <div slot-scope="{ subset }">
      {{ subset }}
    </div>
  </vue-lpage>
</template>

<script>
import VueLpage from "vue-lpage";
export default {
  components: {
    VueLpage
  }
};
</script>
```

```vue
<template>
  <vue-lpage :data="data" :page="page" :results-per-page="resultsPerPage">
    <div slot-scope="{ subset, totalPages, isFirstPage, isLastPage }">
      <div>
        Page
        <input type="number" v-model="page" :min="1" :max="totalPages" /> out of
        {{ totalPages }}
      </div>
      <div>
        Show
        <input
          type="number"
          v-model="resultsPerPage"
          :min="1"
          :max="data.length"
        />
        results per page
      </div>
      <button :disabled="isFirstPage" @click="page--">
        Previous
      </button>
      <button :disabled="isLastPage" @click="page++">
        Next
      </button>
      <ul>
        <li v-for="quote in subset" :key="quote">{{ quote }}</li>
      </ul>
    </div>
  </vue-lpage>
</template>
```

## Notes

Pagination is one-based (page 1 is the first page).

## Props

- **data**: the array of data to paginate.
- **page**: the page to display.
- **results-per-page**: the maximum amount of results to display per page.

## Slot scope

- **subset**: the subset of data corresponding to the current page.
- **totalPages**: the total amount of pages.
- **isFirstPage**: whether the current page is the first one.
- **isLastPage**: whether the current page is the last one.

## Powered by

- Babel 7
- Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)
