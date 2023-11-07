function catalog() {
    let platform = document.getElementById("platform").value;
    let gender = document.getElementById("gender").value;
    let category = document.getElementById("category").value;
    let game = document.getElementById("game").value;

    if (platform.trim() !== "" && gender.trim() !== "" && category.trim() !== "" && game.trim() !== "") {
        alert('Jogo catalogado');
        setTimeout(function() {
            location.reload();
        }, 2000);
    } else {
        alert('Preencha todos os campos');
    }
}

var stars = document.querySelectorAll('.star-icon');

stars.forEach(function(star) {
  star.addEventListener('click', function(e) {
    var classStar = e.target.classList;
    if (!classStar.contains('ativo')) {
      stars.forEach(function(star) {
        star.classList.remove('ativo');
      });
      classStar.add('ativo');
      console.log(e.target.getAttribute('data-avaliacao'));
    }
  });
});

function goBack() {
  window.history.back();
}