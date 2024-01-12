const app = Vue.createApp({
    data(){
        return {
            testing : "testing vue js",
            state : true,
            inputName: "",
            names: [],
            error: "",
            showError : false,
            result: "",
        }
    },
    computed:{
        isReady(){
            return this.names.length > 1;
        }
    },
    methods:{
        addNameToList(){
            const username = this.inputName;
            if(this.validation(username)){
                this.names.push(username);
                this.inputName = "";
            }else{
                this.showError = true;
                console.log("sini");
            }
        },
        validation(value){
            this.showError = false;
            if(value === ""){
                this.error = "The name cannot be filled in blank.";
                return false;
            }
            
            if(this.names.includes(value)){
                this.error = "Name must be unique.";
                return false;
            }
            return true;
            
        },
        removeName(index){
            this.names.splice(index, 1);
            this.state = true;

        },
        showResult(){
            this.generateResult();
            this.state = false;
        },
        getRandomName(){
            return this.names[Math.floor(Math.random() * this.names.length)];
        },
        generateResult(){
            let randomName = this.getRandomName();
            if(this.result !== ""){
                while(randomName === this.result){
                    randomName = this.getRandomName();
                }
            }
            this.result = randomName;
        }

    }
}).mount('#app');