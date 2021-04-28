var app = new Vue({
    el: '#app',
    data: {
      completed: false,
      showModal: false,
      checklist: 
      [
        ['Believe in yourself','Believe in your ability to do things and your ability to learn. Nothing is impossible if things are given enough time.'],
        ['Be original', '']
      ],
      cardContent: '',
      cardTitle: '',
      totalChecks: 0,
      checkProgress: {
        width: 0 + '%'
      },
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      checkBox5: false,
      checkBox6: false,
      checkBox7: false,
      checkBox8: false,
      checkBox9: false,
      checkBox10: false,

    },
    methods: {
      showMessage: function(listIndex){
        this.showModal = true;
        this.cardContent = this.checklist[listIndex][1];
        this.cardTitle = this.checklist[listIndex][0]
      },
      addProgress: function(){
        this.totalChecks++
        this.checkProgress ={
          width: ((this.totalChecks/10) * 100) + '%' 
        }
      },
      showSource: function(){
        alert('Image from: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/600px-Sign-check-icon.png')
      }
    },
    watch: {
      checkBox1: function(value){
        if(this.checkBox1){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox2: function(value){
        if(this.checkBox2){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox3: function(value){
        if(this.checkBox3){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox4: function(value){
        if(this.checkBox4){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox5: function(value){
        if(this.checkBox5){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox6: function(value){
        if(this.checkBox6){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox7: function(value){
        if(this.checkBox7){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox8: function(value){
        if(this.checkBox8){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox9: function(value){
        if(this.checkBox9){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      checkBox10: function(value){
        if(this.checkBox10){
          this.totalChecks++
        }
        else{
          this.totalChecks--
        }
      },
      totalChecks: function(value){
        this.checkProgress = {
          width: ((this.totalChecks/10) * 100) + '%'
        }

        if(this.totalChecks == 10){
          this.completed = true
          alert('Congratulations! You have completed the checklist')
        }
        else{
          this.completed = false
        }
      }
    }
  })