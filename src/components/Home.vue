<template>
    <div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <ais-index
                app-id="KWN8R47EZ0"
                api-key="67c7f16471c0cfb5a30db6c8f4160148"
                index-name="dev_comic_reader"
            >
            <ais-search-box :autofocus="true" :class-names="{'ais-search-box': 'searchbar'}" placeholder="Search for a quote, character, or emotion"></ais-search-box>
            <div class="comicbox">
                <ais-results>
                    <template slot-scope="{ result }">
                        
                            <img  class="image" :src="images[result.page]" :key="result.page" @click="index = result.page" >
                            <!-- <div
                                class="image"
                                :key="result.page"
                                @click="index = result.page"
                                :style="{ backgroundImage: 'url(' + images[result.page] + ')', width: '500px', height: '500px' }"
                                >
                            </div> -->
                    </template>
                </ais-results>
            </div>
        </ais-index>
    </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
    name: 'Home',
    data: function () {
        return {
            images: [
            require('@/assets/hxh_page_0.jpg'),
            require('@/assets/hxh_page_1.jpg'),
            require('@/assets/hxh_page_2.jpg'),
            require('@/assets/hxh_page_3.jpg'),
            require('@/assets/hxh_page_4.jpg'),
            require('@/assets/hxh_page_5.jpg'),
            require('@/assets/hxh_page_6.jpg'),
            require('@/assets/hxh_page_7.jpg'),
            require('@/assets/hxh_page_8.jpg'),
            require('@/assets/hxh_page_9.jpg'),
            require('@/assets/hxh_page_10.jpg'),
            require('@/assets/hxh_page_11.jpg'),
            require('@/assets/hxh_page_12.jpg'),
            require('@/assets/hxh_page_13.jpg'),
            require('@/assets/hxh_page_14.jpg'),
            require('@/assets/hxh_page_15.jpg'),
            require('@/assets/hxh_page_16.jpg'),
            require('@/assets/hxh_page_17.jpg'),
            require('@/assets/hxh_page_18.jpg'),
            require('@/assets/hxh_page_19.jpg'),
            require('@/assets/hxh_page_20.jpg'),
            require('@/assets/hxh_page_21.jpg'),
            require('@/assets/hxh_page_22.jpg'),
            require('@/assets/hxh_page_23.jpg'),
            require('@/assets/hxh_page_24.jpg'),
            require('@/assets/hxh_page_25.jpg'),
            require('@/assets/hxh_page_26.jpg'),
            require('@/assets/hxh_page_27.jpg'),
            require('@/assets/hxh_page_28.jpg'),
            require('@/assets/hxh_page_29.jpg'),
            require('@/assets/hxh_page_30.jpg'),
            require('@/assets/hxh_page_31.jpg'),
            require('@/assets/hxh_page_32.jpg'),
            require('@/assets/hxh_page_33.jpg'),
            require('@/assets/hxh_page_34.jpg'),
            require('@/assets/hxh_page_35.jpg'),
            require('@/assets/hxh_page_36.jpg'),
            require('@/assets/hxh_page_37.jpg'),
            require('@/assets/hxh_page_38.jpg'),
            ],
            index: null
        }
    },
    components: {
        gallery: VueGallery
    }
}
</script>

<style>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
        width: 500px;
        height: 500px;
    }
    .searchbar {
        padding: 10px;
        font-size: 17px;
        border: 1px solid grey;
        float: left;
        width: 80%;
        background: #f1f1f1;
    }
    .comicbox {
        width: 100%;
        margin: 0 10%;
    }

</style>