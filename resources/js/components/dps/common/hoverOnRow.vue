<template>
    <div>
         <div class="overlay_delete">
            <a class="btn" style="cursor:move;">
                <span class="text_content">
                    <i class="ti-move" ></i>
                </span>
            </a>
            <a class="btn" @click="openColorpicker(indexId, tempIndex)">
                <span class="text_content">
                    <i class="ti-image"></i>
                </span>
            </a>
            <a class="btn" @click="copyOuterFullRowWithContent(indexId)">
                <span class="text_content">
                    <i class="ti-layers"></i>
                </span>
            </a>
            <a class="btn" >
                <span class="text_content">
                    <i class="ti-trash" @click="removeFromDiv(indexId)"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['indexId', 'tempIndex']
}
</script>

<style>

</style>
