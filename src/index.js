const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./router');
const handlebars = require('express-handlebars');


//Cấu hình handlebars
app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Xử lý khi đường dẫn là file tĩnh thì sẽ lao vào public
app.use(express.static(path.join(__dirname, 'public')));

//Lấy dữ liệu từ POST => JSON
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

//Router init
router(app);

//Localhost 3000
app.listen(PORT, console.log(`Localhost: ${PORT}`));