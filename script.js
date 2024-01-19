function startGame() {
    var startGameBtn = document.getElementById("startGameBtn");
    var howToPlayBtn = document.getElementById("howToPlayBtn");
    var startPage = document.getElementById("start-page");
    var quizContainer = document.getElementById("quiz-container");
    var startGameModal = document.getElementById("startGameModal");

    quizContainer.style.display = "block";

    startGameModal.style.display = "block";
}

function devam() {
    var startGameModal = document.getElementById("startGameModal");

    closeModal('startGameModal');

   
    openModal('yeniModal'); 
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
    

