```javascript
const query = { name: { $regex: 'John', $options: 'i' } };
const options = { projection: { _id: 0, name: 1 } };

db.collection('users').find(query, options).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```