let typed = new Typed(".typing" , {
    strings : ["Web Developer" , "Programmer" , "Web Designer"],
    typeSpeed : 100,
    BackSpeed : 60,
    loop : true
})

// -----------------------------------------------------aside-----------------------------------

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length;

    for(let i=0 ; i < totalNavList ; i++) {
        const a = navList[i].querySelector('a');
        a.addEventListener('click' , () => {
            for(let j=0 ; j<totalNavList ; j++) {
                navList[j].querySelector('a').classList.remove('active');
            }
            a.classList.add('active');
        })
    }

// -----------------------------------------------Play pause Vid ----------------------------------------------

const play_vid = document.querySelectorAll('.img_portfolio');
const get_video_portfolio = document.querySelectorAll('.project-vid');
const get_close_vid = document.querySelector('.fa-xmark');

get_video_portfolio.forEach((vid) => {
    vid.classList.add('hidden');
})

play_vid.forEach((item) => {
    item.addEventListener('click' , () => {
        let id = item.getAttribute('id');
        get_video_portfolio.forEach(vid => {
            if(vid.id === id){
                vid.classList.remove('hidden');
            }
        })
        get_close_vid.classList.remove('hidden');
    })
})

get_close_vid.addEventListener('click' , () => {
    get_video_portfolio.forEach(vid => {
        if(vid.classList != "hidden"){
            vid.classList.add('hidden');
            vid.pause();
        }
    })
    get_close_vid.classList.add('hidden');
})