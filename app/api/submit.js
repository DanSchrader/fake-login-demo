import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput, passwordInput } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        userInput,
        passwordInput,
      });

      res.status(200).json({ message: 'Data saved successfully', id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};