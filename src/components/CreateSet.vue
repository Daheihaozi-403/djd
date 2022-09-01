<template>
    <div class="mx-4">
        <div class="text-normal font-semibold text-center mt-14 mb-7">学习</div>
        <create-book></create-book>
    </div>

    <tabbar-bottom active1="createSet"></tabbar-bottom>
</template>
<script>

import { useRouter } from 'vue-router'
import TabbarBottom from './common/TabbarBottom.vue'
import CreateBook from './common/CreateBook.vue'
export default {
    components: {
        TabbarBottom,
        CreateBook
    },
    setup() {
        const router = useRouter()
        const toCreateset = (() => {
            router.push({
                name: 'createset'
            })
        })

        return {
            toCreateset
        }


    },

}

</script>