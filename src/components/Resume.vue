<template>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card class="maxwidth">
          <v-card-title :class="['text-center', 'text-wrap', 'text-h6', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="bg-white text--primary mt-2">
            <p>{{ item.text }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </template>

<script>
export default {
  name: 'resume',
  data: () => ({
    items: [
      {
        color: 'red-lighten-2',
        icon: 'mdi-star',
        title: "Bachelor's Degree in Mechatronics Engineering at IFSC - Florianopolis",
        text: 'During my time in college, I dedicated three semesters to programming. In the first semester, I embarked on a project where I developed a sensor-based car capable of avoiding obstacles and following a predefined path on the ground. The second semester focused solely on programming in C, while the third semester delved into the realm of C++. It was during these experiences that I truly discovered my passion for coding, prompting me to make the bold decision of canceling my enrollment in order to pursue my true calling in the world of programming.',
      },
      {
        color: 'purple-lighten-2',
        icon: 'mdi-book-variant',
        title: "The Genesis of a Developer's Journey",
        text: 'I invested in programming courses to acquire essential skills in HTML, CSS, and JS. Additionally, I pursued a degree in Systems Analysis and Development at Estácio de Sá University, which provided me with a solid foundation in various aspects of software development. It was through this combination of self-learning and formal education that I successfully secured my first internship opportunity.',
      },
      {
        color: 'green-lighten-1',
        icon: 'mdi-airballoon',
        title: "My First Internship at Ciclix Company",
        text: 'During the internship selection process at Ciclix, I made a great effort to apply everything I had learned up until that point. Shortly thereafter, I received the exciting news that I had been chosen for the position, which involved programming in the Flutter language. I was immersed in an environment filled with knowledge beyond what I had already acquired, which further fueled my desire to learn. Throughout the internship, I worked on developing a hospital management and tracking system, gaining valuable experience in a real-world setting.',
      },
      {
        color: 'indigo-lighten-2',
        icon: 'mdi-layers-triple',
        title: "My Second Internship at AQTech Company",
        text: 'My second internship was at AQTech, a company specialized in implementing solutions for fault diagnosis and prognostics in power generators. During this internship, I acquired many new skills, with my main focus being on learning Vue.js and deepening my knowledge of JavaScript. These languages have become my primary areas of expertise today.',
      },
    ],
  }),
}
</script>

<style scoped>
.maxwidth{
  max-width: 375px;
}
</style>