let comments = []; // in-memory storage (resets on restart)

export default function handler(req, res) {
  if (req.method === 'GET') 
  {
    res.status(200).json(comments);
  } 
  else if (req.method === 'POST') 
  {
    const { name, text } = req.body;
    const newComment = { name, text, timestamp: Date.now() };
    comments.unshift(newComment);
    res.status(201).json(newComment);
  } 
  else 
  {
    res.status(405).end(); // Method Not Allowed
  }
}