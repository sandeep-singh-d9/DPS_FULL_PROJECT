<template>
	<div class="main-div">
    <div class="">
      <div v-if="divData.length > 0">
        <div :id="'div_'+index" v-for="(div, index) in divData" :key="index" draggable="true" @dragstart="dragStart(index, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEnd" @drop="dragFinish(index, $event)">
        <!-- <component @click="saveIndex(index)" :dynamicIndex="index" :is="div.name"></component> -->
        <component @click="saveIndex(index)" :dynamicIndex="index" :is="div.name" :dynamicId1="div.id1" :dynamicId2="div.id2" :dynamicId3="div.id3" :dynamicId4="div.id4" :style="div.style" :dynamicHtml="div.divs">
        </component>
        </div>
      </div>
    </div>  
		<NavigationOverlayComponent/>
    
		<!-- <input type="text" v-model="test"> -->
		<!-- <button @click="applyChanges" class="btn btn-primary">Apply</button> -->
		
		<ModelInputComponent/>
		<FileModalComponent/>
		<ColorPicker />
		<HomeOverlay />
		<ColorImagesComponent /> <!-- Color Image Picker -->
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import FullWidthComponent from "./NavigationComponent/fullWidthComponnt";
import TwoWidthComponent from "./NavigationComponent/twoSideComponent";
import ThreeWidthComponent from "./NavigationComponent/threeSideComponent";
import NavigationOverlayComponent from "./NavigationComponent/navigationOverlayComponent";
import FourByEightComponent from "./NavigationComponent/fourByEightComponent";
import EightByfourComponent from "./NavigationComponent/eightByfourComponent";
import FourColumnComponent from "./NavigationComponent/fourColumnComponent";
import ThreeByNineComponent from "./NavigationComponent/threeByNineComponent";
import NineByThreeComponent from "./NavigationComponent/nineByThreeComponent";
import TwoByTenComponent from "./NavigationComponent/twoByTenComponent";
import TenBytwoComponent from "./NavigationComponent/tenBytwoComponent";
import ModelInputComponent from "./modalComponent/modelInputComponent";
import FileModalComponent from "./modalComponent/fileModalComponent";
import ColorPicker from "./modalComponent/colorPickerModelComponet"
import HomeOverlay from "./common/homeOverlayButtonsComponet";
import ColorImagesComponent from "./modalComponent/colorImagesComponent";

export default {
  components: {
    FullWidthComponent,
    TwoWidthComponent,
    ThreeWidthComponent,
    NavigationOverlayComponent,
    ModelInputComponent,
    FourByEightComponent,
    EightByfourComponent,
    FourColumnComponent,
    ThreeByNineComponent,
    NineByThreeComponent,
    TwoByTenComponent,
    TenBytwoComponent,
    FileModalComponent,
    ColorPicker,
    HomeOverlay,
    ColorImagesComponent,
  
  },

  data() {
    return {
        test: "",
       
    };
  },
  
  mounted() {
    this.addParentDiv();
        var NewData = JSON.parse(localStorage.getItem("SavedData")); // Array of all divs
        var rowData =  localStorage.getItem("rowParentClass") // background of body tag
        if (NewData) {
            this.ACTION_CHANGE_STATE(["divData", NewData]);
        }
        if (rowData) {
            var str = rowData;
            var res = str.substring(0, 3);
            if (res == 'url') { // If first 3 character is url then go for background immage
                $('.row-parent').css('background-image', rowData)
            } else { // If first 3 character is not equals to 'url' then go for bachfround color    
                $('.row-parent').css('background-color', rowData)
            }
        }
        this.getData() // Call getData function on render

  },
  methods: {
    ...mapActions([
      'ACTION_PUSH_PARENT_DIV_DATA'
    ]),
      getData () {
        // Get Data from database and set to the divData array.
          axios.get('/api/getData')
          .then (response => {
                // this.ACTION_CHANGE_STATE(["divData", response.data.data]);
          })

      },
      addParentDiv () {
          this.ACTION_PUSH_PARENT_DIV_DATA()
      },
  }
};
</script>

<style>
</style>
