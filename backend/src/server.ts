import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'UP', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Simple API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    message: 'Simple API is working!',
    version: '1.0.0'
  });
});

// Test database endpoint
app.get('/api/test-db', async (req, res) => {
  if (process.env.DB_SERVER) {
    res.json({
      status: 'Database configured',
      server: process.env.DB_SERVER,
      database: process.env.DB_DATABASE
    });
  } else {
    res.json({
      status: 'No database configured'
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public')));
  
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});