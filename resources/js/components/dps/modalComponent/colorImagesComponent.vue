<template>
    <div>
        <div class="modal fade bd-example-modal-lg show_data background_image_color" id="colorImagePicker" tabindex="-1" role="dialog" aria-labelledby="colorImagePickerLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Background Style</h5>
                    </div>
                    <div class="modal-tab-content ">
                        <ul class="nav nav-tabs content_btn">
                            <li class="active ">
                                <a data-toggle="tab" class="active" href="#home">
                                    <i class="ti-paint-bucket"></i><br/>Background Color
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#menu1">
                                    <i class="ti-image"></i><br/>Background Image
                                </a>
                            </li>
                        </ul>
                    </div>    
                    <div class="modal-body">
                        <div class="tab-content">
                            <div id="home" class="tab-pane active ">
                                <div class="content_area">
                                    <!-- start text Color -->
                                    <!-- <div class="font_content">Text Color</div> -->
                                    <div class="font_body">
                                        <div class="col-sm-12">
                                            <color-picker class="color_picker_model" v-model="colorModel" @input="changeWholeBackground(colorModel)"> </color-picker>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu1" class="tab-pane fade side_bar_content">
                                    <UplaodArea v-if="showAddMedia" />
                                   	<div class="content_area" v-if="hideAddMedia">
                                        <div class="font_content">
                                          UPLOAD BACKGROUND IMAGE    
                                        </div>   
                                        <div>
											<!-- <button class="btn btn-block media_btn"  @click="showBackgroundAdd"  data-toggle="modal" >
												<span class="font_content">Add Media</span>
											</button> -->
                                            <button class="btn btn-block media_btn" data-toggle="modal" @click="showFilemodel" >
												<span class="font_content">Add Media</span>
											</button>
										</div>
                                        <div class="add-media-show">
                                        <img src="image/avatar_image.jpg" alt="" data-target="#colorImagePicker" data-toggle="modal"  title="" style="margin-bottom:20px;" v-show="imageBackgroundPath == ''"  @click="showFilemodel">
                                        <img data-target="#colorImagePicker" data-toggle="modal"  :src="imageBackgroundPath" alt="" srcset="" style="margin-bottom:20px;" v-show="imageBackgroundPath !== ''">
                                        <!-- <embed data-target="#colorImagePicker" data-toggle="modal"  v-if="videoArea && imagePath != ''" controls :src="imagePathBackground" style="margin-bottom:20px;" /> -->
                                    </div>
                                  <div v-show="imageBackgroundPath !== ''">
                                    <div class="heading_tag">
                                        <select name id v-model="backgroundModel" @change="getBackground(backgroundModel)">
                                            <option value="">Select Background Attachment</option>
                                            <option value="fixed">Fixed</option>
                                            <option value="inital">Inital</option>
                                            <option value="Scroll">scroll</option>
                                        </select>
                                    </div>
                                    <div class="heading_tag">
                                        <select name id v-model="backgroundSizeModel" @change="getBackgroundSize(backgroundSizeModel)">
                                            <option value="">Select Background Size</option>
                                            <option value="cover">Cover</option>
                                            <option value="contain">Conatin</option>
                                            <option value="initial">Initial</option>
                                        </select>
                                    </div>
                                    <div class="heading_tag">
                                        <select name id v-model="backgroundRepeatModel" @change="getBackgroundRepeat(backgroundRepeatModel)">
                                            <option value="">Select Background Repeat</option>
                                            <option value="repeat">Repeat</option>
                                            <option value="no-repeat">No-Repeat</option>
                                            <option value="repeat-x">Repeat-x</option>
                                            <option value="repeat-y">Repeat-y</option>
                                        </select>
                                    </div>
                                    <div class="heading_tag">
                                        <select name id v-model="backgroundPositionModel" @change="getBackgroundPosition(backgroundPositionModel)">
                                            <option value="">Select Background Position</option>
                                            <option value="left top">left top</option>
                                            <option value="left center">left center</option>
                                            <option value="left bottom">left bottom</option>
                                            <option value="right top">right top</option>
                                            <option value="right center">right center</option>
                                            <option value="right bottom">right bottom</option>
                                            <option value="center top">center top</option>
                                            <option value="center center">center center</option>
                                            <option value="center bottom">center bottom</option>
                                        </select>
                                    </div>
                                  </div>
                                </div>
                                    
                            </div>
                        </div>   
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content" @click="closeModal">
                            <button class="btn bottom_btn width_half" data-dismiss="modal" @click="close_all_data">
								<i class="ti-close" aria-hidden="true" ></i>
							</button>
                            <button class="btn bottom_btn width_half" @click="addImageToDiv" data-dismiss="modal">
								<i class="ti-check"></i>
							</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
export default {
    data() {
        return{
            colorModel:"",
            backgroundModel: "",
            backgroundSizeModel: "",
            backgroundRepeatModel: "",
            backgroundPositionModel: "",
        }
    },
    mounted(){
       $("#colorImagePicker").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
    },
    components: {
        "color-picker": ColorPicker
    },
}
</script>

<style>

</style>
