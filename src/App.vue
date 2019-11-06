<template>
  <div id="app">
    <Header/>
    <SearchForm v-on:search="search"/>
    <SearchResults
      v-if="videos.length > 0"
      v-bind:videos="videos"
      v-bind:reformattedSearchString="reformattedSearchString"
    />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    SearchForm,
    SearchResults
  },
  data() {
    return {
      videos: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'http://newpipe-rest.herokuapp.com/api/v1/search?',
        id: '0',
        q: ''
      }
    };
  },
  methods: {
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(' ');
      this.api.q = searchParams.join('+');
      const { baseUrl, id, q } = this.api;
      const apiUrl = `${baseUrl}serviceId=${id}&searchString=${q}`;
      this.getData(apiUrl);
    },

    getData(apiUrl) {
      axios
        .get(apiUrl, { crossdomain: true })
        .then(res => {
          this.videos = res.data.relatedItems;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>