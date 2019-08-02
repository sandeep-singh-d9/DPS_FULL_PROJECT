<template>
    <div class="row full_layer_row" @mouseover="getDynamicIndexOnHover">
        <HoverRow :indexId="dynamicIndex" />
        <div   v-for="(divData, index) in dynamicHtml" :key="index" :class="{'col-sm-12':divData.className =='col-sm-12', 'one':divData.type =='one', 'cell':true}" :style="divData.style" draggable="true" @dragstart="dragStartInner(index, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEndInner" @drop="dragFinishInner(index, $event)" >
            <!-- buttons on hovers -->
            <!-----------------Conditional button--------------->
                <div class="icon_top_inner" v-if="divData.values[0].text =='' && divData.values[1].image =='' && divData.values[2].video ==''">
                    <i  class="ti-plus" @click="setInnerDyanamicIndex(index), addClick(divData.type, divData.id)"></i>
                </div>
                
                <iconHoverComponent  v-if="divData.values[0].text 
                || divData.values[1].image || divData.values[2].video" :divId="divData.id" :typeData="divData.type" :innerIndex="index" :mainIndex="dynamicIndex" />
            <!-----------------Conditional button--------------->
            <!-- <div v-for="(divDataInner, key) in divData.values" :key="key">
                <div class="icon_top_inner" v-if="divDataInner.text==''">
                    <i  class="fas fa-plus-circle" @click="setInnerDyanamicIndex(index), addClick(divData.type, divData.id)"></i>
                </div>
                <div class="Copy_component" v-if="divDataInner.text">
                    <i class="fas fa-plus-circle"  @click="copyDiv(divData.className, divData.type)"></i>
                </div>
                    <iconHoverComponent  v-if="divDataInner.text" :divId="divData.id" :typeData="divData.type" :innerIndex="index" :mainIndex="dynamicIndex" />
            </div> -->
            <!-- buttons on hovers --> 

            <DisplayDivData :divsdatacontent="divData"/>
            <div :class="{'Copy_component':true}" :id="divData.id"  v-if="divData.values[0].text 
            || divData.values[1].image || divData.values[2].video">
                <a  class="copy_tool_tip" data-toggle="tooltip" data-placement="top" title="Add New"  >
                    <i class="ti-plus"  @click="copyDiv(divData.className, divData.type)"></i>
                </a>
            </div>
        </div>
        <!-- ADD Row Component -->
            <AddRow :mainIndex="dynamicIndex"/>
        <!-- ADD Row Component -->
    </div>
</template>
<script>
export default {
    methods: {

    }
}
</script>

<style>

</style>
