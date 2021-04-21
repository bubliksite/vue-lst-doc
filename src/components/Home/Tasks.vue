<template>
  <div class="col-lg-12 col-md-12 col-12 mb-4">
    <div class="card px-3 py-3">
      <h2 class="pb-3">
        <a href="#">Задачи</a>
      </h2>
      <div class="row">
        <a
          class="col-lg-4 col-md-6 col-12"
          href="#"
          v-for="task in tasks"
          :key="task.id"
          ><div class="d-flex align-items-center mb-4">
            <img :src="task.img" />
            <p class="ml-3 mb-0" :class="task.class">
              {{ task.text }}
            </p>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tasks',
    data: () => ({
      tasks: [
        {
          id: 1,
          img: 'http://storage.bblk.ga/lst/tasks/icons/icon-task-danger.png',
          class: 'danger-task',
          text: 'Какое-то очень срочное и важное задание или от руководителя'
        },
        {
          id: 2,
          img: 'http://storage.bblk.ga/lst/tasks/icons/icon-task-tender.png',
          class: 'tender-task',
          text: 'Подготовить договор по результатам тендера'
        },
        {
          id: 3,
          img:
            'http://storage.bblk.ga/lst/tasks/icons/icon-task-sand-clock.png',
          class: 'sand-clock-task',
          text:
            'Задача зависла, нерешаемая или что-то еще случилось, жду ответа'
        },
        {
          id: 4,
          img: 'http://storage.bblk.ga/lst/tasks/icons/icon-task-contract.png',
          class: 'contract-task',
          text: 'Дополнительное соглашение заключить с кем-то там'
        },
        {
          id: 5,
          img:
            'http://storage.bblk.ga/lst/tasks/icons/icon-task-acceptance.png',
          class: 'danger-acceptance',
          text: 'Задача по проверке, оформлению выполнения и прочее...'
        },
        {
          id: 6,
          img:
            'http://storage.bblk.ga/lst/tasks/icons/icon-task-additional.png',
          class: 'additional-task',
          text: 'Какое-то задание от экономистов или других служб, внештатное'
        },
        {
          id: 7,
          img: 'http://storage.bblk.ga/lst/tasks/icons/icon-task-delete.png',
          class: 'delete-task',
          text: 'Задача помечнная как отмененная, невозможная к исполнению'
        },
        {
          id: 8,
          img: 'http://storage.bblk.ga/lst/tasks/icons/icon-task-done.png',
          class: 'done-task',
          text:
            'Успешно выполненное задание, показывается, только если нечего...'
        }
      ]
    })
  }
</script>

<style scoped></style>
