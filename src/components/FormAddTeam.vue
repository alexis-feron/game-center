<script>
import Team from '@/models/Team';
export default {
	name: 'FormAddTeam',
	data() {
		return {
			name: '',
			description: '',
			errorMessage: '',
			errorField: '',
			btnValue: "Submit",
			visibility: "none"
		}
	},
	props: {
		currentTeam: Team,
	},

	mounted() {
		if (this.currentTeam) {
			this.btnValue = "Edit";
			this.name = this.currentTeam.name;
			this.description = this.currentTeam.description;
			this.visibility = "inline-block";
		}
	},

	methods: {
		addTeam: function (e) {
			e.preventDefault();
			this.errorMessage = '';
			const fieldsXName = new Map()
			fieldsXName.set(document.querySelector(".nameField"), 'Name')
			fieldsXName.set(document.querySelector(".descriptionField"), 'Description')

			for (const [key, value] of fieldsXName)
				key.style.borderColor = ""

			for (const [key, value] of fieldsXName) {

				if (!key.value) {
					key.style.border = '2px solid red';
					this.errorMessage = `${value} is required !`;
					return;
				}
				if (value === "Name" && key.value.length < 5) {
					key.style.border = '2px solid red';
					this.errorMessage = `${value} must be at least 5 characters long !`;
					return;
				}
				if (value === "Description" && key.value.length < 20) {
					key.style.border = '2px solid red';
					this.errorMessage = `${value} must be at least 20 characters long !`;
					return;
				}
			}

			if (!this.currentTeam) {
				const team = new Team(this.name, this.description)
				this.$emit('addTeam', team);
			} else {
				this.currentTeam.name = this.name;
				this.currentTeam.description = this.description;
				this.$emit('editTeam', this.currentTeam);
				this.$emit('resetCurrentTeam');
				this.btnValue = "Submit"
				this.visibility = "none";
			}

			this.name = '';
			this.description = '';
		},
		cancel: function () {
			this.$emit('resetCurrentTeam');
			this.btnValue = "Submit"
			this.visibility = "none";
			this.name = '';
			this.description = '';
		}
	}
}
</script>

<template>
	<div class="center">
		<form @submit.prevent>
			<div class="inputbox">
				<input class="nameField" type="text" v-model="name" required="required" />
				<span>Name</span>
			</div>
			<div class="inputbox">
				<input class="descriptionField" v-model="description" required="required" />
				<span>Description</span>
			</div>
			<div class="errorDiv">{{ errorMessage }}</div>
			<div class="inputbox">
				<input type="submit" :value="btnValue" @click="(e) => addTeam(e)" />
			</div>
		</form>
		<div class="canceldiv">
			<button :style="{display: this.visibility}" class="btnCancel" @click="cancel">Or cancel edition</button>
		</div>
	</div>
	
</template>

  
<style scoped lang="scss">
.errorDiv {
	margin-top: -10px;
	margin-bottom: 25px;
}

.center {
	position: relative;
	padding: 0px 50px;
	background: #fff;
	border-radius: 10px;
}

.center .inputbox {
	position: relative;
	width: 300px;
	height: 50px;
	margin-bottom: 30px;
}

.center .inputbox input {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	border: 2px solid #000;
	outline: none;
	background: none;
	padding: 10px;
	border-radius: 10px;
	font-size: 1.2em;
}

.center .inputbox:last-child {
	margin-bottom: 0;
}

.center .inputbox span {
	position: absolute;
	top: 14px;
	left: 20px;
	font-size: 1em;
	transition: 0.6s;
	font-family: sans-serif;
}

.center .inputbox input:focus~span,
.center .inputbox input:valid~span {
	transform: translateX(-13px) translateY(-35px);
	font-size: 1em;
}

.center .inputbox [type="submit"] {
	width: 50%;
	background: #42B983;
	color: #fff;
	border: #fff;
}


.btnCancel {
	width: 75%;
	background: #42B983;
	color: #fff;
	border: #fff;
	height: 35px;
	border-radius: 10px;
	font-size: 1.2em;
}

.canceldiv{
	display: flex;
}
</style>