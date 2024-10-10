<template>
    <v-container class="mb-16">
        <h3 class="text-h4 mb-8">Featured topics by category</h3>
        <div class="flex-wrap flex-sm-nowrap d-flex w-100 ga-10 justify-space-between">
            <div class="w-auto" v-for="(category, index) in courses.categories" :key="index">
                <h3 class="mb-4">{{ category.name }}</h3>
                <ul>
                    <li class="mb-3" v-for="(course, index) in category.courses">
                        <a>{{ course.name }}</a>
                        <span>{{ course.learners }} learners</span>
                    </li>
                </ul>
            </div>
        </div>
    </v-container>
</template>

<script setup>

 const courses = {
    "title": "Course Categories",
    "categories": [
      {
        "name": "Development",
        "courses": [
          {
            "name": "Python",
            "learners": 36354994
          },
          {
            "name": "Web Development",
            "learners": 11415615
          },
          {
            "name": "Machine Learning",
            "learners": 7070015
          }
        ]
      },
      {
        "name": "Business",
        "courses": [
          {
            "name": "Financial Analysis",
            "learners": 1195282
          },
          {
            "name": "SQL",
            "learners": 5977561
          },
          {
            "name": "PHP",
            "learners": 1733398
          }
        ]
      },
      {
        "name": "IT and Software",
        "courses": [
          {
            "name": "Amazon AWS",
            "learners": 6123456
          },
          {
            "name": "Ethical Hacking",
            "learners": 10931066
          },
          {
            "name": "Cyber Security",
            "learners": 3998037
          }
        ]
      },
      {
        "name": "Design",
        "courses": [
          {
            "name": "Photoshop",
            "learners": 10909736
          },
          {
            "name": "Graphic Design",
            "learners": 3381057
          },
          {
            "name": "Drawing",
            "learners": 2410849
          }
        ]
      }
    ]
  }
</script>

<style lang="scss" scoped>
    li{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5px;

        a{
            text-decoration: underline;
        }
        span{
            font-size: 0.875em;
            color: $color-gray-300;
        }
    }
</style>

  