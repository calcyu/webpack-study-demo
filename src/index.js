import dayjs from 'dayjs'
import './style.css'
import imgPic from './timg.gif'


function component(){
    var div = document.createElement('div');
    const time = dayjs().startOf('month').add(1,'day').set('year',2000).format('YYYY-MM-DD HH:mm:ss')
    div.innerHTML = `<span>hello webpack ${time}</span>`;
    div.classList.add('msg');
    const img = new Image();
    img.src = imgPic;
    div.appendChild(img);
    div.onclick = e => import(/* webpackChunkName: "print" */'./print').then(module=>{
        print = module.default;
        print('i love u');
    })
    return div;
}

document.body.appendChild(component());
