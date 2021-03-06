const sql = require("./db.js");

// constructor
const Performance = function(performance) { 
  this.user_id = performance.user_id;
  this.references = performance.references;
  this.day = performance.day;
  this.pushup = performance.pushup;
  this.pullup = performance.pullup;
  this.squat = performance.squat;
};

Performance.create = (newPerformance, result) => {
  sql.query("INSERT INTO performance SET ?", newPerformance, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Performance: ", { id: res.insertId, ...newPerformance });
    result(null, { id: res.insertId, ...newPerformance });
  });
};

Performance.findById = (performanceId, result) => {
  sql.query(`SELECT * FROM performance WHERE id = ${ performanceId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found performance: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Performance with the id
    result({ kind: "not_found" }, null);
  });
};

Performance.getAll = result => {
  sql.query("SELECT * FROM performance", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("performances: ", res);
    result(null, res);
  });
};

Performance.updateById = (id, performance, result) => {
  sql.query(
    "UPDATE performance SET references = ?, day = ?, pushup = ?, pullup = ?,  squat = ? WHERE id = ?",
    [performance.references, performance.day, performance.pushup, performance.pullup, performance.squat,  id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Performance with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated performance: ", { id: id, ...performance });
      result(null, { id: id, ...performance });
    }
  );
};

Performance.remove = (id, result) => {
  sql.query("DELETE FROM performance WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Performance with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted performance with id: ", id);
    result(null, res);
  });
};

Performance.removeAll = result => {
  sql.query("DELETE FROM performance", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} performances`);
    result(null, res);
  });
};

module.exports = Performance;