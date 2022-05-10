const BASE_URL = 'http://localhost:3000/tasks'
const qs = (selector) => {
  return document.querySelector(selector)
}
async function showList() {
    const listDiv = qs('#tasksList')
    const response = await fetch(BASE_URL)
    console.log(response)
    let output = `<h3>No Tasks Add some ...</h3>`
    if (response.ok){
        const list = await response.json()
        output = list.map((task) =>`
        <div class="grid">
        <span contenteditable="true" onkeyup="updateTask(event.key,${task.id},this.textContent)">${task.title}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
        </div>
        `).join('')
    }
    listDiv.innerHTML =output
}
const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`,{
      method:'delete'
  })
    await  showList()
}
const updateTask = async (key,id,content) => {
    if(key==='Enter'){
        await fetch(`${BASE_URL}/${id}`,{
            headers:{
                'Content-Type':'Application/json'
            },
            method:'put',
            body:JSON.stringify({title:content})
        })
        await showList()
    }
        console.log(key,id,content)
}
const addTask = async () => {
    const content = qs('#title')
        await fetch(BASE_URL,{
            headers:{
                'Content-Type':'Application/json'
            },
            method:'post',
            body:JSON.stringify({title:content.value})
        })
    content.value=""
        await showList()
}
 showList()