'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Фиксим иконки для Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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

interface TreeMapProps {
  trees: Tree[];
}

export default function TreeMap({ trees }: TreeMapProps) {
  const center: [number, number] = [55.7558, 37.6173]; // Москва

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer 
        center={center} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {trees.map((tree) => (
          <Marker 
            key={tree.id} 
            position={[tree.latitude, tree.longitude]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{tree.species}</h3>
                <p className="text-sm text-gray-600">{tree.description}</p>
                <div className="mt-2 text-xs">
                  <p>Высота: {tree.height}м</p>
                  <p>Возраст: {tree.age} лет</p>
                  <p>Состояние: {tree.health}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
