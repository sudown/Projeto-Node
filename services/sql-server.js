const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "", // update me
      password: "" // update me
    },
    type: "default"
  },
  server: "", // update me
  options: {
    database: "", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT AlunoID FROM Aluno where Nome = '';`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
        consulta = rowCount;
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}

module.exports = {
  queryDatabase,
}