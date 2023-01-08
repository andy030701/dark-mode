const checkbox=document.querySelector('#check')

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
})