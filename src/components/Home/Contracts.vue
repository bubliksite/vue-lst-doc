<template>
  <div class="col-lg-8 col-md-6 col-12 mb-4">
    <div class="card h-100 px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Договоры</a>
      </h2>
      <table class="table text-white table-responsive-md small">
        <thead>
          <tr>
            <th scope="col">
              Ключ
            </th>
            <th scope="col">
              Номер договора
            </th>
            <th scope="col">
              Подрядчик
            </th>
            <th scope="col">
              Дата
            </th>
            <th scope="col">
              Прогресс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contract in contracts" :key="contract.id">
            <th scope="row">
              <a href="#">{{ contract.key }}</a>
            </th>
            <td>
              <a href="#">{{ contract.number }}</a>
            </td>
            <td>
              {{ contract.contractor }}
            </td>
            <td>
              {{ contract.date }}
            </td>
            <td style="vertical-align:middle">
              <a class="progress" href="#"
                ><div
                  class="progress-bar"
                  :class="getProgressColor(contract.step, contract_steps)"
                  role="progressbar"
                  :style="`width:${(contract.step / contract_steps) * 100}%`"
                  :aria-valuenow="`${(contract.step / contract_steps) * 100}%`"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contracts',
    data: () => ({
      contract_steps: 6,
      contracts: [
        {
          id: 1,
          key: 32511,
          number: 'П125/11-2020',
          contractor: 'Победа',
          date: '25.12.2023',
          step: 1
        },
        {
          id: 2,
          key: 45896,
          number: 'П122/11-2016',
          contractor: 'Аэрофлот',
          date: '25.08.2019',
          step: 3
        },
        {
          id: 3,
          key: 45676,
          number: 'П12/09-2020',
          contractor: 'Строй-Маркет',
          date: '25.09.2007',
          step: 6
        },
        {
          id: 4,
          key: 54689,
          number: 'П123/10-2020',
          contractor: 'Рога и Копыта',
          date: '12.01.2020',
          step: 0
        }
      ]
    }),
    methods: {
      getProgressColor(step, steps) {
        let percent = step / steps
        if (percent < 0.3) {
          return 'bg-danger'
        } else if (percent > 0.7) {
          return 'bg-success'
        } else {
          return 'bg-warning'
        }
      }
    }
  }
</script>

<style scoped></style>
