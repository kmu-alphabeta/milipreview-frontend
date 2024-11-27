import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [latestPrediction, setLatestPrediction] = useState<any>(null); // 최신 예측 데이터
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPredictionHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }

        const response = await axios.get(`${API_BASE_URL}/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data && response.data.length > 0) {
          const sortedData = response.data.sort(
            (a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          ); // 최신 순 정렬
          setLatestPrediction(sortedData[0]); // 가장 최근 예측 데이터
        }
        setError(null);
      } catch (err: any) {
        console.error('예측 기록 가져오기 실패:', err);
        setError('예측 기록을 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPredictionHistory();
  }, []);

  if (loading) {
    return <m.Container>로딩 중...</m.Container>;
  }

  if (error) {
    return <m.Container>{error}</m.Container>;
  }

  if (!latestPrediction) {
    return <m.Container>예측 결과가 없습니다.</m.Container>;
  }

  const graphData = {
    labels: ['점수', '컷오프 점수', '합격 확률'], // X축 레이블
    datasets: [
      {
        label: '예측 결과',
        data: [
          latestPrediction.score,
          latestPrediction.predictedCutoff,
          latestPrediction.probability,
        ], // 데이터 값
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', // 선 색상
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // 점 배경색
        tension: 0.5, // 선의 부드러운 곡선 정도
        pointBorderColor: 'rgba(75, 192, 192, 1)', // 점 테두리 색상
        pointBackgroundColor: 'rgba(255, 255, 255, 1)', // 점 내부 색상
        pointRadius: 6, // 점 크기
        pointHoverRadius: 8, // hover 시 점 크기
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
          color: '#333', // 레전드 텍스트 색상
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: '예측 결과 그래프',
        color: '#333',
        font: {
          size: 18,
          weight: 'bold' as 'bold', // weight 속성을 올바르게 설정
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // X축 그리드 색상
        },
        ticks: {
          color: '#555', // X축 텍스트 색상
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Y축 그리드 색상
        },
        ticks: {
          beginAtZero: true,
          color: '#555', // Y축 텍스트 색상
          font: {
            size: 14,
          },
          stepSize: 10,
        },
        suggestedMax: 100, // Y축 최대값
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
              <m.PredictionValue>{latestPrediction.category}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>점수</m.PredictionLabel>
              <m.PredictionValue>{latestPrediction.score}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>컷오프 점수</m.PredictionLabel>
              <m.PredictionValue>{latestPrediction.predictedCutoff}</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard>
              <m.PredictionLabel>합격 확률</m.PredictionLabel>
              <m.PredictionValue>{latestPrediction.probability}%</m.PredictionValue>
            </m.PredictionCard>
            <m.PredictionCard
              className="result-card"
              isPassed={latestPrediction.isPassed}
            >
              <m.PredictionLabel>결과</m.PredictionLabel>
              <m.PredictionValue>
                {latestPrediction.isPassed ? '합격' : '불합격'}
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
