<template>
 <svg
   :width="size"
   :height="size" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path
     d="M11 6.81818V10.9091L16.5 5.45455L11 0V4.09091C4.9225 4.09091 0 8.97273 0 15C0 17.1409 0.6325 19.1318 1.705 20.8091L3.7125 18.8182C3.09375 17.6864 2.75 16.3773 2.75 15C2.75 10.4864 6.44875 6.81818 11 6.81818ZM20.295 9.19091L18.2875 11.1818C18.8925 12.3273 19.25 13.6227 19.25 15C19.25 19.5136 15.5512 23.1818 11 23.1818V19.0909L5.5 24.5455L11 30V25.9091C17.0775 25.9091 22 21.0273 22 15C22 12.8591 21.3675 10.8682 20.295 9.19091Z"
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
