import { useMemo, useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { nodes } from '../data/nodes';
import type { GlobeNode } from '../data/nodes';

const GLOBE_BG = '#0d1117';
const NODE_COLOR = '#3fb950';
const NODE_ALTITUDE = 0.015;
const NODE_RADIUS = 1.15;
const EARTH_TEXTURE_URL = 'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg';
const COUNTRIES_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

interface GeoJsonFeature {
  type: string;
  geometry: { type: string; coordinates: number[] | number[][][] | number[][][][] };
  properties?: Record<string, unknown>;
}

interface CountriesGeoJson {
  type: string;
  features: GeoJsonFeature[];
}

// Library expects coordinates: number[]; GeoJSON uses nested arrays - cast at runtime
type GlobeGeoJsonGeometry = { type: string; coordinates: number[] };

interface GlobeViewProps {
  onPointClick: (node: GlobeNode) => void;
}

export function GlobeView({ onPointClick }: GlobeViewProps) {
  const pointsData = useMemo(() => nodes, []);
  const [countries, setCountries] = useState<GeoJsonFeature[]>([]);

  useEffect(() => {
    fetch(COUNTRIES_GEOJSON_URL)
      .then((res) => res.json())
      .then((data: CountriesGeoJson) => setCountries(data.features ?? []))
      .catch(() => setCountries([]));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe
        width={typeof window !== 'undefined' ? window.innerWidth : 800}
        height={typeof window !== 'undefined' ? window.innerHeight : 600}
        backgroundColor={GLOBE_BG}
        globeImageUrl={EARTH_TEXTURE_URL}
        showGlobe={true}
        showAtmosphere={false}
        showGraticules={false}
        atmosphereColor="#0d1117"
        polygonsData={countries}
        polygonGeoJsonGeometry={(d) => (d as GeoJsonFeature).geometry as unknown as GlobeGeoJsonGeometry}
        polygonCapColor="rgba(0,0,0,0)"
        polygonSideColor="rgba(0,0,0,0)"
        polygonStrokeColor="rgba(255,255,255,0.25)"
        polygonAltitude={0}
        pointsData={pointsData}
        pointLat="lat"
        pointLng="lng"
        pointLabel={(d) => (d as GlobeNode).label}
        pointRadius={NODE_RADIUS}
        pointColor={() => NODE_COLOR}
        pointAltitude={NODE_ALTITUDE}
        pointsMerge={false}
        onPointClick={(point) => onPointClick(point as GlobeNode)}
      />
    </div>
  );
}
