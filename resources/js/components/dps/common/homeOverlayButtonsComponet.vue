<template>
    <div class="container">
      <div class="row">
         <div class="col-sm-12 home_data">
            <div class="left_side box" v-show="showUi">
                <ul class="home_over_button">
                    <li class="left_inner_overlay" @click="showPreview">
                      <i class="ti-eye" title="Preview"></i>
                    </li>
                    <li class="left_inner_overlay" @click="removeAllDiv(),changeColor()">
                        <i class="ti-trash" title="Delete"></i>
                    </li>
                    <li class="left_inner_overlay1" @click="openNav(), changeColor()">
                        <i class="ti-layout-column2" title="Choose Column"></i>
                    </li>
                </ul>
            </div>
            <div class="home_over_button_absolute">
                <li class="open" v-show="!showUi" @click="changeColor()">
                    <i class="ti-more" ></i>
                </li> 
                <li v-show="showUi" class="open" @click="changeColor()" >
                    <i class="ti-close"></i>
                </li>
            </div>
            <div class="right_side box" v-show="showUi">
                <ul class="home_over_button">
                    <li @click="openColorImagePicker(), changeColor()" class="right_inner_overlay">
                        <i class="ti-palette" title="Background"></i>
                    </li>
                    <li class="right_inner_overlay" @click="saveData(), changeColor()">
                        <i class="ti-check" title="Save"></i>
                    </li>
                    <li class="right_inner_overlay1" @click="exportHtml(), changeColor()">
                        <i class="ti-download" title="Download"></i>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
   methods: {
       openColorImagePicker () {
           this.ACTION_CHANGE_STATE(['mediaType', 1])
           this.ACTION_CHANGE_STATE(['isFromBody', true])
           this.ACTION_CHANGE_STATE(['isFromEyePicker', false])
           $('#colorImagePicker').modal();
       }
   } 
}
</script>

<style scoped>
.social-icons {
    margin: 0 auto;
    /* You just need to change the width and height
    of your div here.
    The size of the images will adapt automatically.
    Make sure that the width is 5 times the height
    for better results.*/
    width: 640px;
    height: 128px;
    position: relative;
}


.social-icons .social-icons-image {
    display: inline-block;
    position: absolute;
    width: 33%;
    height: auto;
    z-index: 2;
    opacity: 1;
    transition: all .5s;
    padding: 2%;
    box-sizing: border-box;
}

.social-icons .social-icons-image a {
    display: inline-block;
    width: 100%;
    height: 100%;
}


.social-icons img {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.social-icons a:hover img {
    width: 110%;
    height: auto;
    margin: -5%;
}

.social-icons .social-icons-image:nth-child(1) {
    left: 33.755%;   /*(nth-child(2).left - (50% * 20%)/4)*/
    top: 25%; /*((100%-50%)/2)*/
    z-index: 0;
    width: 10%; /*(50% * 20%)*/
    height: auto;
    opacity: .5;
}


.social-icons .social-icons-image:nth-child(2) {
    left: 36.25%;   /*(40% - (75% * 20%)/4)*/
    top: 12.5%; /*((100%-75%)/2)*/
    z-index: 1;
    width: 15%; /*(75% * 20%)*/
    height: auto;
    opacity: .75;
}

.social-icons .social-icons-image:nth-child(3) {
    left: 40%;
    z-index: 2;
    width: 20%;
    height: auto;
}

.social-icons .social-icons-image:nth-child(4) {
    left: 48.75%; /*(60% - 3*(75% * 20%)/4*/
    top: 12.5%; /*((100%-75%)/2)*/
    z-index: 1;
    width: 15%; /*(75% * 20%)*/
    height: auto;
    opacity: .75;
}

.social-icons .social-icons-image:nth-child(5) {
    left: 56.25%;   /*(nth-child(4).left + (nth-child(4).width- 3*(50% * 20%)/4)*/
    top: 25%; /*((100%-50%)/2)*/
    z-index: 0;
    width: 10%; /*(50% * 20%)*/
    height: auto;
    opacity: .5;
}

.social-icons:hover .social-icons-image:nth-child(1) {
    top: 0px;
    left: 0%;
    width: 20%;
    opacity: 1;
}

.social-icons:hover .social-icons-image:nth-child(2) {
    top: 0px;
    left: 20%;
    width: 20%;
    opacity: 1;
}

.social-icons:hover .social-icons-image:nth-child(4) {
    top: 0px;
    left: 60%;
    width: 20%;
    opacity: 1;
}

.social-icons:hover .social-icons-image:nth-child(5) {
    top: 0px;
    left: 80%;
    width: 20%;
    opacity: 1;
}
</style>
