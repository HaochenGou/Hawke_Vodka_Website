import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sky, Text } from '@react-three/drei';
import './heroback.css';
import { createBillboardMaterial } from './createBillboardMaterial';
import { MeshBasicMaterial } from 'three';

const Texts=()=>{
  const [data] = useState(() => {
    const d = [];
    const rand = () => (Math.random() - 0.5) * 6;
    for (let i = 0; i < 100; i++) {
      const color = Math.round(Math.random() * 0xffffff);
      d.push({
        position: [rand(), rand(), rand()],
        text: 'baby',
        color
      });
    }
    return d;
  });
  const [billboardMaterial] = useState(() => createBillboardMaterial(new MeshBasicMaterial()))
  return (
    <group>
      {data.map((d, i) => (
        <Text key={i} fontSize={0.25} position={d.position} material={billboardMaterial} color={d.color}>
          {d.text}
        </Text>
      ))}
    </group>
  );
};

export default Texts;
