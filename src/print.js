import('./sass/other.sass');

console.log('print模块被加载');

export default function(msg){
    console.log(`${msg} * 100`);
}