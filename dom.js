let li = createElement('li','list group-item','four')
li.setAttribute('title','i am fourth item')
let list = document.getElementById('list')
list.appendChild(li)



let p1 = createElement('p','lead','hello this is polash ahmed')
let p2 = createElement('p','lead','hello this is polash ahmed')

let div = createElement('div')
append(div,[p1,p2])

list.insertAdjacentElement('afterend',div)



// let container = document.getElementById('cont');
// container.appendChild(div)

function createElement(tagName, className,innerHTML){
  let tag = document.createElement(tagName)
  tag.innerHTML = innerHTML || ''
  tag.className = className || ''
  return tag
  }

function append(parent,children){
children.forEach(child => parent.appendChild(child))
}
