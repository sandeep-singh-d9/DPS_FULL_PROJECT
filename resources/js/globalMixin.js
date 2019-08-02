// Common Global Mixin useed in all Components
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { bus } from './app'
import iconHoverComponent from './components/dps/common/iconHoverComponent'
import dataFont from "./components/dps/Font/data"
import HoverRow from "./components/dps/common/hoverOnRow"
import HoverButton from "./components/dps/common/hoverButtonCopyComponent"
import DisplayDivData from './components/dps/common/displayDataComponent'
import UplaodArea from './components/dps/modalComponent/imageUploadAreaComponent'
import AddRow from './components/dps/common/addNewRowComponent'
import draggable from 'vuedraggable'
export const globalMixin = {
    props: ['dynamicIndex', 'dynamicId1', 'dynamicId2', 'dynamicId3', 'dynamicId4', 'dynamicHtml', 'hoverDivDataLoop', 'divsdatacontent'],
    computed: {
        // Get States from store
        ...mapState([
            'divData',
            'showNavBar',
            'dynamicType',
            'editorTempData',
            'imageSize',
            'imagePath',
            'mediaType',
            'dynamicId',
            'innerDyanamicIndex',
            'enterImageData',
            'enterVideoData',
            'isEdit',
            'showText',
            'showVideo',
            'showImage',
            'textArea',
            'videoArea',
            'imageArea',
            'btnClicked',
            'isFromBody',
            'isFromEyePicker',
            'rowParentClass',
            'isFromInnerEyePicker',
            'showIcon',
            'editorTempImageData',
            'editorTempVideoData',
            'parentDivData',
            'imageBackgroundPath',
            'storedValue' ,
        ])
    },
    components:{
        iconHoverComponent,
        HoverRow,
        HoverButton,
        DisplayDivData,
        UplaodArea,
        AddRow,
        draggable,
    },
    data() {
      return {
            font: 'testset',
            fontFamily: dataFont,
            libraryImages: [], 
            dynamicStyle: '',
            fontFamilySelect: "",
            editorCodeTemplate: '',
            enterCodeData: '',
            showUi: false,
            showAddMedia: false,
            hideAddMedia:true,
            backgroundAttachment: '',
            backgroundSize: '',
            BackgroundRepeat: '',
            BackgroundPosition: '',
            inner: 'inner'
      };
    },
    created () {
        // console.log('created')
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
        });
        
    },
    methods: {
        ...mapActions([
            'ACTION_CHANGE_STATE',
            'ACTION_ADD_VALUE_TO_DIV_DATA',
            'ACTION_REMOVE_VALUE_FROM_DIV_DATA',
            'ACTION_SET_CSS',
            'ACTION_COPY_DIV_DATA',
            'ACTION_EMPTY_DIVS_VALUE',
            'ACTION_COPY_DIV_WITH_INNER_DATA',
            'ACTION_COPY_FULL_ROW_DIV_WITH_INNER_DATA',
        ]),
        ...mapMutations([
            'REMOVE_ITEM_FROM_DIV_DATA',
            'REMOVE_ITEM_AT_DIV_DATA',
            'MOVE_ITEM_DIV_DATA',
            'SET_INNER_IMAGE_COLOR',
            'SET_CSS_TO_DIV_DATA_INNER',
            'MOVE_ITEM_DIV_DATA_INNER',
            'REMOVE_IMAGE_BACKROUND_PATH'
        ]),
        addClick (type, dynamicId) {
            // this.showIcon = true;
            this.ACTION_CHANGE_STATE(['showIcon', false])
            this.ACTION_CHANGE_STATE(['showImage', true])
            this.ACTION_CHANGE_STATE(['showVideo', true])
            this.ACTION_CHANGE_STATE(['showText', true])
            this.ACTION_CHANGE_STATE(['isEdit', false])
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
            $('.editable').html('');
            // this.ressetFunction(true) // reset function
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            this.ACTION_CHANGE_STATE(['dynamicType', type])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[this.dynamicIndex][type]])
            this.ACTION_CHANGE_STATE(['dynamicId', dynamicId])
            this.ACTION_CHANGE_STATE(['isEdit', false])
            if (this.mediaType == 0) {
                this.ACTION_CHANGE_STATE(['enterCodeData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[0]['text']])   
            } else if (this.mediaType == 1) {
                this.ACTION_CHANGE_STATE(['enterImageData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[1]['image']])
            } else {
                // mediaType == 2
                this.ACTION_CHANGE_STATE(['enterVideoData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[2]['video']])
            }
           
            this.enterCodeData = this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[0]['text']
            // this.ACTION_CHANGE_STATE(['editorTempData', $('.editable').html()])
            // this.editorData = this.divData[this.dynamicIndex][type]
            // console.log(this.dynamicIndex)
            // console.log(this.editorTempData, 'e uifgffgsdhf')
            // console.log(this.enterCodeData, 'testdiv')
            if (this.editorTempData) {
                $('.editable').html(this.editorTempData)   
            } else {
                $('.editable').html('')
            }
            // alert(this.editorTempData)
            $('#exampleModal').modal();
        },
        removeItem (item) {
            this.REMOVE_ITEM_FROM_DIV_DATA(item)
        },
        removeItemAt (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
        },
        dragStart (which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnter (ev) {
            /* 
            if (ev.clientY > ev.target.height / 2) {
                ev.target.style.marginBottom = '10px'
            } else {
                ev.target.style.marginTop = '10px'
            }
            */
        },
        dragLeave (ev) {
            /* 
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
            */
        },
        dragEnd (ev) {
            this.dragging = -1
        },
        dragFinish (to, ev) {
            this.moveItem(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItem (from, to) {
            // move item when drag and drop event fires
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.MOVE_ITEM_DIV_DATA([from, to])
            }
        },
        addfont (command, showUI, value) {
            document.execCommand(command, showUI, value);
        },
        changeFontColor (color_picker) {
            this.addfont("foreColor", false, color_picker);
        },
        changePickerColor (cmPicker) {
            this.addfont("foreColor", false, cmPicker);
        },
        copyContent () {
            console.log('abc');
            // $("p").clone().appendTo("body");
            this.addfont("copy", false, null);
        },
        copyDivDataHide (id, index) {
            console.log(index, 'test');
            console.log(id);
            // $('#'+id).css("text-align", textStyle);
            $('#'+id).hide()
            // $('.Copy_component').click(function(){
            //     $('#'+id).hide();
            //       // $('#'+id).addClass('intro');
            // });     
        },
        saveIndex (index) {
            this.ACTION_CHANGE_STATE(['dynamicIndex', index])
            // alert('jhdghhs')
        },
        applyChanges () {
            alert('hsajsajs')
            // alert(this.mediaType);
            if (this.mediaType == 1) {
               console.log(this.imagePath, 'test_data')
                // mediatype = 1 means Image
                var style = this.dynamicStyle
                if (style == 'null') {
                    var images = '<img src="'+ this.imagePath +'" />'
                } else {
                    var styleData = style.split("*");
                    var images = '<img style="width:' + styleData[0] + 'px; height: ' + styleData[1] + 'px;" src="'+ this.imagePath +'" />'
                }
                var text = $('.editable').append(images)
                this.ACTION_ADD_VALUE_TO_DIV_DATA(images)
            } else if(this.mediaType == 2) {
                // mediatype = 2 means Video
                // var images = '<video src="'+ this.imagePath +'" ></video>'
                var style = this.dynamicStyle
                var styleData2 = style.split("*");
                var images = '<embed style="width:' + styleData2[0] + 'px; height: ' + styleData2[1] + 'px;" controls type="video/mp4" src="' + this.imagePath + '"/>'
                var text = $('.editable').append(images)
                this.ACTION_ADD_VALUE_TO_DIV_DATA(images)
            } else {
                // mediatype = 0 means Text
                var text = $('.editable').html();
                this.enterCodeData = text
                // console.log(this.dynamicIndex, this.innerDyanamicIndex, text, 'ApplyChanges')
                this.ACTION_ADD_VALUE_TO_DIV_DATA(text)
            }
            this.enterCodeData = text
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
            this.ACTION_CHANGE_STATE(['storedValue',  ''])
            // this.ACTION_CHANGE_STATE(['imageBackgroundPath', '']);
            // this.imageBackgroundPath == '';
            console.log(this.storedValue , 'on Apply');
          
           
        },
        closeModal () {
            // Close modal 
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
        },
        removeFromDiv (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
            // $("#exampleModal").toggle(); 
        },
        sendType (value) {
            this.ACTION_CHANGE_STATE(['storedValue',   value])
            alert(this.storedValue)
        },
        setToImageShow (image) {
            console.log(this.inner, 'afsasagsf');
            console.log(this.storedValue, 'gsgas')
            if (this.storedValue == this.inner) { 
                alert('ajahs')
                this.ACTION_CHANGE_STATE(['imagePath', image]);
                $('#fileModal').modal('hide');
                $('#colorImagePicker').modal('hide');
                $('#exampleModal').modal('show');
            }
            else{
                console.log('hello');
                $('#fileModal').modal('hide');
                this.ACTION_CHANGE_STATE(['imageBackgroundPath', image]);
                $('#colorImagePicker').modal('show');
            } 
        },
        addImageToDiv () {
            // alert('hello')
            // isFromEyePicker
            if (this.isFromBody) {
                console.log(this.isFromBody, 'from body')
                $('.row-parent').css({'background-image': 'url('+this.imageBackgroundPath+')' , 'background-attachment':''+this.backgroundAttachment+'', 'background-size': ''+this.backgroundSize+'' , 'background-repeat': ''+this.BackgroundRepeat+'' , 'background-position': ''+this.BackgroundPosition+''})
                this.ACTION_CHANGE_STATE(['rowParentClass', 'url('+this.imageBackgroundPath+')'])
            } else if (this.isFromEyePicker) {
                alert('gagdga')
                console.log(this.isFromEyePicker, 'from eye picker')
                this.applyCSS('background-image', 'url('+this.imageBackgroundPath+')')
                this.applyCSS('background-attachment', ''+this.backgroundAttachment+'')
                this.applyCSS('background-size', ''+this.backgroundSize+'')
                this.applyCSS('background-repeat', ''+this.BackgroundRepeat+'')
                this.applyCSS('background-position', ''+this.BackgroundPosition+'')
            } else if (this.isFromInnerEyePicker) {
                console.log(this.isFromInnerEyePicker , 'from inner picker')
                this.SET_INNER_IMAGE_COLOR(['background-image', 'url('+this.imageBackgroundPath+')'])
            } 
            this.REMOVE_IMAGE_BACKROUND_PATH()
            // else {
            //     alert('sgagssgshgasags  ')
            //     this.ACTION_CHANGE_STATE(['imagePath', image])
            // }
            this.resetImageReated ()
        },
        openNav () {
            this.ACTION_CHANGE_STATE(['showNavBar', true])
            this.ACTION_CHANGE_STATE(['mediaType', 0])
            this.ACTION_CHANGE_STATE(['forChild', true])
            var newtest = (document.getElementById("myNav").style.height = "100%");
        },
        openNavForNewRow (innerIndex , mainIndex) {
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', innerIndex])
            console.log([this.divData[mainIndex].divs[0].values[1]])
            // console.log(this.divData[mainIndex].divs[0].values[0])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[mainIndex].divs[0].values[0]['text']])
            this.ACTION_CHANGE_STATE(['editorTempImageData', this.divData[mainIndex].divs[0].values[1]['image']])
            this.ACTION_CHANGE_STATE(['editorTempVideoData', this.divData[mainIndex].divs[0].values[2]['video']])
            console.log(this.editorTempVideoData, 'iosdhohh')
            if(this.editorTempData != '' || this.editorTempImageData != '' || this.editorTempVideoData != ''){
                this.ACTION_CHANGE_STATE(['showNavBar', true])
                this.ACTION_CHANGE_STATE(['mediaType', 0])
                this.ACTION_CHANGE_STATE(['forChild', true])
                var newtest = (document.getElementById("myNav").style.height = "100%");
            }
        },
        openNavTest (innerIndex, mainIndex) {
            console.log(mainIndex)
            // this.ACTION_CHANGE_STATE(['innerDyanamicIndex', innerIndex])
            console.log([this.divData[mainIndex].divs[0]])
            // console.log(this.divData[mainIndex].divs[0].values[0])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[mainIndex].divs[0].values[0]['text']])
            this.ACTION_CHANGE_STATE(['editorTempImageData', this.divData[mainIndex].divs[0].values[1]['image']])
            this.ACTION_CHANGE_STATE(['editorTempVideoData', this.divData[mainIndex].divs[0].values[2]['video']])
            console.log(this.editorTempVideoData, 'iosdhohh')
            if(this.editorTempData != '' || this.editorTempImageData != '' || this.editorTempVideoData != ''){
                this.ACTION_CHANGE_STATE(['showNavBar', true])
                // this.ACTION_CHANGE_STATE(['mediaType', 0])
                this.ACTION_CHANGE_STATE(['forTest', true])
                var newtest = (document.getElementById("myNav").style.height = "100%");
            }
        },
        openTextArea () {
            this.ACTION_CHANGE_STATE(['showIcon', true])
            this.ACTION_CHANGE_STATE(['textArea', true])
            this.ACTION_CHANGE_STATE(['btnClicked', false])
            this.ACTION_CHANGE_STATE(['mediaType', 0])
            this.ACTION_CHANGE_STATE(['imagePath', ''])
        },
        openMediaArea (type) {
            // type 1 = image and 2 = video
            this.ACTION_CHANGE_STATE(['showIcon', true])
            this.ACTION_CHANGE_STATE(['mediaType', type])
            this.ACTION_CHANGE_STATE(['imagePath', ''])
            if (type === 1) {
                this.ACTION_CHANGE_STATE(['imageArea', true])
                this.ACTION_CHANGE_STATE(['btnClicked', false])
            } else {
                this.ACTION_CHANGE_STATE(['videoArea', true])
                this.ACTION_CHANGE_STATE(['btnClicked', false])
            }
        },
        imageStyleAdd (style) {
            this.dynamicStyle = style
        },
        // ------- start palak ------------------2019-18-07-----------------
        imgAlignStyle (style) {
            this.SET_CSS_TO_DIV_DATA_INNER(["text-align", style])
        },
        // ------- end palak ------------------2019-18-07-----------------
        newtest () {
            // alert('hasghashg')
        },
        insertTag (headingTag) {
           document.execCommand('formatblock', false,  headingTag)
        },
        addStyleImg (textStyle, id) {
            console.log(textStyle, id);
            $('#'+id).css("text-align", textStyle);     
        } ,
        removeContent () {
            //remove Content form modal
            $('.editable').html('');
        },
        removeWholeContent (index) {
            this.ACTION_EMPTY_DIVS_VALUE(index)
        },
        setBackground (color) {
             //colorpicker for full row
            this.ACTION_CHANGE_STATE(['dynamicType', 'style'])
            var text = ['background-color', color]
            this.ACTION_SET_CSS(text)
        },
        openColorpicker (index) {
            this.ACTION_CHANGE_STATE(['dynamicIndex', index])
            this.ACTION_CHANGE_STATE(['isFromEyePicker', true])
            this.ACTION_CHANGE_STATE(['isFromInnerEyePicker', false])
            this.ACTION_CHANGE_STATE(['isFromBody', false])
            this.ACTION_CHANGE_STATE(['mediaType', 1])
            //open model of color picker
            // $('#colorPicker').modal();
            $('#colorImagePicker').modal();
           
        },
        close_all_data(){
            //It will Reset the isfromEyePicker and from isfromInnerpicker  when model is close. 
            this.ACTION_CHANGE_STATE(['isFromEyePicker', false])
            this.ACTION_CHANGE_STATE(['isFromInnerEyePicker', false])
        },
        setbackgroundColor (color) {
            //colorpicker for each coloumn
            var id = '#' + this.dynamicId
            $(id).parent().css('background-color', color)
        },
        applyCSS (style, value) {
            var css = [[style], value]
            this.ACTION_SET_CSS(css)
            // console.log(css, 'style css')
        },
        copyDiv (className, Type) {
            this.ACTION_COPY_DIV_DATA([className, Type])
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            // console.log(this.dynamicIndex);
        },
        getDynamicIndexOnHover () {
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            // console.log(this.dynamicIndex, 'getDynamicIndexOnHover')
        },
        setInnerDyanamicIndex (index) {
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', index])
            // console.log(this.innerDyanamicIndex,'setInnerDyanamicIndex')
        },
        getSecondPart(str) {
            return str.split('src=')[1];
            // get path after src
        },
        setEditPopupData (type, divId, innerIndex, mainIndex) {
            // this.showIcon = false;
            this.ACTION_CHANGE_STATE(['showIcon', false])
            console.log(type, divId, innerIndex, mainIndex);
            $('.editable').html('');
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])

            // this.ACTION_CHANGE_STATE(['dynamicIndex', mainIndex])
            this.ACTION_CHANGE_STATE(['dynamicType', type])
            this.ACTION_CHANGE_STATE(['isEdit', true])
            // console.log(this.divData, mainIndex, innerIndex, 'this.divData')
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', innerIndex])
           
            this.ACTION_CHANGE_STATE(['dynamicId', divId])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[0]['text']])
            this.ACTION_CHANGE_STATE(['enterImageData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[1]['image']])
            this.ACTION_CHANGE_STATE(['enterVideoData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[2]['video']])
            this.ressetFunction(false) // reset image, text and video function
            if (this.editorTempData != '') {
              
                // this.ACTION_CHANGE_STATE(['showIcon', false])
                this.ACTION_CHANGE_STATE(['showText', false])
                this.ACTION_CHANGE_STATE(['showImage', false])
                this.ACTION_CHANGE_STATE(['showVideo', false])
                this.ACTION_CHANGE_STATE(['mediaType', 0])
                this.ACTION_CHANGE_STATE(['textArea', true])
            }
            if (this.enterImageData != '') {
                var testImage = this.getSecondPart(this.enterImageData)
                testImage = testImage.replace(/\/>/g,"");
                testImage = testImage.replace(/\"/g,"");
                this.ACTION_CHANGE_STATE(['imagePath', testImage])
                this.ACTION_CHANGE_STATE(['mediaType', 1])
                this.ACTION_CHANGE_STATE(['imageArea', true])
            }
            if (this.enterVideoData != '') {
                this.ACTION_CHANGE_STATE(['mediaType', 2])
                this.ACTION_CHANGE_STATE(['videoArea', true])
                var testImage = this.getSecondPart(this.enterVideoData)
                testImage = testImage.replace(/\/>/g,"");
                testImage = testImage.replace(/\"/g,"");
                this.ACTION_CHANGE_STATE(['imagePath', testImage])
            }
            if (this.editorTempData == '' && this.enterImageData == '' && this.enterVideoData == '') {
                
            }
            // console.log(this.showText, this.showVideo, this.showImage, 'tsetsgdfddfgdf')
            this.enterCodeData = this.divData[mainIndex].divs[this.innerDyanamicIndex].values[0]['text']
            // this.ACTION_CHANGE_STATE(['editorTempData', $('.editable').html()])
            // this.editorData = this.divData[this.dynamicIndex][type]
            // console.log(this.dynamicIndex)
            // console.log(this.editorTempData, 'e uifgffgsdhf')
            // console.log(this.enterCodeData, 'testdiv')
            // console.log(this.editorTempData);
            if (this.editorTempData) {
                $('.editable').html(this.editorTempData)   
            } else {
                $('.editable').html('')
            }
            //alert(this.editorTempData)
            $('#exampleModal').modal();
        },
        ressetFunction (bool) {
            // Reset store states
            this.ACTION_CHANGE_STATE(['showText', bool])
            this.ACTION_CHANGE_STATE(['showVideo', bool])
            this.ACTION_CHANGE_STATE(['showImage', bool])
        },
        changeColor () {
            // Change color
            if (!this.showUi) {
               setTimeout(function () {
                    $('.box').toggleClass('clicked');  
               },0.2)
               this.showUi = !this.showUi;  
            } else {
              var self = this
               setTimeout(function () {
                 self.showUi = !self.showUi;
               },500)
               $('.box').toggleClass('clicked');  
            }
        },
        changeTIVState () {
            // change Text, Image and video state
            this.ACTION_CHANGE_STATE(['showIcon', false])
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
        },
        removeAllDiv () {
            // Remove all child div
            if (confirm("Are you sure want to to delete ?")) {
                this.ACTION_CHANGE_STATE(['divData', []])
                localStorage.removeItem("SavedData")
                localStorage.removeItem("rowParentClass")
                this.ACTION_CHANGE_STATE(['rowParentClass',  ''])
                axios.delete('/api/deleteGetData')
                .then (response => {
                    console.log(response)
                })
            }
        },
        saveData() {
            localStorage.setItem("SavedData", JSON.stringify(this.divData));
            localStorage.setItem("rowParentClass", this.rowParentClass);
            console.log(this.divData, "divData");
            // console.log(SavedData)
            var NewData = JSON.parse(localStorage.getItem("SavedData"));
            this.exportHtml() // Call export html
            console.log(NewData, "my saved data");
          },
          exportHtml () {
            // Remove CSS from div
            // $(".main-div").find('.cell').removeClass('cell').addClass('mycell');
            $(".main-div").find('.fa-plus-circle').removeClass('fa-plus-circle').addClass('test-circle');
            $(".main-div").find('.one').removeClass('one').addClass('one_change1');
            $(".main-div").find('.two').removeClass('two').addClass('one_change2');
            $(".main-div").find('.three').removeClass('three').addClass('one_change3');
            $(".main-div").find('.four').removeClass('four').addClass('one_change4');
            $(".main-div").find('.full_layer_row').removeClass('full_layer_row').addClass('full_layer_row1');
            $(".main-div").find('.overlay_delete').css('display','none');
            $(".main-div").find('.home_data').css('display','none');
            $(".main-div").find('.hoverComponetRemove').hide();
      
            var markup = document.documentElement.innerHTML;
            setTimeout(function () {
                // Reset Removed CSS from div
            //   $(".main-div").find('.mycell').removeClass('mycell').addClass('cell');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.one_change1').removeClass('one_change1').addClass('one');
              $(".main-div").find('.one_change2').removeClass('one_change2').addClass('two');
              $(".main-div").find('.one_change3').removeClass('one_change3').addClass('three');
              $(".main-div").find('.one_change4').removeClass('one_change4').addClass('four');
              $(".main-div").find('.full_layer_row1').removeClass('full_layer_row1').addClass('full_layer_row');
              $(".main-div").find('.home_data').css('display','inline-block');
              $(".main-div").find('.overlay_delete').css('display','none');
              $(".main-div").find('.hoverComponetRemove').show();
            },3000);
            
             axios.post('/api/save', {
                htmlData: markup,
                divsData: this.divData,
                
             })
             .then (response => {
                console.log(response)
             })
             .catch (errorResponse => {
                console.log(errorResponse.response.data, 'errorResponse')
             })
      
            // console.log(markup);
        },
        changeWholeBackground (color) {
            // If color picker open from row hover eye drop click
            if (this.isFromEyePicker) {
                this.applyCSS('background-image', '')
                this.applyCSS('background-color', color)
            }
            if (this.isFromInnerEyePicker) {
                this.SET_INNER_IMAGE_COLOR(['background-image', ''])
                this.SET_INNER_IMAGE_COLOR(['background-color', color])
            }
            // If color picker open from bottom button
            if (this.isFromBody) {
                $('.row-parent').css('background-image', '')
                $('.row-parent').css('background-color', color)
            }
            this.ACTION_CHANGE_STATE(['rowParentClass',  color])
            // set value to the rowParentClass
            // $('.row-parent').css('background-image', 'url(http://127.0.0.1:8000/uploads/0000/643382_1561374362.jpg)')
            //    387309_1561374477.jpg
        },
        resetImageReated () {
            // Reset css variables
            this.ACTION_CHANGE_STATE(['isFromBody',  false])
            this.ACTION_CHANGE_STATE(['isFromEyePicker',  false])
        },
        copyDivWithContent (innerIndex, mainIndex) {
            // Copy Innerdiv with content
            this.ACTION_COPY_DIV_WITH_INNER_DATA([innerIndex, mainIndex])
        },
        showPreview () {
            // Remove CSS from div
            // $(".main-div").find('.cell').removeClass('cell').addClass('mycell');
            $(".main-div").find('.fa-plus-circle').removeClass('fa-plus-circle').addClass('test-circle');
            $(".main-div").find('.one').removeClass('one').addClass('one_change1');
            $(".main-div").find('.two').removeClass('two').addClass('one_change2');
            $(".main-div").find('.three').removeClass('three').addClass('one_change3');
            $(".main-div").find('.four').removeClass('four').addClass('one_change4');
            $(".main-div").find('.full_layer_row').removeClass('full_layer_row').addClass('full_layer_row1');
            $(".main-div").find('.overlay_delete').css('display','none');
            $(".main-div").find('.home_data').css('display','none');
            $(".main-div").find('.hoverComponetRemove').hide();
      
            setTimeout(function () {
                // Reset Removed CSS from div
            //   $(".main-div").find('.mycell').removeClass('mycell').addClass('cell');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.one_change1').removeClass('one_change1').addClass('one');
              $(".main-div").find('.one_change2').removeClass('one_change2').addClass('two');
              $(".main-div").find('.one_change3').removeClass('one_change3').addClass('three');
              $(".main-div").find('.one_change4').removeClass('one_change4').addClass('four');
              $(".main-div").find('.full_layer_row1').removeClass('full_layer_row1').addClass('full_layer_row');
              $(".main-div").find('.home_data').css('display','inline-block');
              $(".main-div").find('.overlay_delete').css('display','none');
              $(".main-div").find('.hoverComponetRemove').show();
            },8000);
            
        },
        copyOuterFullRowWithContent (mainIndex) {
            // Copy full Row with content
            this.ACTION_COPY_FULL_ROW_DIV_WITH_INNER_DATA(mainIndex)
        },
        getReturnUniqueId () {
            // Return unique Id.
            var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            return id
        },
        openInnerCIPicker (innerIndex, mainIndex) {
            // open color and image picker
            this.ACTION_CHANGE_STATE(['dynamicIndex', mainIndex])
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', innerIndex])
            this.ACTION_CHANGE_STATE(['isFromInnerEyePicker', true])
            this.ACTION_CHANGE_STATE(['isFromEyePicker', false])
            this.ACTION_CHANGE_STATE(['isFromBody', false])
            this.ACTION_CHANGE_STATE(['mediaType', 1])
            //open model of color picker
            // $('#colorPicker').modal();
            $('#colorImagePicker').modal();
        },
        // Inner Drag and drop functions start
        removeItemInner (item) {
            this.REMOVE_ITEM_FROM_DIV_DATA(item)
        },
        removeItemAtInner (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
        },
        dragStartInner (which, ev) {
            
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnterInner (ev) {
            /* 
            if (ev.clientY > ev.target.height / 2) {
                ev.target.style.marginBottom = '10px'
            } else {
                ev.target.style.marginTop = '10px'
            }
            */
        },
        dragLeaveInner (ev) {
            /* 
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
            */
        },
        dragEndInner (ev) {
            this.dragging = -1
        },
        dragFinishInner (to, ev) {
            // alert(to)
            this.moveItemInner(this.dragging, to);
            // ev.target.style.marginTop = '2px'
            // ev.target.style.marginBottom = '2px'
        },
        moveItemInner (from, to) {
            // move item when drag and drop event fires
            if (to === -1) {
                this.removeItemAtInner(from);
            } else {
                // alert('jhasdkjkjsaklsadkjslkjjsdhj')
                this.MOVE_ITEM_DIV_DATA_INNER([from, to])
            }
        },
        // Inner Drag and drop functions end
        hideFirstElement () {
            $('.first_element').hide();
        },
        showBackgroundAdd () {
            this.showAddMedia = true;
            this.hideAddMedia = false;
        },
        showFilemodel () {
            $('#colorImagePicker').modal('hide');
		    $('#fileModal').modal('show');
        },
        getBackground (background) {
          this.backgroundAttachment = background
        },
        getBackgroundSize (backgroundsize) {
          this.backgroundSize = backgroundsize 
        },
        getBackgroundRepeat (backgroundrepeat) {
           this.BackgroundRepeat = backgroundrepeat
        },
        getBackgroundPosition (backgroundposition) {
         this.BackgroundPosition = backgroundposition
         
        }
    }
  };