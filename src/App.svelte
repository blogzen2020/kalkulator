<table class="table table-bordered">
 <thead>
  <tr>
   <th>Harga</th>
   <th>Banyak</th>
   <th>Total</th>
  </tr>
 </thead>
 <tbody>
  {#each data as x}
  <tr>
   <td>
    <input type="tel" class="form-control" bind:value={x.harga}>
   </td>
   <td>
    <input type="tel" class="form-control" placeholder="1" bind:value={x.banyak}>
   </td>
   <td>
    <input type="tel" class="form-control" readonly bind:value={x.total_formatted}>
   </td>
  </tr>
  {/each}
 </tbody>
</table>
<div class="tombol">
 <div class="btn btn-light btn-lg">Total: {total.toLocaleString("id")}</div>
</div>

<style>
 tbody td {
  padding: 0;
 }
 input {
  border: none !important;
  box-shadow: none;
  background: none;
 }
 .tombol {
  position: fixed;
  bottom: 20px;
  right: 20px;
 }
 .table {
  margin-bottom: 90px;
 }
</style>

<script>
 let info
 let data = [
  {
   harga: null,
   banyak: null,
   total: null,
   total_formatted: ""
  }
 ]
 $: data.map(x => {
  let banyak
  if (x.banyak < 1){
   banyak = 1
  } else {
   banyak = x.banyak
  }
  x.total = x.harga * banyak
 })
 const tambah_baris = () => {
  data = [...data, {
   harga: null,
   banyak: null,
   total: null,
   total_formatted: ""
  }]
 }
 $: data.map(x => x.total_formatted = x.total.toLocaleString("id"))
 let total = 0
 $: total = data.reduce((a, b) => a + b.total, 0)
 $: if (data[data.length - 1].harga != null){
  data = [...data, {
   harga: null,
   banyak: null,
   total: null,
   total_formatted: ""
  }]
 }
</script>
