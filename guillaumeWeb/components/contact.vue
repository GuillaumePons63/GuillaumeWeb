<template>
    <div class="container">
        <h2 class="text-center">Contactez-moi</h2>
        <form @submit.prevent="submitForm" class="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Nom :</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">E-mail :</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="col-md-12">
                <label for="subject" class="form-label">Sujet :</label>
                <input type="text" class="form-control" id="subject" v-model="subject" required>
            </div>
            <div class="col-md-12">
                <label for="message" class="form-label">Message :</label>
                <textarea class="form-control" id="message" v-model="message" required></textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary m-auto d-block" @click="mailInput()">Envoyer</button>
            </div>
        </form>
    </div>
</template>



<script setup>
const mail = useMail();

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const mailInput = () => {
    mail.send({
        from: name.value,
        subject: `${subject.value} - ${email.value}`,
        text: message.value,
    }).then(() => {
        alert('Message envoyé avec succès')
    }).catch((error) => {
        alert(error.message)
    })

}


</script>
