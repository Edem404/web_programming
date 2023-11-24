const db = require('./db');

const controller = {
    read: (req, res) => {
        const { searchQuery, selectedCategory, sortOrder } = req.query;
    
        let selectQuery = 'SELECT * FROM table1';
    
        if (searchQuery) {
            selectQuery += ` WHERE title LIKE '%${searchQuery}%'`;
        }
    
        if (selectedCategory && selectedCategory !== 'All') {
            if (searchQuery) {
                selectQuery += ` AND category = '${selectedCategory}'`;
            } else {
                selectQuery += ` WHERE category = '${selectedCategory}'`;
            }
        }
    
        if (sortOrder) {
            if (sortOrder.toLowerCase() === 'cheap') {
                selectQuery += ' ORDER BY price ASC';
            } else if (sortOrder.toLowerCase() === 'expensive') {
                selectQuery += ' ORDER BY price DESC';
            }
        }
    
        db.query(selectQuery, (err, results) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
            } else {
                const data = results;
                const dataArray = data.map(row => ({
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    category: row.category,
                    price: `${row.price}$`,
                }));
    
                res.setHeader('Content-Type', 'application/json');
                res.json({ data: dataArray });
            }
        });
    },

    getProductById: (req, res) => {
        const productId = req.params.productId;

        // Використовуй db для взаємодії з базою даних та отримання конкретного продукту за його ідентифікатором
        db.execute('SELECT * FROM table1 WHERE id = ?', [productId], (error, results) => {
            if (error) {
                console.error(error.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                if (results.length === 0) {
                    res.status(404).json({ error: 'Product not found' });
                } else {
                    res.status(200).json(results[0]);
                }
            }
        });
    },
};

module.exports = controller;