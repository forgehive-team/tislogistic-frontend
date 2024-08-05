<template>
  <div class="dark-wrapper">

    <div class="arrow-container" @click="close">
      <button class="arr arr__left" @click.stop="slideBackward">
        <IconsArrowLeft />
      </button>
      <img :src="displayedImg" @click.stop="slideForward" />
      <button class="arr arr__right" @click.stop="slideForward">
        <IconsArrowRight />
      </button>
    </div>
     
  </div>
</template>

<script setup>
const props = defineProps(['currentIdx', 'images']);
const emit = defineEmits(['close', 'changeidx']);
const close = () => {
  emit('close');
};

const displayedImg = computed(()=> {
  return props.images[props.currentIdx]
})


const slideForward = ()=> {
  let i;
  if (props.currentIdx + 1 === props.images.length) {
    i = 0;
  } else {
    i = props.currentIdx+1;
  }
  emit('changeidx', i)
}

const slideBackward = ()=> {
  let i;
  if (props.currentIdx === 0) {
    i = props.images.length - 1;
  } else {
    i = props.currentIdx-1;
  }
  emit('changeidx', i)
}


</script>

<style
  src="@/assets/scss/components/Shared/FullScreenImg.scss"
  lang="scss"
  scoped
></style>
