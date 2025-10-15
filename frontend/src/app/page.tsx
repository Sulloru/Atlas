'use client';

import { useState, useEffect } from 'react';
import TreeMap from '@/components/TreeMap';

interface Tree {
  id: string;
  species: string;
  description: string;
  latitude: number;
  longitude: number;
  height?: number;
  diameter?: number;
  age?: number;
  health: string;
}

export default function Home() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrees();
  }, []);

  const fetchTrees = async () => {
    try {
      const response = await fetch('http://localhost:3000/trees');
      const data = await response.json();
      setTrees(data);
      console.log('🌳 Загружено деревьев:', data.length);
    } catch (error) {
      console.error('Ошибка загрузки деревьев:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка карты деревьев...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">🌳 Цифровой Атлас Городских Деревьев</h1>
          <p className="text-green-100 mt-2">
            Интерактивная карта деревьев вашего города • Всего деревьев: {trees.length}
          </p>
          <button 
            onClick={fetchTrees}
            className="mt-4 bg-green-700 hover:bg-green-800 px-4 py-2 rounded"
          >
            🔄 Обновить данные
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Карта деревьев</h2>
          <TreeMap trees={trees} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Список деревьев ({trees.length})</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trees.map((tree) => (
              <div key={tree.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{tree.species}</h3>
                <p className="text-gray-600 text-sm">{tree.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>Координаты: {tree.latitude.toFixed(4)}, {tree.longitude.toFixed(4)}</p>
                  <p>Высота: {tree.height || 'не указана'}м • Возраст: {tree.age || 'не указан'} лет</p>
                  <p>Диаметр: {tree.diameter || 'не указан'}м</p>
                  <p>Состояние: <span className={
                    tree.health === 'healthy' ? 'text-green-600' : 
                    tree.health === 'good' ? 'text-yellow-600' : 'text-red-600'
                  }>{tree.health || 'не указано'}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
