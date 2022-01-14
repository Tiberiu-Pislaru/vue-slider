new Vue({
    el:"#app",
    data:{
        images:[
            {
                picture:"https://unsplash.it/300/300?image=",
                highPriority: true,
            },
            {
                picture:"https://images.unsplash.com/photo-1642146389720-2561f65902c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
                highPriority: false,
            },
            {
                picture:"https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                highPriority: false,
            },
            {
                picture:"https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80", 
                highPriority: false,
            }
        ],
        indice:0,
    },
    methods:{
        prevImage:function(){
            
            this.indice--;

            if(this.indice < 0){
                this.indice=this.images.length-1;
                this.images[0].highPriority=false;
            }
            else if (this.indice === this.images.length - 2){
                
                this.images[this.images.length - 1].highPriority=false;
            }else{
                this.images[this.indice + 1].highPriority = false;
            }
            this.images[this.indice].highPriority = true

        },
        nextImage: function() {
            this.indice++
            if (this.indice > this.images.length - 1) {
                this.indice=0;
                this.images[this.images.length - 1].highPriority = false;
                // this.images[].highPriority = false;
            } else {
                this.images[this.indice - 1].highPriority = false;
            }
            this.images[this.indice].highPriority = true
            // this.images[this.indice-1].highPriority = false;

            
        }
    }
})