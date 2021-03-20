new Vue({ 
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      images: [],
      order:'Desc',
      page: 100,
      limit: 3,
      pagination_count: 0, //default until we get a result with the 'Pagination-Count' header in the response
    },
    created(){
        this.getImages();
    } ,
    watch: {
        // if the user changes any of these values, then make a new request to the API
        page: function()
        {
            this.getImages();
        },
        limit: function()
        {
            this.getImages();
        },
        order: function()
        {
            this.getImages();
        }
    },
    computed:{

        getNumPages: function()
        {
        return Math.floor(this.pagination_count / this.limit) | 0;
        }
    },
    methods:{

        async nextBtn()
        {
            this.page++;
            await this.getImages();
        },
        async getImages()
        {
            try{
                axios.defaults.headers.common['x-api-key'] = "0d6c5d29-0b74-4c21-a06b-5ff1681debab" // Replace this with your API Key

                let query_params = {
                    limit: this.limit,
                    order: this.order,
                    page: this.page-1,
                }

                let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_params } ) 
                
                this.pagination_count = response.headers['pagination-count'];
                this.images = response.data 

                console.log("-- ("+this.images.length +") Images from TheCatAPI.com")
                console.log( this.pagination_count ,'images available for this query.')
                
            }catch(err){
                console.log(err)
            }
        }
    }
})
