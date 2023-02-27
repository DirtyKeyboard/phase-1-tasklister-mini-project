document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToList(document.getElementById('new-task-description').value)
    form.reset();
  })
});


function addToList(val)
{
  const listContainer = document.getElementById('tasks')
  const listItem = document.createElement('li')
  const del = document.createElement('button')
  del.textContent = '✖'
  listItem.textContent = val+"   ";
  del.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  listItem.appendChild(del)
  listContainer.appendChild(listItem);
}