import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { 
  faSearch,
  faTh,
  faList
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

library.add(faYoutube, faSearch, faTh, faList);
Vue.component("font-awesome-icon", FontAwesomeIcon);
