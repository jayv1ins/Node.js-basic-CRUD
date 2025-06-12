const mysql = require('mysql');
exports.getLogin = (req, res) => {
    res.render('login');
};
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'login-db'
});

//login
exports.postLogin = (req, res) => {
  const { username, password } = req.body;
      if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {

          console.log(results);
          // If there is an issue with the query, output the error
          // If the account exists
          if (results.length > 0) {
            res.render('home');
          } else {
            res.send('Incorrect Username and/or Password!');
          }  
          res.end();
        });
      }else {
        res.send('Please enter Username and Password!');
        res.end();
      }
   
};

//register
app.post('/register', [
  check('username').isLength({ min: 1 }).withMessage('username is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('confirmEmail').custom((value, { req }) => {
  if (value !== req.body.email) {
  throw new Error('Email addresses do not match');
  }
  return true;
  }),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('confirmPassword').custom((value, { req }) => {
  if (value !== req.body.password) {
  throw new Error('Passwords do not match');
  }
  return true;
  })
  ], (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.render('register', { errors: errors.array() });
  }
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
  if (err) {
  console.log(err);
  } else {
  res.redirect('/login');
  }
  });
  });

  
  //home
  app.get('/home', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
  if (err) {
  console.log(err);
  } else {
  res.render('home', { users: result });
  }
  });
  });