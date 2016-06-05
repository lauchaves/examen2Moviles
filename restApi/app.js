/*

General server configuration



/*********************************************************************************************/

bodyParser = require('body-parser');
var transactionController = require('./controllers/transactionCtrl.js'),
       usersController = require('./controllers/userCtrl.js');


var express       = require('express'),
      app              = express(),
      server          = require('http').createServer(app),
      port              = 4040;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  next();
});

/*********************************************************************************************/


/*
Returns all transactions
  Input: none
  Output: 
        { success     success: true, failure: false
          data        Array transaction's info
          statusCode: success: 200, failure: 400
        }
*/
app.get('/api/examen/transaction/all', transactionController.getTransaction);


/*
Returns a single transaction
  Input:  event's id
  Output: 
        { success       success: true, failure: false
          data:         success transaction information searched, failure: null
          statusCode:   success: 200, failure: 400
        }
*/
app.get('/api/examen/transaction/:id', transactionController.getTransactionById);

/*
Add transaction
  Input: 
        {
           transaction 
           name    
           description 
        }
  Output: 
        {  success: success: true, failure: false
           data:    success: id's transaction inserted, failure: null
           message: success: 200, failure: 400
        }
*/
app.post('/api/examen/transaction/new', transactionController.newTransaction);

/*
Edit transaction
  Input: 
        {
           idEvento,    Find transaction
           tipoEvento, 
           nombre,     
           descripcion 
        }
  Output: 
        {  success:  success: true, failure: false
           data:     success: null, failure: null
           message:  success: 200, failure: 400
        }
  */
app.put('/api/examen/transaction/edit', transactionController.editTransaction);

/*
Delete transaction
  Input: 
        {
           idEvento    Find transaction
        }
  Output: 
        {  success:  success: true, failure: false
           data:     success: null, failure: null
           message:  success: 200, failure: 400
        }
  */
app.delete('/api/examen/transaction/delete/:idTransaction', transactionController.deleteTransaction);


/*

Disable
  Input: 
        userId,    find User
        disable,   0 false, 1 true
  Output: 
        {  success:  success: true, failure: false
           data:     success: null, failure: null
           message:  success: 200, failure: 400
        }
*/
app.put('/api/examen/transaction/disable', transactionController.disableTransaction);


/*
Add User
  Input: 
        userId,    find User
        admin,     0 false, 1 true
  Output: 
        {  success:  success: true, failure: false
           data:     success: null, failure: null
           message:  success: 200, failure: 400
        }
*/
app.post('/api/examen/users/new', usersController.newUser);

/*
Return all Users
  Input: none
  Output: 
        { success     success: true, failure: false
          data        Array user's info
          statusCode: success: 200, failure: 400
        }
  */
app.get('/api/examen/users/all', usersController.getUsers);



/*
 Return single user
    Input: 
        {
            userId, Find user
        }
    Output:
        { success     success: true, failure: false
          data        Array user info
          statusCode: success: 200, failure: 400
        }
 */
app.get('/api/examen/users/:user', usersController.getUserById);

 
/* Run Server */
server.listen(port, function(){
  console.log('Server listening on port: ' + port);
});