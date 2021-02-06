'use strict'
const $ = (selector)=>{
	NodeList.prototype.map = function () {
		const r = [];
		this.forEach((e, i) => r.push(this[i]))
		return r
	}
const getElem = ()=> {
    if(typeof  selector === 'string'){
       let $el = document.querySelectorAll(selector)
       return $el.length === 1 ? $el[0] : $el.map().map(e=>$(e))
    }
    else{
        return selector
    }
}
	const parseStyles = (stylesObject)=>{
		return Object.keys(stylesObject).map(style=>{
			return `${style}:${stylesObject[style]}`
		}).join(';')
	}
    const $el = getElem()


    return {

        on(event,fn){
            $el.addEventListener(event,fn.bind(this))
    },
        style(s,v=''){
            if(v){
                $el.style[s] = v;
            }
            else {
                return $el.style[s]
            }
        },

        confirmStyles(obj){
        	const parsed = parseStyles(obj)
        	$el.style = parsed

        },

        forEach(fn){

            $el.forEach(fn)
        },
        val(v='') {
            if (v) {
                $el.value = v
            }
            return $el.value
        },
        html(html){
            if(html) {
                $el.innerHTML = html
            }
            return $el.outerHTML
        },
        append(el){
        $el.appendChild(el.$el)
        return this
        },
        show(){
        	this.style('display', 'block')
        },
        hide(){
        	this.style('display', 'none')
        },

       $el

    }

}


$.create = (tagName,entries='',properties={})=>{
	const el = document.createElement(tagName)
	el.innerHTML = entries
	Object.keys(properties).forEach(attr=>{
		el.setAttribute(attr, properties[attr])
	})
	return $(el)

}

// $.createElements = ()=>{

// }





$('.moving').confirmStyles({
	background:'red',
	width:'300px',
	height:'300px',
	display: 'inline-block',

})

const control1 = $.create('button','left',{class:'work', id:'control1'})

const control2 = $.create('button','right',{class:'work', id:'control2' })

$('.controls').append(control1)
$('.controls').append(control2)



//
// //Задание 1 Удаление рекламы из строчки
// //Пример
//
// let advert = ['BMW','Sobolev']
// let str = 'Николай из канала Sobolev приобрёл себе новый BMW'
//
// for(let i=0; i<advert.length; i++){
// 	str = str.replace(advert[i], 'реклама')
// }
// console.log(str);// Выводит Николай из канала реклама приобрёл себе новый реклама
//
//
// // Удали рекламу из строки "Парень, одетый в модную куртку от бренда Gucci проследовал в магазин Bershka, но увидев Burger King остановился в нём"
//
//
// //Задание 2 "Перекрась backgroundColor body в зеленый цвет"
//
// // Пример
//
// let body  = document.querySelector('body')
// body.style.backgroundColor = 'pink'




// fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
//   .then(response => response.json())
//   .then(json => console.log(json))

// let buffer =  new ArrayBuffer(16)
// const view = new Uint16Array(buffer)
// view[0]=5000

// console.log(view)


let uint8Array = new Uint8Array([72, 101, 108, 108, 97]);

alert( new TextDecoder().decode(uint8Array) ); 