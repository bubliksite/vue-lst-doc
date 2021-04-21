<template>
  <div class="col-lg-4 col-md-6 col-12  mb-4">
    <div class="card h-100 px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Объекты</a>
      </h2>
      <a
        class="d-flex align-items-center justify-content-between my-2"
        v-for="object in objects"
        :key="object.id"
        href="#"
        ><div class="d-flex align-items-center position-relative">
          <svg style="width:48px;height:48px;transform:rotate(-90deg)">
            <circle
              r="20"
              cy="50%"
              cx="50%"
              fill="transparent"
              stroke-width="8"
              stroke="#172f5f"
            ></circle>
            <circle
              r="20"
              cy="50%"
              cx="50%"
              fill="transparent"
              stroke-width="8"
              :stroke="
                getProgressColor(
                  object.allSuppSummary,
                  object.closingSuppSummary
                )
              "
              :stroke-dasharray="
                `${(125.6 *
                  ((object.closingSuppSummary / object.allSuppSummary) * 100)) /
                  100}, ${(125.6 *
                  (100 -
                    (object.closingSuppSummary / object.allSuppSummary) *
                      100)) /
                  100}`
              "
              stroke-dashoffset="0"
            ></circle>
          </svg>
          <p
            class="small m-0 position-absolute text-center font-weight-bold"
            style="width:48px;font-size:70%;"
          >
            {{
              Math.floor(
                (object.closingSuppSummary / object.allSuppSummary) * 100
              )
            }}%
          </p>
          <div class="ml-3">
            <p class="font-weight-bold m-0" style="text-transform:unset">
              {{ object.number }}
            </p>
            <p class="m-0 text-muted small">{{ object.suppCounter }} дс</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <p class="m-0 text-muted small">от {{ object.date }}</p>
        </div></a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Objects',
    data: () => ({
      objects: [
        {
          id: 1,
          number: 'ГП-4ЯН3/10-2020',
          date: '20.11.2020',
          suppCounter: 14,
          allSuppSummary: 140,
          closingSuppSummary: 30
        },
        {
          id: 2,
          number: 'ГП-4ЯН2/05-2020',
          date: '18.11.2020',
          suppCounter: 2,
          allSuppSummary: 20,
          closingSuppSummary: 10
        },
        {
          id: 3,
          number: 'ГП-4ЯН1/03-2020',
          date: '13.11.2020',
          suppCounter: 23,
          allSuppSummary: 230,
          closingSuppSummary: 160
        },
        {
          id: 4,
          number: 'ГП-3ЯН2.3/07-2019',
          date: '10.06.2007',
          suppCounter: 203,
          allSuppSummary: 2030,
          closingSuppSummary: 2030
        }
      ]
    }),
    methods: {
      getProgressColor(all, closed) {
        let percent = closed / all
        if (percent < 0.05) {
          return '#f24734'
        } else if (percent > 0.95) {
          return '#46cd93'
        } else {
          return '#fdba45'
        }
      }
    }
  }
</script>

<style scoped></style>
