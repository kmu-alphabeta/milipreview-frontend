import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
import Header from '../../components/Header/index';
import * as m from './style';
import ProfileContainer from '../../components/ProfileContainer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const PredictionResultPage: React.FC = () => {
  const { id } = useParams(); // URL에서 ID 가져오기
  const [prediction, setPrediction] = useState<any>(null); // 특정 예측 데이터
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPredictionById = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }

        // 히스토리 전체 데이터 가져오기
        const response = await axios.get(`${API_BASE_URL}/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // 전체 데이터 중에서 특정 ID와 일치하는 데이터 필터링
        const data = response.data;
        const foundPrediction = data.find((item: any) => item.id === id);

        if (!foundPrediction) {
          throw new Error('해당 ID의 데이터를 찾을 수 없습니다.');
          console.log();
        }

        setPrediction(foundPrediction); // 예측 데이터 설정
        setError(null);
      } catch (err: any) {
        console.error('예측 데이터 가져오기 실패:', err);
        setError('예측 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPredictionById();
  }, [id]);

  if (loading) {
    return <m.Container>로딩 중...</m.Container>;
  }

  if (error) {
    return <m.Container>{error}</m.Container>;
  }

  if (!prediction) {
    return <m.Container>예측 결과가 없습니다.</m.Container>;
  }

  const graphData = {
    labels: ['점수', '컷오프 점수', '합격 확률'],
    datasets: [
      {
        label: '예측 결과',
        data: [prediction.score, prediction.predictedCutoff, prediction.probability],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.5,
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#333',
          font: { size: 14 },
        },
      },
      title: {
        display: true,
        text: '예측 결과 그래프',
        color: '#333',
        font: { size: 18, weight: 'bold' as 'bold' },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(200, 200, 200, 0.2)' },
        ticks: { color: '#555', font: { size: 14 } },
      },
      y: {
        grid: { color: 'rgba(200, 200, 200, 0.2)' },
        ticks: { beginAtZero: true, color: '#555', font: { size: 14 }, stepSize: 10 },
        suggestedMax: 100,
      },
    },
  };

  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <div style={{ marginBottom: '10px' }}>
          <ProfileContainer showEmail={true} />
        </div>
        <m.HistoryContainer>
          <m.PredictionContainer>
            <m.PredictionCard>
              <m.PredictionLabel>카테고리</m.PredictionLabel>
              <m.PredictionValue>{prediction.category}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>점수</m.PredictionLabel>
              <m.PredictionValue>{prediction.score}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>컷오프 점수</m.PredictionLabel>
              <m.PredictionValue>{prediction.predictedCutoff}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>합격 확률</m.PredictionLabel>
              <m.PredictionValue>{prediction.probability}%</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard
              className="result-card"
              isPassed={prediction.isPassed}
            >
              <m.PredictionLabel>결과</m.PredictionLabel>
              <m.PredictionValue>
                {prediction.isPassed ? '합격' : '불합격'}
              </m.PredictionValue>
            </m.PredictionCard>
          </m.PredictionContainer>

          <m.Graph>
            <Line data={graphData} options={graphOptions} />
          </m.Graph>
        </m.HistoryContainer>
      </m.InnerContainer>
    </m.Container>
  );
};

export default PredictionResultPage;
