<template>
    <h1>博客详情:{{$route.params.id}}</h1>
    <h1>{{blogContent}}</h1>
</template>

<script>
export default {
    data() {
        return {
            blogContent:""
        }
    },
    created() {
        let id = this.$route.params.id
        this.getBlogDataById(id)
    },
    methods: {
        getBlogDataById(id){
            switch(id){
                case "1":this.blogContent = "切图必备技能";break;
                case "2":this.blogContent = "java很好用";break;
                case "3":this.blogContent = "js很重要";break;
                case "4":this.blogContent = "ts很厉害";break;
                case "5":this.blogContent = "python很方便";break;
            }
        }
    }
}
</script>