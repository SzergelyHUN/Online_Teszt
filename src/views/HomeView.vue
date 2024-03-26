<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const termekek = ref();
const gyartok = ref();
const valasztas = ref("Összes");
const valasztottId = ref();
const joTelefonok = ref([]);

DataService.getProducts()
  .then((resp) => {
    termekek.value = resp.data;
    console.log(termekek.value);
  })
  .catch((err) => {
    console.log(err);
  });

DataService.getBrands()
  .then((resp) => {
    gyartok.value = resp.data;
    console.log(gyartok.value);
  })
  .catch((err) => {
    console.log(err);
  });


const valaszto = () => {
  valasztottId.value = gyartok.value.find((t) => t.nev === valasztas.value)._id;
  console.log(valasztottId.value);
  joTelefonok.value = telefonok.value.filter(
    (t) => t.gyarto === valasztottId.value
  );
  console.log(joTelefonok.value);
};
</script>

<template>
  <div class="container">
    <h1>Gyártók</h1>
  <div>
    <select v-model="valasztas" @change="valaszto">
      <option>Összes</option>
      <option v-for="gyarto in gyartok">{{ gyarto.name }}</option>
    </select>  
  </div>

  <!-- <select >
    <option v-for="gyarto in gyartok">{{ gyarto.nev }}</option>
  </select> -->
  <div>
    <table>
      <tr>
        <th>Termék neve</th>
        <th>Leírás</th>
        <th>Ára</th>
      </tr>
      <tr v-for="termek in termekek">
        <td>{{ termek.name }}</td>
        <td>{{ termek.description }}</td>
        <td>{{ termek.price }}</td>
      </tr>
    </table>
  </div>
  </div>



</template>

<style scoped>

h1{
  margin-left: 42%;
}

select{
  margin-top: 3rem;
  margin-left: 30%;
  width: 40%;
}

option{
  text-align: center;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th{
  text-align: center;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>