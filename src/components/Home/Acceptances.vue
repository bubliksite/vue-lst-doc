<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card h-100 px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Выполнение</a>
        <div class="row">
          <a
            class="col-6 mt-3"
            href="#"
            v-for="acceptance in acceptances"
            :key="acceptance.id"
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
                      acceptance.acceptancesCount,
                      acceptance.acceptancesGiven
                    )
                  "
                  :stroke-dasharray="
                    `${(125.6 * acceptance.acceptancesGiven) /
                      acceptance.acceptancesCount}, ${(125.6 *
                      (acceptance.acceptancesCount -
                        acceptance.acceptancesGiven)) /
                      acceptance.acceptancesCount}`
                  "
                  stroke-dashoffset="0"
                ></circle>
              </svg>
              <p
                class="small m-0 position-absolute text-center font-weight-bold"
                style="width:48px;font-size:65%;"
              >
                {{
                  acceptance.acceptancesGiven +
                    '/' +
                    acceptance.acceptancesCount
                }}
              </p>
              <div class="ml-3">
                <p class="font-weight-bold m-0" style="text-transform:unset">
                  НОЯ 20
                </p>
                <p class="m-0 text-muted small" style="font-size:70%;">
                  102 456 952,36
                </p>
              </div>
            </div></a
          >
        </div>
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Acceptances',
    data: () => ({
      acceptances: [
        {
          id: 1,
          month: '10',
          year: '2020',
          summary: 102456952.36,
          acceptancesCount: 30,
          acceptancesGiven: 20
        },
        {
          id: 2,
          month: '09',
          year: '2020',
          summary: 23456789.23,
          acceptancesCount: 55,
          acceptancesGiven: 45
        },
        {
          id: 3,
          month: '08',
          year: '2020',
          summary: 345789652.23,
          acceptancesCount: 60,
          acceptancesGiven: 10
        },
        {
          id: 4,
          month: '07',
          year: '2020',
          summary: 456123.32,
          acceptancesCount: 68,
          acceptancesGiven: 60
        },
        {
          id: 5,
          month: '06',
          year: '2020',
          summary: 569325.21,
          acceptancesCount: 70,
          acceptancesGiven: 68
        },
        {
          id: 6,
          month: '05',
          year: '2020',
          summary: 122365.63,
          acceptancesCount: 33,
          acceptancesGiven: 30
        },
        {
          id: 7,
          month: '04',
          year: '2020',
          summary: 234569878.36,
          acceptancesCount: 45,
          acceptancesGiven: 44
        },
        {
          id: 8,
          month: '03',
          year: '2020',
          summary: 987652.32,
          acceptancesCount: 87,
          acceptancesGiven: 87
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
