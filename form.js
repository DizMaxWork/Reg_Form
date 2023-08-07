const formBtn = document.querySelector('#btn')
const formName = document.querySelector('#name')
const formNickName = document.querySelector('#nickName')
const formPassword = document.querySelector('#password')
const formTel = document.querySelector('#tel')
const form = document.querySelector('#form')
const cabName = document.querySelector('#cabName')



class User{
    constructor(name,nickName,password,tel){
        this.name = name
        this.nickName = nickName
        this.password = password
        this.tel = tel
    }   
}

formBtn.addEventListener('click', () => {
    let user = new User(formName.value, formNickName.value, formPassword.value, formTel.value)
    if(user.password.length > 5 && user.name.length > 0 && user.nickName.length > 0 && user.tel.length > 0){
        console.log('Все поля заполнены')
        form.action = 'cabinet.html'
    } else if(user.password.length < 5){
        formPassword.style.background = 'red'
        alert('Поле пароль не заполнено')
    } else if(user.name.length === 0 ){
        formName.style.background = 'red'
        alert('Поле Имя не заполнено')
    } else if(user.nickName.length === 0 ){
        formNickName.style.background = 'red'
        alert('Поле Имя пользователя не заполнено')
    } else if(user.tel.length === 0){
        formTel.style.background = 'red' 
        alert('Поле телефон не заполнено')
    }
    console.log(user)
}) 

console.log('ghbddtn')