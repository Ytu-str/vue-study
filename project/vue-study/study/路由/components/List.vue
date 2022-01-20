<template>
    <h1>列表</h1>
    <ul>
        <li v-for="item in blogList">
            <router-link :to="'/blog/'+item.id">{{item.title}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            blogList:[
                {id:1,title:'html与css基础'},
                {id:2,title:'java基础'},
                {id:3,title:'javascript基础'},
                {id:4,title:'tyepscript基础'},
                {id:5,title:'python基础'}
            ]
        }
    },
}
</script>