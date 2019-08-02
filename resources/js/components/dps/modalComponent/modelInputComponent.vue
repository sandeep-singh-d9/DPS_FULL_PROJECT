<template>
	<div>
		<div class="modal fade show_data" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Insert New Module 
							<a v-if="showIcon" @click="changeTIVState" class="float-left" style="cursor: pointer;">
								<i class="ti-arrow-left"></i>
							</a>
						</h5>
					</div>
					<div class="modal-body">
						<div class="tab-content">
							<div id="content" class="side_bar_content tab-pane active">
								<div v-show="textArea">
									<div class="content_area">
										<!-- start body content -->
										<div class="font_content">Body Content</div>
										<div v-show="!showCodeEditor" class="editable" contenteditable="true"></div>
										<codemirror v-show="showCodeEditor" v-model="editorCodeTemplate" :options="cmOptions"></codemirror>

										<!-- start font style -->
										<div class="font_content">Font Style</div>
										<div class="font_body">
											<ul>
												<li>
													<a @click="addfont('italic', false, null), (italicBtn = !italicBtn)" :class="{'btn': true, 'active' : italicBtn}" title="Italic" data-toggle="tooltip" data-placement="top">
														<i class="ti-Italic"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('bold', false, null), (boldBtn = !boldBtn)" :class="{'btn': true, 'active' : boldBtn}" title="Bold" data-toggle="tooltip" data-placement="top">
														<i class="fas fa-bold"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('underline', false, null), (underlineBtn = !underlineBtn)" :class="{'btn': true, 'active' : underlineBtn}" title="Underline" data-toggle="tooltip" data-placement="top">
														<i class="ti-underline"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('insertOrderedList', false, null), (unorderlistBtn = !unorderlistBtn)" :class="{'btn': true, 'active' : unorderlistBtn}" title="Unorder List" data-toggle="tooltip" data-placement="top">
														<i class="ti-list"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('insertUnorderedList', false, null), (orderlistBtn = !orderlistBtn)" :class="{'btn': true, 'active' : orderlistBtn}" title="Order List" data-toggle="tooltip" data-placement="top">
														<i class="ti-list-ol"></i>
													</a>
												</li>
												<li>
													<a @click="showCodeMap" :class="{'btn': true, 'active' : codeBtn}" title="Code Format" data-toggle="tooltip" data-placement="top">
														<i class="ti-split-v-alt" ></i>
													</a>
												</li>
											</ul>
										</div>

										<!-- start font heading tag -->
										<div class="font_content">Font Heading Tag</div>
										<div class="heading_tag">
											<select name id @change="insertTag(headingTag)" v-model="headingTag">
												<option value>Select Heading Tag</option>
												<option value="h1">Heading &lt;h1&gt;</option>
												<option value="h2">Heading &lt;h2&gt;</option>
												<option value="h3">Heading &lt;h3&gt;</option>
												<option value="h4">Heading&lt;h4&gt;</option>
												<option value="h5">Heading &lt;h5&gt;</option>
												<option value="h6">Heading &lt;h6&gt;</option>
												<option value="p">Paragraph &lt;p&gt;</option>
											</select>
										</div>

										
										<!-- start font Family -->
										<div class="font_content">Font Family</div>
										<div class="heading_tag">
											<select class="dataselect" @change="addfont('fontName', false , fontFamilySelect)" v-model="fontFamilySelect">
												<option value="">
													<span class="text_content" >Select Font</span>
												</option>
												<option v-for="(font, index) in fontFamily" :key="index" :value="font.family">{{ font.family }}</option>
											</select>
										</div>

										<!-- start text alignment -->
										<div class="font_content">Text Alignment</div>
										<div class="font_body">
											<ul>
												<li>
													<a @click="addfont('justifyLeft' ,false, null), resetActiveOnAlign('textLeft', textLeft)" :class="{'btn': true, 'active' : textLeft}" title="Left" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-left"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('justifyCenter', false, null), resetActiveOnAlign('textCenter', textCenter)" :class="{'btn': true, 'active' : textCenter}" title="Center" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-center"></i>
													</a>
												</li>

												<li>
													<a @click="addfont('justifyRight' ,false, null), resetActiveOnAlign('textRight', textRight)" :class="{'btn': true, 'active' : textRight}" title="Right" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-right"></i>
													</a>
												</li>
												<li>
													<a @click="addfont('justifyFull' ,false, null), resetActiveOnAlign('textJustify', textJustify)" :class="{'btn': true, 'active' : textJustify}" title="Justify" data-toggle="tooltip" data-placement="top">
														<i class="ti-align-justify"></i>
													</a>
												</li>
												<!-- <li>
													<a @click="addfont('justifyLeft' ,false, null)" class="btn" title="Delete Content" data-toggle="tooltip" data-placement="top">
														<i class="ti-trash" @click="removeContent" ></i>
													</a>
												</li> -->
											</ul>
										</div>

										<!-- start text Color -->
										<div class="font_content">Text Color</div>
										<div class="font_body">
											<div class="col-sm-12">
												<color-picker v-model="color_picker" @input="changeFontColor"></color-picker>
											</div>
										</div>
									</div>
								</div>
								<div v-show="imageArea||videoArea" id="design" class="tab-pane">
									<div class="content_area">
										<div class="font_content">{{imageArea == true ? 'Upload Image' : 'Upload video'}}
										</div>
										<div>
											<button class="btn btn-block media_btn"  data-target="#fileModal" data-toggle="modal" @click="sendType(inside)">
												<span class="font_content">Add Media</span>
											</button>
										</div>
										<!-- <div v-if="imagePath != ''" class="select_size"> -->
										<div class="select_size">
											<div class="font_content">{{imageArea == true ? 'Image' : 'Video'}} Size</div>
											<div class="heading_tag">
												<select name id @change="imageStyleAdd(fileModel)" v-model="fileModel">
													<option value="">Select {{imageArea == true ? 'Image' : 'Video'}} Size</option>
													<option value="150*150">Thumbnail - 150 x 150</option>
													<option value="300*300">Medium - 300 x 300</option>
													<option value="620*620">FullSize - 620 x 620</option>
													<option value="null">FullSize</option>
													<option value="custom">Add Custom</option>
												</select>
												<div class="heigth-width row" v-if="fileModel == 'custom'">
													<div class="col-sm-6">
														<input type="text" name="" id="" placeholder="Width" v-model="width" class="form-control">
													</div>
													<div class="col-sm-6">
														<input type="text" name="" id="" placeholder="Height" v-model="height" class="form-control">
													</div>
													<div class="col-sm-12 ">
														<button class=" btn-success btn btn_apply " @click="imageStyleAdd(fileModel = width + '*' + height)">Apply</button>
													</div>
												</div>
											</div>
											<!-- <div class="editables"></div> -->
										</div>
										<div class="add-media-show">
											<img src="image/avatar_image.jpg" alt="" data-target="#fileModal" data-toggle="modal"  title="" v-show="(imageArea || videoArea) && imagePath == ''" style="margin-bottom:20px;"  @click="sendType(inside)">
											<img data-target="#fileModal" data-toggle="modal"  v-if="imageArea && imagePath != ''" :src="imagePath" alt="" srcset="" style="margin-bottom:20px;">

											<embed data-target="#fileModal" data-toggle="modal"  v-if="videoArea && imagePath != ''" controls :src="imagePath" style="margin-bottom:20px;" />
										</div>

										<!-- <div v-if="imagePath != ''"> -->
											<!-- start Image alignment -->
											<div class="font_content">{{imageArea == true ? 'Image' : 'Video'}} Alignment</div>
											<div class="font_body">
												<ul>
													<li>
														<a @click="imgAlignStyle('left'), resetActiveOnAlign ('textLeft', textLeft)" :class="{'btn': true, 'active' : textLeft}" title="Left" data-toggle="tooltip" data-placement="top">
															<i class="ti-align-left"></i>
														</a>
													</li>
													<li>
														<a @click="imgAlignStyle('center'), resetActiveOnAlign ('textCenter', textCenter)" :class="{'btn': true, 'active' : textCenter}" title="Center" data-toggle="tooltip" data-placement="top">
															<i class="ti-align-center"></i>
														</a>
													</li>

													<li>
														<a  @click="imgAlignStyle('right'), resetActiveOnAlign ('textRight', textRight)" :class="{'btn': true, 'active' : textRight}" title="Right" data-toggle="tooltip" data-placement="top">
															<i class="ti-align-right"></i>
														</a>
													</li>
												</ul>
											</div>
											<div v-if="mediaType == '1'" >
												<!-- start Image Link -->
												<div class="font_content">Image Link URL</div>
												<div class="font_body row">
													<div class="heigth-width col-sm-12">
														<input type="text" name="" id="" placeholder="Enter URL" v-model="height" class="form-control">
													</div>
												</div>

												<!-- start Image Link Target-->
												<div class="font_content">Image Link Target</div>
												<div class="heading_tag ">
													<select>
														<option> Select Target</option>
														<option>In The Same Window</option>
														<option>In The New Window</option>
													</select>
												</div>
											</div>
										<!-- </div> -->

									</div>
								</div>
								<div v-if="btnClicked" class="tab_btn">
									<div class="row">
										<div v-if="showText" class="col-sm-6" @click="openTextArea">
											<div class="content_btn">
												<i class="ti-text"></i><br>Text
											</div>
										</div>
										<div v-if="showImage" @click="openMediaArea
										(1)" class="col-sm-6">

											<div class="content_btn">
												<i class="ti-image"></i><br>Image
											</div>
										</div>
										<div v-if="showVideo" @click="openMediaArea(2)" class="col-sm-6">
											<div class="content_btn">
												<i class="ti-video-camera"></i><br>Video
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="inner_footer_content" @click="closeModal">
							<button class="btn bottom_btn" data-dismiss="modal">
								<i class="ti-close" aria-hidden="true"></i>
							</button>
							<button class="btn bottom_btn" @click="addfont('redo', false, null)">
								<i class="ti-back-right"></i>
							</button>
							<button class="btn bottom_btn" @click="addfont('undo', false, null)">
								<i class="ti-back-left"></i>
							</button>
							<button class="btn bottom_btn" @click="applyChanges" data-dismiss="modal">
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
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import ColorPicker from "vue-iro-color-picker"
// language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
// theme css
import 'codemirror/theme/base16-dark.css'
export default {
	props: ['divId'],
  	data() {
		return {
			fileModel: "",
			inside: 'inner',
			showCodeEditor: false,
			headingTag: "",
			color_picker: "",
			code: this.editorTempData,
			width: '',
			height: '',
			italicBtn: false,
			boldBtn: false,
			underlineBtn: false,
			unorderlistBtn: false,
			orderlistBtn: false,
			codeBtn: false,
			textLeft: false,
			textCenter: false,
			textRight: false,
			textJustify: false,
		cmOptions: {
			// codemirror options
			tabSize: 4,
			mode: 'text/html',
			theme: 'base16-dark',
			lineNumbers: true,
			line: true,
			
			// more codemirror options, codemirror...
		},
		
		};
	},
	components: {
		"color-picker": ColorPicker
	},
	computed: {
		...mapState(["editorTempData"]),
		codemirror() {
		return this.$refs.myCm.codemirror
		},
	},
	created() {},
	mounted() {
		$("#exampleModal").modal({
			focus: false,
			// Do not show modal when innitialized.
			show: false,
			backdrop: 'static', // For static modal
			keyboard: false // prevent click outside of the modal
		});
	},
	methods: {
		showCodeMap () {
		this.showCodeEditor = !this.showCodeEditor
		this.codeBtn = !this.codeBtn
		if (this.showCodeEditor) {
			this.editorCodeTemplate = $('.editable').html();
		} else {
			console.log(this.editorCodeTemplate)
			$('.editable').empty()
			$('.editable').html(this.editorCodeTemplate);
		}
		},
		onCmReady(cm) {
		console.log('the editor is readied!', cm)
		},
		onCmFocus(cm) {
		console.log('the editor is focus!', cm)
		},
		onCmCodeChange(newCode) {
		console.log('this is new code', newCode)
		this.code = newCode
		},
		resetActiveOnAlign (type, value) {
			this.textLeft = false
			this.textRight = false
			this.textCenter = false
			this.textJustify = false
			this[type] = !this[value]
		}
	}
};
</script>

<style>
</style>