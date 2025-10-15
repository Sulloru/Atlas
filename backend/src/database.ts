import { Tree } from './types';

// Начальные данные
export let trees: Tree[] = [
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
    description: 'Новогодняя ель',
    latitude: 55.7590,
    longitude: 37.6190,
    height: 12,
    diameter: 0.8,
    age: 25,
    health: 'good'
  }
];

// Функции для работы с данными
export const addTree = (tree: Omit<Tree, 'id'>): Tree => {
  const newTree: Tree = {
    ...tree,
    id: (trees.length + 1).toString()
  };
  trees.push(newTree);
  return newTree;
};

export const getAllTrees = (): Tree[] => trees;

export const getTreeById = (id: string): Tree | undefined => 
  trees.find(tree => tree.id === id);
