<template>
<svg
:width="size"
:height="size" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM13 4L19 10V20C19 21.1 18.1 22 17 22H5.99C4.89 22 4 21.1 4 20L4.01 6C4.01 4.9 4.9 4 6 4H13ZM12 11H17.5L12 5.5V11Z"
:fill="color"/>
</svg>

</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' }
  }
}
</script>
