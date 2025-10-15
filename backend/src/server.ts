import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 6 деревьев с полной информацией
let trees = [
  {
    id: '1',
    species: 'Дуб',
    description: 'Красивое старое дерево в парке',
    latitude: 55.7558,
    longitude: 37.6173,
    height: 15,
    diameter: 1.2,
    age: 50,
    health: 'healthy'
  },
  {
    id: '2',
    species: 'Береза', 
    description: 'Молодая береза у озера',
    latitude: 55.7517,
    longitude: 37.6178,
    height: 8,
    diameter: 0.4,
    age: 15,
    health: 'healthy'
  },
  {
    id: '3',
    species: 'Ель',
    description: 'Новогодняя ель на главной площади',
    latitude: 55.7590,
    longitude: 37.6190,
    height: 12,
    diameter: 0.8,
    age: 25,
    health: 'good'
  },
  {
    id: '4', 
    species: 'Клён',
    description: 'Осенний клён с ярко-красными листьями',
    latitude: 55.7539,
    longitude: 37.6208,
    height: 12,
    diameter: 0.8,
    age: 25,
    health: 'healthy'
  },
  {
    id: '5',
    species: 'Ясень',
    description: 'Величественный ясень с раскидистой кроной',
    latitude: 55.7545,
    longitude: 37.6185,
    height: 18,
    diameter: 1.2,
    age: 40,
    health: 'excellent'
  },
  {
    id: '6',
    species: 'Липа',
    description: 'Ароматная липа с медоносными цветами в ботаническом саду',
    latitude: 55.7525,
    longitude: 37.6215,
    height: 14,
    diameter: 0.9,
    age: 30,
    health: 'healthy'
  }
];

app.get('/trees', (req, res) => {
  res.json(trees);
});

app.listen(PORT, () => {
  console.log('Сервер запущен на http://localhost:3000');
  console.log('Деревьев: ' + trees.length);
});
