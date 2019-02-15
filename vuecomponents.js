const componentsHTML = {
  "row": `
  <div class="row">
    <div class="row-title">{{title}}</div>
    <div class="row-stats">
      <slot></slot>
    </div>
    <div class="button load-more-projects" v-show="showLoadMore" @click="loadMore(projectRowStat)">➕ Show more</div>
  </div>
  `,
  "stat": `
  <div class="stat">
    <div class="stat-value">{{value}}</div>
    <div class="stat-name" :class="{'emoji': emoji}">
      <slot></slot>
    </div>
  </div>
  `,
  "project": `
  <div class="project">
    <div class="project-title" :title="project.title" @click="openProject(project.id)">{{ project.title.length > 20 ? project.title.substring(0,17)+"..." : project.title }}</div>
    <div class="project-info">
      <img class="project-thumbnail" :src="\`https://cdn2.scratch.mit.edu/get_image/project/\${project.id}_100x80.png\`" @click="openProject(project.id)">
      <div class="project-stats" v-if="showStats">
        <div v-for="stat in statNames"><span class="project-stat-emoji">{{statEmojis[stat]}}</span> <span class="project-stat-value" :class="{ 'project-stat-bold' : sortedBy === stat }">{{n(project.stats[stat])}}<span v-if="stat === 'liking'">%</span></span>
        </div>
      </div>
    </div>
  </div>
  `
};

Vue.component("row", {
  methods: {
    loadMore: function(stat){
      this.$root.$data.projectRowShow[stat] += 3;
    }
  },
  props: ["title", "projectRowStat", "showLoadMore"],
  template: componentsHTML.row
});
Vue.component("stat", {
  props: ["value", "emoji"],
  template: componentsHTML.stat
});
Vue.component("project", {
  data: function() {
    return {
      statNames: this.$root.$data.statNames,
      statEmojis: this.$root.$data.statEmojis
    }
  },
  methods: {
    n: x => {
      return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    openProject : id => window.open(`https://scratch.mit.edu/projects/${id}`),
  },
  props: ["project", "sortedBy", "showStats"],
  template: componentsHTML.project
});
