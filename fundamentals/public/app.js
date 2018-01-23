Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('');
});

var app = new Vue({
  el: "#h1",
  data: {
    subject: "Hey Meetup!",
    tooltip: 'This is a tooltip!',
  },
});

var app2 = new Vue({
  el: "#speakers",
  data: {
    speakers: [{
        name: 'majid',
        isAwesome: false,
        desc: '<strong>some text</strong>'
      },
      {
        name: 'lars',
        isAwesome: true,
        desc: '<strong>some text</strong>'
      }
    ]
  },
});

var app3 = new Vue({
  el: "#computed",
  data: {
    firstName: 'Majid',
    lastName: 'Hajian',
  },
  computed: {
    fullName: function () {
      // get:function(){};
      // set: function(){};
      return this.firstName + ' ' + this.lastName;
    }
  },
});

var app4 = new Vue({
  el: "#methods",
  data: {
    firstName: 'Majid',
    isStyleChanged: false,
    textStyle: {
      backgroundColor: 'red',
      color: 'black',
    }
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    toggleStyle: function ($event) {
      this.isStyleChanged = !this.isStyleChanged;
    }
  },
});

Vue.component('meetup-component', {
  template: '<h1>{{message}}</h1>',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  created() {
    console.log('created');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destory');
  }
});
var app5 = new Vue({
  el: '#gcomponent',
  data: {
    message: 'my meetup component',
  }
});
