
///////////////////////////////////////////////
// Code to show project popup on button click
///////////////////////////////////////////////

projectPopup = document.getElementById('project-popup');
projectViewBtn = document.querySelectorAll('.view-btn');

for (i=0; i<projectViewBtn.length; i++) {
    projectViewBtn[i].addEventListener('click', function() {
        projectPopup.classList.remove('d-none');
    });
}

projectPopupCloseBtn = document.getElementById('close-btn');
projectPopupCloseBtn.addEventListener('click', function() {
    projectPopup.classList.add('d-none');
});