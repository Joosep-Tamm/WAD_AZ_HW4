<template>
    <div class="form-wrapper">
        <form @submit.prevent="validatePassword">
            <div class="side-by-side">
                <p class="form-label">Username</p>
                <input class="form-input" v-model="username" type="text" placeholder="Username" required />
            </div>

            <div class="side-by-side">
                <p class="form-label">Password</p>
                <input class="form-input" v-model="password" type="password" placeholder="Password" required />
            </div>
            <button class="submit-button" type="submit">Sign Up</button>
        </form>
        <p class="error" v-if="error">{{ error }}</p>
    </div>
    <div class="empty-space">
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        validatePassword() {
            const conditions = [];
            if (this.password.length < 8 || this.password.length > 15) {
                conditions.push('length (8-15 characters)');
            }
            if (!/[A-Z]/.test(this.password)) {
                conditions.push('one uppercase letter');
            }
            if (!/[a-z]{2}/.test(this.password)) {
                conditions.push('at least two lowercase letters');
            }
            if (!/[0-9]/.test(this.password)) {
                conditions.push('one numeric value');
            }
            if (!/^[A-Z]/.test(this.password)) {
                conditions.push('start with uppercase');
            }
            if (!/_/.test(this.password)) {
                conditions.push('the character "_"');
            }

            if (conditions.length) {
                this.error = `Password invalid: ${conditions.join(', ')}`;
            } else {
                this.error = '';
                alert('Signup successful!');
            }
        },
    },
};
</script>


<style>
.form-wrapper {
    margin-top: 20px;
    background-color: rgb(235, 235, 165);
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.side-by-side {
    display: flex;
    align-items: center;
}

.form-label {
    width: 120px;
    margin-right: 15px;
    font-weight: bold;
}

.form-input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;

}

.submit-button {
    background-color: rgb(101, 101, 248);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    align-self: center;
}

.submit-button:hover {
    background-color: rgb(79, 79, 212);
}

.error {
    color: red;
    text-align: center;
    margin-top: 10px;
    max-width: 320px;
}

.empty-space {
    flex: 1;
}
</style>
