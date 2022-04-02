const express=require('express')
/* const path=require('path') */
const exphbs=require('express-handlebars')
const homeRoutes=require('./routes/home')
const addRoutes=require('./routes/add')
const coursesRoutes=require('./routes/courses')

const app=express()//результат работы функции express

const hbs=exphbs.create({
  defaultLayout:'main',//основной layout
  extname:'hbs'  //устанавливаем сокращенное название
})//создание нового объекта где он будет конфигурировать handelbars(для чего буду использовать)

app.engine('hbs',hbs.engine)//регистрация модуля как движок рендеринга html страниц(2 параметр это его значение)
app.set('view engine',"hbs")//используем движок
app.set('views','views')//2 переменная покзывает где хранятся все наши шаблоны

app.use(express.static('public'))//регистрируем папку как публичную
app.use(express.urlencoded({extended:true}))
app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/courses',coursesRoutes)



//app - аналог объекта сервер





const PORT=7000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})