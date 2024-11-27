import { useState } from 'react';
import Header from '../../components/Header/index';
import Prediction from '../../components/Prediction';
import * as m from './style';
import ProfileContainer from '../../components/ProfileContainer';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyPage: React.FC = () => {
  const [graphData, setGraphData] = useState<any>(null); // 그래프 데이터 상태 관리

  // Prediction 컴포넌트에서 데이터를 받아오는 핸들러
  const handlePredictionData = (data: any) => {
    const graphData = {
      labels: data.map((item: any) => item.timestamp.split('T')[0]), // X축 날짜
      datasets: [
        {
          label: '점수',
          data: data.map((item: any) => item.score), // Y축 점수
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          pointRadius: 5,
        },
        {
          label: '컷오프 점수',
          data: data.map((item: any) => item.predictedCutoff), // Y축 컷오프 점수
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.4,
          pointRadius: 5,
        },
      ],
    };

    setGraphData(graphData); // 그래프 데이터 업데이트
  };

  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <div style={{ marginBottom: '10px' }}>
          <ProfileContainer showEmail={true} />
        </div>
        히스토리 조회
        <m.HistoryContainer>
          {/* Prediction 컴포넌트에 데이터 핸들러 전달 */}
          <m.PredictionContainer>
            <Prediction onDataFetched={handlePredictionData} />
          </m.PredictionContainer>

          {/* 그래프 렌더링 */}
          <m.Graph>
            {graphData ? (
              <Line
                data={graphData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: '예측 타임라인',
                    },
                  },
                  scales: {
                    x: {
                      grid: { color: 'rgba(200, 200, 200, 0.2)' },
                      ticks: { color: '#555', font: { size: 14 } },
                    },
                    y: {
                      grid: { color: 'rgba(200, 200, 200, 0.2)' },
                      ticks: {
                        stepSize: 10,
                        color: '#555',
                        font: { size: 14 },
                      },
                      suggestedMax: 100,
                    },
                  },
                }}
              />
            ) : (
              <p>데이터를 불러오는 중...</p>
            )}
          </m.Graph>
        </m.HistoryContainer>
      </m.InnerContainer>
    </m.Container>
  );
};

export default MyPage;
