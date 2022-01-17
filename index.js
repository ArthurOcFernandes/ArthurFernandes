(() => {

    const project_tab_list = document.querySelector('[data-project-list]');
    const tech_tab_list = document.querySelector('[data-tech-list');

    const tabs = document.querySelectorAll('.tab');
    console.log(tabs.entries);
    const show_tabs = (event) => {
        const target = event.target;
        target.classList.add('checked');
        

        tabs.forEach(element =>{
            if(element != target){
                element.classList.remove('checked');
            }
        })

        console.log(target.classList.contains('projects'))

        if(target.classList.contains('projects')){
            project_tab_list.classList.add('project-list');
            project_tab_list.classList.remove('invisible')
            tech_tab_list.classList.remove('tech-list');
            tech_tab_list.classList.add('invisible');
        }else{
            tech_tab_list.classList.add('tech-list');
            tech_tab_list.classList.remove('invisible');
            project_tab_list.classList.remove('project-list');
            project_tab_list.classList.add('invisible');
        }
              
    }

    for(i = 0; i < 2; i++){
        tabs[i].addEventListener('click', show_tabs);
    }

})()