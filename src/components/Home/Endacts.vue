<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card h-100 px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Акты сдачи</a>
      </h2>
      <a class="d-flex align-items-center my-2" href="#"
        ><div class="d-flex align-items-center">
          <img src="@/assets/img/endacts/done.png" />
          <div class="ml-3">
            <p
              class="font-weight-bold text-uppercase m-0"
              style="text-transform:unset"
            >
              Готово к выдаче
            </p>
            <p class="m-0 text-muted small">{{ doneActs + '/' + totalActs }}</p>
          </div>
        </div></a
      >
      <a class="d-flex align-items-center my-2" href="#"
        ><div class="d-flex align-items-center">
          <img src="@/assets/img/endacts/money.png" />
          <div class="ml-3">
            <p
              class="font-weight-bold text-uppercase m-0"
              style="text-transform:unset"
            >
              Экономисты
            </p>
            <p class="m-0 text-muted small">{{ econActs + '/' + totalActs }}</p>
          </div>
        </div></a
      >
      <a class="d-flex align-items-center my-2" href="#"
        ><div class="d-flex align-items-center">
          <img src="@/assets/img/endacts/nuts.png" />
          <div class="ml-3">
            <p
              class="font-weight-bold text-uppercase m-0"
              style="text-transform:unset"
            >
              Ген. директор
            </p>
            <p class="m-0 text-muted small">{{ nutActs + '/' + totalActs }}</p>
          </div>
        </div></a
      >
      <a class="d-flex align-items-center my-2" href="#"
        ><div class="d-flex align-items-center">
          <img src="@/assets/img/endacts/gear.png" />
          <div class="ml-3">
            <p
              class="font-weight-bold text-uppercase m-0"
              style="text-transform:unset"
            >
              Гарантийный отдел
            </p>
            <p class="m-0 text-muted small">
              {{ supportActs + '/' + totalActs }}
            </p>
          </div>
        </div></a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Endacts',
    data: () => ({
      totalActs: 250,
      doneActs: 123,
      econActs: 78,
      nutActs: 12,
      supportActs: 38
    })
  }
</script>

<style scoped></style>
