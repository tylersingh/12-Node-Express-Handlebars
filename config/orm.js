const connection = require("./connection.js");

function printQuestionMarks(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

const orm = {
  selectAll: function(table, callback){
    var queryString = 'SELECT * FROM ' + table;

    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  insertOne: function(table, column, burgerInput, callback){
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

    connection.query(queryString, [burgerInput], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  updateOne: function(table, col, colVal, condition, conditionVal, callback){
    var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

    connection.query(queryString, [colVal, conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  deleteOne: function(table, condition, conditionVal, callback){
    var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

    connection.query(queryString, [conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
    });
  }
};

module.exports = orm;
