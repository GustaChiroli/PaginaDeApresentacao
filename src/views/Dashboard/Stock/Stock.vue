<template>
  <v-container fluid style="height: 100vh" class="d-flex fill-height">
		<v-row class="d-flex justify-center align-start">
			<v-col cols="12" sm="10">
					<v-row class="justify-end">
						<v-col cols="2">
              <div class="text-center">
                <v-dialog
                  v-model="dialog"
                  width="auto"
                >
                  <template v-slot:activator="{ props }">
                    <v-btn 
                      class="btn-principal"
                      @click="openRegister"
                    >
                      Cadastro
                    </v-btn>
                  </template>
                  <stock></stock>
                </v-dialog>
              </div>
						</v-col>
						<v-col cols="2">
							<v-btn class="btn-principal" >Historico</v-btn>
						</v-col>
					</v-row>
				<v-card class="mt-5">
					<v-row>
						<v-col cols="12">
							<v-card>
                  <v-card-title>
                      Produtos
                      <v-spacer></v-spacer>
                      <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Pesquisar"
                      ></v-text-field>
                  </v-card-title>
                  <v-data-table
                      :headers="headers"
                      :items="desserts"
                      :items-per-page="8"
                      :search="search"
                  ></v-data-table>
              </v-card>
              <v-table
              hover="true"
              >
                <thead>
                  <tr>
                    <th 
                      class="text-center"
                      v-for="item in itemsName"
                    >
                      {{ item }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-center"
                    v-for="item in items"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>{{ item.tipo }}</td>
                    <td>{{ item.peso }}</td>
                    <td>{{ item.validade }}</td>
                    <td>{{ item.valor }}</td>
                    <td>{{ item.lucro }}</td>
                    <td>{{ item.quantidade }}</td>
                    <td>
                      <v-tooltip text="editar">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            variant="text"
                            icon="mdi-text-box-edit-outline"
                            size="small"
                          >
                          </v-btn>
                        </template>
                      </v-tooltip>
                      <v-tooltip text="promoção">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            variant="text"
                            icon="mdi-sale-outline"
                            size="small"
                          >
                          </v-btn>
                        </template>
                      </v-tooltip>
                      <v-tooltip text="deletar">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            variant="text"
                            icon="mdi-trash-can-outline"
                            size="small"
                          >
                          </v-btn>
                        </template>
                      </v-tooltip>
                    </td>
                  </tr>
                </tbody>
              </v-table>
						</v-col>
					</v-row>
				</v-card>
      		</v-col>
		</v-row>
	</v-container>      
</template>

<script>
import Stock from './Register/Register.vue'

  export default {
    components: {
      Stock,
    },
    data () {
      return {
        dialog: false,
        search: '',
        itemsName: [
          'nome','tipo','peso','validade','valor','lucro','quantidade', 'opções'
        ],
        items: [
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          {
            name: 'doritos',
            tipo: 'snacks',
            peso: '167g',
            validade: '06/06/2023',
            valor: '12.00',
            lucro: '0.40',
            quantidade: '15',            
          },
          
        ],
      }
    },
    methods: {
      openRegister() {
        this.dialog = !this.dialog;
      }
    }
  }
</script>