<template>
    <div  class=" full_layer_row"  @mouseover="getDynamicIndexOnHover">
         <HoverRow :indexId="dynamicIndex" />
         <div  class="full_data" >
            <div   draggable="true" @dragstart="dragStartInner(index, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEndInner" @drop="dragFinishInner(index, $event)" :class="{'col-sm-4': divData.className =='col-sm-4' ,
            'col-sm-8': divData.className =='col-sm-8' , 'seven' : divData.type == 'seven', 'eight' : divData.type == 'eight', 'cell': true}" v-for="(divData, index) in dynamicHtml" :key="index" :id="divData.id"  :style="divData.style">
                <!-- buttons on hovers -->
                <!-----------------Conditional button--------------->
                <div class="icon_top_inner" v-if="divData.values[0].text =='' && divData.values[1].image =='' && divData.values[2].video ==''">
                    <i  class="ti-plus" @click="setInnerDyanamicIndex(index), addClick(divData.type, divData.id)"></i>
                </div>
                
                <iconHoverComponent  v-if="divData.values[0].text 
                || divData.values[1].image || divData.values[2].video" :divId="divData.id" :typeData="divData.type" :innerIndex="index" :mainIndex="dynamicIndex" />
                
                <DisplayDivData :divsdatacontent="divData"/>

                <div class="Copy_component"  v-if="divData.values[0].text 
                || divData.values[1].image || divData.values[2].video ">
                    <i class="ti-plus"  @click="copyDiv(divData.className, divData.type) ,copyDivDataHide(divData.id)"></i>
                </div>
             </div>
         </div>
         <!-- ADD Row Component -->
            <AddRow :mainIndex="dynamicIndex"/>
        <!-- ADD Row Component -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
