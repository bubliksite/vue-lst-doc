<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card h-100 px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Подрядчики</a>
      </h2>
      <a
        v-for="contractor in contractors"
        :key="contractor.id"
        class="d-flex align-items-center justify-content-between my-2"
        href="#"
      >
        <div class="d-flex align-items-center">
          <img
            v-if="contractor.logo !== ''"
            class="rounded-circle"
            :src="contractor.logo"
            style="height:40px;width:40px"
          />
          <div
            v-else
            :class="`bg-${randomColor(colors)}`"
            class="rounded-circle d-flex align-items-center justify-content-center"
            style="height:40px;width:40px"
          >
            <h3 class="m-0">
              {{ hasImage(contractor.title) }}
            </h3>
          </div>
          <div class="ml-3">
            <p class="font-weight-bold m-0" style="text-transform:unset">
              {{ contractor.opf + ' «' + contractor.title + '»' }}
            </p>
            <p class="m-0 text-muted small">
              {{ declensionDog(contractor.dog_counter) }}
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <p class="m-0 text-muted small">{{ contractor.added }}</p>
        </div></a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Agents',
    data: () => ({
      contractors: [
        {
          id: 1,
          opf: 'ООО',
          title: 'Лента',
          logo: 'http://storage.bblk.ga/lst/agents/logos/lenta-logo.png',
          added: '20.11.2020',
          dog_counter: 14
        },
        {
          id: 2,
          opf: 'АО',
          title: 'Ростелеком',
          logo: '',
          added: '13.11.2020',
          dog_counter: 14
        },
        {
          id: 3,
          opf: 'ООО',
          title: 'Сервис',
          logo: '',
          added: '18.11.2020',
          dog_counter: 14
        },
        {
          id: 4,
          opf: 'ПАО',
          title: 'Банк Санкт-Петербург',
          logo: 'http://storage.bblk.ga/lst/agents/logos/bspb-logo.png',
          added: '20.11.2020',
          dog_counter: 14
        }
      ],
      colors: ['blue', 'primary', 'pink', 'success']
    }),
    methods: {
      declensionDog(counter) {
        let lastNum = Number(counter.toString().slice(-1))
        switch (lastNum) {
          case 1:
            return counter + ' договор'
          case 2 || 3 || 4:
            return counter + ' договора'
          default:
            return counter + ' договоров'
        }
      },
      hasImage(title) {
        return title.slice(0, 1)
      },
      randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
      }
    }
  }
</script>

<style scoped></style>
