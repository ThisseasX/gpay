const ws = require('socket.io');
const http = require('http');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const paymentsRef = admin.firestore().collection('payments');
const debtRef = admin.firestore().collection('debt');

const io = ws(http.createServer());

io.on('connect', socket => {
  socket.on('FETCH_PAYMENTS', async () => {
    try {
      const query = await paymentsRef.get();

      const payments = query.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      socket.emit('PAYMENTS_FETCHED', payments);
    } catch (err) {
      console.error(err);
    }
  });

  socket.on('FETCH_DEBT', async () => {
    try {
      const query = await debtRef.get();
      const debtDoc = query.docs[0];

      const debt = {
        id: debtDoc.id,
        ...debtDoc.data(),
      };

      console.log(debt);

      socket.emit('DEBT_FETCHED', debt);
    } catch (err) {
      console.error(err);
    }
  });
});

io.listen(4000);
