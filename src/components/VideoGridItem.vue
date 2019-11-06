<template>
  <div>
    <a :href="video.url" target="_blank">
      <img class="card-img-top" :src="video.thumbnailUrl" alt="YouTube thumbnail">
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ video.name }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.uploaderName }} | {{ video.uploadDate }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  props: ['video']
};
</script>