<template>
  <div>
    <div class="card-body">
      <h5 class="card-title">
        <a
          :href="video.url"
          class="card-link"
          target="_blank"
        >{{ video.name }}</a>
      </h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.uploaderName }} | {{ video.uploadDate }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video']
};
</script>