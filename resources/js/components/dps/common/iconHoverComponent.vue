<template>
    <div class="hoverComponetRemove">
        <div class="inner_plus_data">        
        <!-- <i class="ti-align-left" title="Align Left" data-toggle="tooltip" data-placement="bottom" @click="addStyleImg('left', divId)"></i>
        <i class="ti-align-center" title="Align Center" data-toggle="tooltip" data-placement="bottom" @click="addStyleImg('center', divId)"></i>
        <i class="ti-align-right" title="Align Right" data-toggle="tooltip" data-placement="bottom" @click="addStyleImg('right', divId)"></i> -->
        <i class="ti-move" title="Drag" data-toggle="tooltip" data-placement="bottom" aria-hidden="true" ></i>
        <i class="ti-image" title="Background" data-toggle="tooltip" data-placement="bottom" aria-hidden="true" @click="openInnerCIPicker(innerIndex, mainIndex)"></i>
        <i class="ti-pencil" title="Edit" data-toggle="tooltip" data-placement="bottom" @click="setEditPopupData(typeData, divId, innerIndex, mainIndex)"></i>
        <i class="ti-layers" title="Duplicate" data-toggle="tooltip" data-placement="bottom" aria-hidden="true" @click="copyDivWithContent(innerIndex, mainIndex)"></i>
        <i class="ti-trash" title="Delete"  @click="removeWholeContent(innerIndex)"></i>
        <!-- <i class="fas fa-cog" @click="addClick('one', dynamicId1)"></i> -->
      </div>
    </div>
</template>

<script>
export default {
  props: ['divId' , 'typeData', 'innerIndex', 'mainIndex']
}
</script>
