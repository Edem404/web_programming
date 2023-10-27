const db = require('./db');

exports.create = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  const insertQuery = 'INSERT INTO table1 (name, price) VALUES (?, ?)';
  db.query(insertQuery, [name, price], (err, result) => {
    if (err) {
      console.error('Помилка бази даних:', err);
      return res.status(500).json({ error: 'Database error' });
    }


    res.status(200).json({ message: 'Дані успішно додані до бази даних' });
  });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const newName = req.body.newName;
  const newPrice = req.body.newPrice;

  const updateQuery = 'UPDATE table1 SET name = ?, price = ? WHERE id = ?';
  db.query(updateQuery, [newName, newPrice, id], (err, result) => {
    if (err) {
      console.error('Помилка бази даних:', err);
      res.status(500).json({ error: 'Database error' });
    }

    const data = {
      id: id,
      name: newName,
      price: newPrice
    }
    res.status(200).json({ message: 'Дані успішно додані до бази даних',
                           data: data 
  });
  });
};

exports.read = (req, res) => {
  const selectQuery = 'SELECT * FROM table1';
  db.query(selectQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      const data = results;
      const dataArray = [];

      data.forEach((row) => {
        dataArray.push({
          id: row.id,
          name: row.name,
          price: row.price,
        });
      });
      res.setHeader('Content-Type', 'application/json');
      res.json({ data: dataArray });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const deleteQuery = 'DELETE FROM table1 WHERE id = ?';
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  });
};

exports.getMaxId = (req, res) => {
  const maxIdQuery = 'SELECT MAX(id) as maxId FROM table1';
  db.query(maxIdQuery, (err, result) => {
      if (err) {
          res.status(500).json({ error: 'Database error' });
      } else {
          const maxId = result[0].maxId;
          res.json({ maxId });
      }
  });
};