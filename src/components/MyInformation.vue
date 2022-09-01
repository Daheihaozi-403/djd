<template>
    <div class="mx-4">
        <div class="text-normal font-semibold text-center mt-14 mb-7">我的</div>
        <div class="mx-2">
            <my-name></my-name>
        </div>

        <TabbarBottom active1="myInformation"></TabbarBottom>
    </div>


</template>
<script>

import TabbarBottom from './common/TabbarBottom'
import MyName from './common/MyName'
export default {
    components: {
        TabbarBottom,
        MyName
    },

}

</script>