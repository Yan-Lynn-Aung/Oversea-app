<template>
    <div class="container">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">{{$t('post.title')}}</th>
                    <th scope="col">{{$t('post.description')}}</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="posts in post" :key="posts.id">
                    
                    <td>{{posts.title}}</td>
                    <td>{{posts.description}}</td>
                </tr>
               
            </tbody>
        </table>
    </div>
</template>
<script>
import { api }  from '../../../api/v1';
export default {
    data() {
        return {
            post:[],
        }
    },
    mounted() {
        api.get('/post').then(res=>{
            this.post = res.data
        })
        .catch(err=>{
            console.log(err.message)
        });
    },
    methods: {

    },
};
</script>