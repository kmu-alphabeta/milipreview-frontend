import * as p from './style';
import Dropdown from '../../components/Dropdown';

const ProfilePage: React.FC = () => {
  const birthYear = [...Array(21)].map((_, index) => 1988 + index);
  const birthDay = [...Array(31)].map((i) => i + 1);
  const data = {
    birthYear: birthYear,
    birthMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    birthDay: birthDay,
  };
  return (
    <p.Container>
      <p.LeftContainer>
        <p.itemWrapper>
          생년월일
          <p.dropdownWrapper>
            <Dropdown option={data.birthYear} width={100} placeholder="년" />
            <Dropdown option={data.birthMonth} width={100} placeholder="월" />
            <Dropdown option={data.birthDay} width={100} placeholder="일" />
          </p.dropdownWrapper>
        </p.itemWrapper>
      </p.LeftContainer>
      <p.RightContainer></p.RightContainer>
    </p.Container>
  );
};

export default ProfilePage;

// import React, { useState } from 'react';
// import * as Styled from './style'; // 스타일 컴포넌트 파일

// const EditableDataComponent = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: '정보처리기사',
//       level: '일반',
//       rank: 'L2',
//       relation: '간접관련',
//     },
//     {
//       id: 2,
//       name: '정보처리기사',
//       level: '일반',
//       rank: 'L2',
//       relation: '간접관련',
//     },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempData, setTempData] = useState([...data]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setData(tempData);
//     setIsEditing(false);
//   };

//   const handleChange = (index: number, field: string, value: string) => {
//     const updatedData = [...tempData];
//     setTempData(updatedData);
//   };

//   return (
//     <Styled.Container>
//       <Styled.Title>자격증</Styled.Title>
//       <Styled.Table>
//         <thead>
//           <tr>
//             <th>이름</th>
//             <th>등급</th>
//             <th>레벨</th>
//             <th>관련성</th>
//             {isEditing && <th>액션</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {tempData.map((item, index) => (
//             <tr key={item.id}>
//               <td>
//                 {isEditing ? (
//                   <Styled.InputField
//                     value={item.name}
//                     onChange={(e) =>
//                       handleChange(index, 'name', e.target.value)
//                     }
//                   />
//                 ) : (
//                   item.name
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <Styled.InputField
//                     value={item.level}
//                     onChange={(e) =>
//                       handleChange(index, 'level', e.target.value)
//                     }
//                   />
//                 ) : (
//                   item.level
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <Styled.InputField
//                     value={item.rank}
//                     onChange={(e) =>
//                       handleChange(index, 'rank', e.target.value)
//                     }
//                   />
//                 ) : (
//                   item.rank
//                 )}
//               </td>
//               <td>
//                 {isEditing ? (
//                   <Styled.InputField
//                     value={item.relation}
//                     onChange={(e) =>
//                       handleChange(index, 'relation', e.target.value)
//                     }
//                   />
//                 ) : (
//                   item.relation
//                 )}
//               </td>
//               {isEditing && (
//                 <td>
//                   <Styled.Button
//                     onClick={() => {
//                       const updatedData = tempData.filter(
//                         (_, i) => i !== index,
//                       );
//                       setTempData(updatedData);
//                     }}
//                   >
//                     삭제
//                   </Styled.Button>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </Styled.Table>
//       {isEditing ? (
//         <Styled.Button onClick={handleSaveClick}>저장</Styled.Button>
//       ) : (
//         <Styled.Button onClick={handleEditClick}>수정</Styled.Button>
//       )}
//     </Styled.Container>
//   );
// };

// export default EditableDataComponent;
