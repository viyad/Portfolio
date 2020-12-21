const projects = document.querySelectorAll('.project');

toggleProjects(1);

projects.forEach(project => project.addEventListener('click', function(){
    toggleProjects(project.id);
}, false));

function toggleProjects(projectId)
{
    for (let x = 1; x <= projects.length; x++) {
        let p = document.querySelector('#project' + x);
        if (x == projectId) {
            p.classList.remove('none-display');
            p.classList.add('display');
        }
        else {
            p.classList.remove('display');
            p.classList.add('none-display');
        }
    }

    window.location.href = "#work";
}

