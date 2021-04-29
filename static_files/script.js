var app = new Vue({
    el: '#app',
    data: {
      completed: false,
      showModal: false,
      checklist: 
      [
        ['Believe in yourself','Believe in your ability to do things and your ability to learn. Nothing is impossible if things are given enough time.'],
        ['Be original', 'Every test I take and every paper I write, the ideas should be by my own first, then research things to expand my idea and give proper credits.'],
        ['Know your position', 'Even as a student, I consider being in school as a professional experience. I give respect to all people that forms the academe like our professors, of course, I respect everyone in school.'],
        ['If chosen as a leader, know your responsibilities, same goes if not', 'I am always being picked as a leader since elementary and everytime, I learn something new, even as a member. The most important lesson I have learned is that, never let someone get left behind.'],
        ['If asked for help, help if you know what to do, kindly refuse otherwise', 'If I can help, why not? It is free and it is not like I will lose something. But if I truly do not know how to help, I refuse because I probably will do more damage than give real help.'],
        ['Do not be stubborn and accept your mistakes', 'I firmly believe that mistakes teach lessons. Especially mistakes because of believing that I knew better. I know now when to put my pride down.'],
        ['Try to learn something new every day', 'I believe that the most valuable key to have an academic integrity is being well-learned. In my experience, most of the time, academic dishonesties are rooted from inexperience and ignorance.'],
        ['Don\'t be afraid to seek for help', 'There are people out there that are more than willing to help you. Never miss the chance to build fruitful professional and personal relationships.'],
        ['There are a lot of things that you don\'t know', 'I am not a genius but I am neither stupid. I always think that I have always a room from improvement. Also, do not pretend to know things that you have no idea about.'],
        ['Know better if you\'re gonna tell on someone', 'Snitching mostly does not make you a hero or a do-gooder. Many things are at stake such as trust. Sometimes, the risk is not that worth it. Do not get the wrong idea, all I am sayng is that, carefully assess the situation.']

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