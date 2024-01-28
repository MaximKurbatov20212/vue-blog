<template>
  <div class="container">
    <section class="tasks"
             @dragover="onDragOver"
             @dragstart="onDragStart"
             @dragend="onDragEnd"
    >

      <div class="tasks__column f">
        <h2 class="tasks__title green">{{this.columns[0].title}}</h2>
        <ul class="tasks__list">
          <li class="tasks__item" v-bind:draggable="true" v-for="task in this.columns[0].tasks">{{task.name}}</li>
        </ul>
      </div>

      <div class="tasks__column s">
        <h2 class="tasks__title red">{{this.columns[1].title}}</h2>
        <ul class="tasks__list">
          <li class="tasks__item" v-bind:draggable="true" v-for="task in this.columns[1].tasks">{{task.name}}</li>
        </ul>
      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: "Todo",

  // props: {
  //   title : {
  //     type: String,
  //     required: true
  //   },
  //   tasks: {
  //     type: Array
  //   }
  // },

  data() {
    return {
      columns : [
        {
          title: 'В процессе',
          tasks: [
            { id : Date.now(), name : 'Post1' },
            { id : Date.now(), name : 'Post2' },
            { id : Date.now(), name : 'Post3' },
          ]
        },

        {
          title: 'Потом сделаю',
          tasks: [
            { id : Date.now(), name : 'Post4' },
            { id : Date.now(), name : 'Post5' },
            { id : Date.now(), name : 'Post6' },
          ]
        }
        ]
    }
  },

  methods: {
    onDragStart(e) {
      e.target.classList.add(`selected`);
    },

    onDragEnd(e) {
      e.target.classList.remove(`selected`);
    },

    getNextElement(cursorPosition, currentElement)  {

      // Получаем объект с размерами и координатами
      const currentElementCoord = currentElement.getBoundingClientRect();

      // Находим вертикальную координату центра текущего элемента
      const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

      // Если курсор выше центра элемента, возвращаем текущий элемент
      // В ином случае — следующий DOM-элемент
      return (cursorPosition < currentElementCenter) ?
          currentElement :
          currentElement.nextElementSibling;
    },

    onDragOver(e) {
      e.preventDefault();

      const tasksListElement = document.querySelector(`.tasks__list`);

      const activeElement = tasksListElement.querySelector(`.selected`);
      const currentElement = e.target;

      const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`tasks__item`);

      if (!isMoveable) {
        return;
      }

      // evt.clientY — вертикальная координата курсора в момент,
      // когда сработало событие
      const nextElement = this.getNextElement(e.clientY, currentElement);

      // Проверяем, нужно ли менять элементы местами
      if (
          nextElement &&
          activeElement === nextElement.previousElementSibling ||
          activeElement === nextElement
      ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
      }

      tasksListElement.insertBefore(activeElement, nextElement);
    }
  },
}
</script>

<style scoped>

.tasks {
  display: none;
  /*display: grid;*/
  grid-template-columns: repeat(11, 1fr);

  font-family: Inter, sans-serif;
  font-weight: 400;
}

.tasks__title {
  text-align: center;
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;

  color: #FFF;
  font-size: 22px;
}

.f {
  grid-column: 1 / 6;
}

.s {
  grid-column: 7 / 12;
}

.tasks__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 10px;
}

.tasks__item {
  border-radius: 10px;
  border: 1px solid #FFF;
  background: rgba(217, 217, 217, 0.10);

  padding: 10px 5px;
  text-align: center;
  font-size: 20px;

  cursor: move;
}

.selected {
  opacity: 0.6;
}

.green {
  border: 1px solid #1FE60E;
  background-color: #27FF141A ;
}

.red {
  border: 1px solid #F60000;
  background-color: #FF001F1A ;
}

.movable {
}

</style>