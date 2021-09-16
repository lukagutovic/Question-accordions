const questions = document.querySelectorAll('.question');

questions.forEach(function (targetQuestion) {
    const btn = targetQuestion.querySelector('.question-btn');

    btn.addEventListener("click", function(){

        questions.forEach(function(item){
            if(item !== targetQuestion){
                item.classList.remove('show-text');
            }
        })


        targetQuestion.classList.toggle('show-text');
    })
})