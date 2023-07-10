<template>
    <v-container>
        <v-sheet min-width="300" max-width="500" class="mx-auto">
            <v-form 
                ref="form" 
                class="bg-color"
                @submit.prevent="submit"
            >
                <v-text-field
                    v-model="accessKey"
                    v-show="false"
                ></v-text-field>
                <v-text-field
                    v-model="name"
                    :counter="20"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :counter="30"
                    :rules="emailRules"
                    label="Email"
                    required
                ></v-text-field>

                <v-textarea 
                    v-model="message"
                    clearable 
                    :rules="messageRules"
                    label="Message here"
                    auto-grow
                    :counter="150"
                >
                </v-textarea>

                <div class="d-flex flex-column">
                    <v-btn 
                        color="#212121" 
                        dark 
                        :style="{ color: '#feffff', border: '1px solid #feffff' }"
                        type="submit"
                    >
                        Submit
                    </v-btn>
                </div>
            </v-form>
        </v-sheet>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'contact',
    data: () => ({
        accessKey: 'da6e1202-69b7-4077-b4f2-16469b8aa328',
        name: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
        v => (v && v.length <= 30 ) || 'Email must be less than 30 characters',
        ],
        message: '',
        messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 150 ) || 'Message must be less than 150 characters',
        ],
    }),

    methods: {
        async validate () {
            const { valid } = await this.$refs.form.validate()
            if (valid) {return true;}
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },

        async submit() {

            if (await this.validate()) {
                
                const formData = {
                    accessKey: this.accessKey,
                    name: this.name,
                    email: this.email,
                    message: this.message,
                };
        
                await axios.post('https://api.staticforms.xyz/submit', formData)
                .then(response => {
                    console.log(response);
                    this.reset();
                    this.resetValidation();
                    alert("your email has been sent, tankyou!")
                })
                .catch(error => {
                    console.error(error);
                    alert("Error to submit");
                });
                
            }else {
                alert("something wrong with the validation");
            }

        },
    }
}
</script>
<style scoped>
.bg-color {
    background-color: #212121 !important;
    color: #feffff !important;
}
</style>