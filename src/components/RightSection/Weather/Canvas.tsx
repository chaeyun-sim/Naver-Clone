import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface Props {
  data: number[];
}

const TemperatureGraph = ({ data }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const temperatureChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['시간1', '시간2', '시간3', '시간4', '시간5'], // x축 레이블
            datasets: [
              {
                data,
                fill: false,
                borderColor: '#d3d5d7',
                backgroundColor: '#d3d5d7',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0,
                borderCapStyle: 'round',
                borderJoinStyle: 'round',
                stepped: true,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // 범례 숨김
              },
              tooltip: {
                enabled: false, // 툴팁 비활성화
              },
            },
            scales: {
              y: {
                beginAtZero: false,
                display: false, // y축 라벨 숨김
              },
              x: {
                display: false, // x축 라벨 숨김
              },
            },
            elements: {
              line: {
                tension: 0.4, // 선의 부드러움을 조절합니다.
              },
              point: {
                radius: 0, // 라인 닷 숨김
              },
            },
          },
        });

        return () => {
          temperatureChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div style={{ position: 'absolute', top: '2.8rem', right: 0, left: 0, height: '3.7rem' }}>
      <canvas
        ref={canvasRef}
        width={'180'}
        height={'37'}
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      />
    </div>
  );
};

export default TemperatureGraph;
