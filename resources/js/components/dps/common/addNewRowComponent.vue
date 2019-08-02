<template>
    <div>
        <div class="icon_top">
            <a  data-toggle="tooltip" data-placement="top" title="Add New Row!">
                <i class="ti-plus" @click="openNavForNewRow(innerIndex,mainIndex)"></i>
                 <!-- <i class="ti-plus" @click="openNavTest(mainIndex)"></i> -->
            </a> 
        </div>
    </div>
</template>

<script>
export default {
    props: ['mainIndex', 'innerIndex'],
    mounted(){
         $(document).ready(function(){
         $('[data-toggle="tooltip"]').tooltip(); 
        });
    }
}
</script>

<style>

</style>
