<template>
	<div>
		<v-card
			class="pl-8 pr-8 pb-8"
			min-width="600"
			max-width="800"
			title="Cadastrar Item"
		>
			<v-form ref="form">
				<v-text-field
					v-model="name"
					:counter="10"
					:rules="nameRules"
					label="Name"
					required
				></v-text-field>
				<div class="d-flex">
					<v-select
						class="mr-4"
						v-model="select"
						:items="items"
						:rules="[v => !!v || 'Item is required']"
						label="Item"
						required
					></v-select>
					<v-text-field
						v-model="another"
						:counter="10"
						label="outro"
						required
					></v-text-field>
				</div>
				<div class="d-flex">
					
					<v-checkbox
						v-model="checkbox"
						:rules="[v => !!v || 'You must agree to continue!']"
						label="Não perecivel"
						required
					></v-checkbox>
				</div>

				

				<div class="d-flex flex-column">
					<v-btn
					color="success"
					class="mt-4"
					block
					@click="validate"
					>
					Validate
					</v-btn>

					<v-btn
					color="error"
					class="mt-4"
					block
					@click="reset"
					>
					Reset Form
					</v-btn>

					<v-btn
					color="warning"
					class="mt-4"
					block
					@click="resetValidation"
					>
					Reset Validation
					</v-btn>
				</div>
			</v-form>
		</v-card>
	</div>
</template>

<script>
	export default {
		data: () => ({
			valid: true,
			name: '',
			another: '',
			nameRules: [
				v => !!v || 'Name is required',
				v => (v && v.length <= 10) || 'Name must be less than 10 characters',
			],
			select: null,
			items: [
				'snacks',
				'bebida',
				'higiene',
				'tabaco',
				'laticinios',
				'frios',
				'outro',
			],
			checkbox: false,
		}),

		methods: {
			async validate () {
				const { valid } = await this.$refs.form.validate()

				if (valid) alert('Form is valid')
			},
			reset () {
				this.$refs.form.reset()
			},
			resetValidation () {
				this.$refs.form.resetValidation()
			},
		},
	}
</script>
