<template>
    <div>
        <gallery :images="chapters[0].images" :index="index" @close="index = null"></gallery>
        
        <ais-index
                app-id="KWN8R47EZ0"
                api-key="67c7f16471c0cfb5a30db6c8f4160148"
                index-name="dev_comic_reader"
                :query="query"
        >
            <ais-search-box  :autofocus="true">
                <input v-model="query" placeholder="Search for a quote, character, or emotion" class="searchbar"/>
            </ais-search-box>
            <p><em>(Click on an image to open gallery mode)</em></p>
            <ais-powered-by></ais-powered-by>
            <ais-no-results></ais-no-results>
            <div class="comicbox">
                <div v-if="query === ''" v-for="(chapter, chapterIndex) in chapters" :key="chapterIndex">
                    <figure style="margin-right:7.5%"> 
                        <img class="image" :src="chapters[chapterIndex].images[chapter.preview]" :key="chapter.preview" @click="index = chapter.preview" >
                        <figcaption slot="footer">Chapter {{ chapter.chapter }} -- <b>{{ chapter.title }}</b> --  Pages : {{ chapters[chapterIndex].images.length }}</figcaption>
                    </figure> 
                </div>
                <ais-results v-else>
                    <template slot-scope="{ result }">
                        <figure style="float:left;">
                            <img class="image" :src="chapters[result.chapter - 1].images[result.page]" :key="result.page" @click="index = result.page" >
                            <figcaption slot="footer">Page {{ result.page }}</figcaption>
                        </figure>     
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
            chapters: [
                {
                    chapter: 1,
                    title: "The Day of Departure",
                    preview: 7,
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
                }  
            ],
            index: null,
            query: ''
        }
    },
    components: {
        gallery: VueGallery
    }
}
</script>

<style>
    .image {
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
        width: 80%;
        background: #f1f1f1;
    }
    .comicbox {
        width: 100%;
        margin: 0 3%;
    }

</style>