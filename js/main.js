(()=>{

    // component 
    const liveuser = {
      props: ['first_name', 'last_name', 'role'],
      template: '#activeuser',
  
      created: function() {
        console.log('Hello I am the child!');
      },
  
      methods: {
  
        logChildMsg() {
          console.log('I am the child in a method.');
        },
  
        runParentFunc() {
          this.$emit('passfancallup', 'Ciao Ciao ');
        }
  
      }
  
    };
  
    const vm = new Vue({
  
      el: '#app',
  
      data: {
        message: "Hello from Vue",
        first_name: "Jeril",
        last_name: "Kadavan",
        role: "student",
      },
  
      created: function() {
        console.log("Hello I am the parent!");
      },
  
      methods: {
        logParent(message) {
          console.log("from the parent:", message);
        },
  
        logMainMessage(message) {
          console.log('Called from child to parent with $emit, but LVES n Parent.', message);
        }
  
      },
  
      components: {
        user: liveuser
      }
  
  
    });
  
  })();