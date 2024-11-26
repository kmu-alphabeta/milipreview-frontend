import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 16%;
    margin-bottom: 20px;
    gap: 15px;
`;

export const Header = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    margin-top: 5%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: var(--green);
    color: white;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2D4F36;
    }
`;

export const GoBackButton = styled.button`
    padding: 10px 20px;
    background-color: var(--green);
    color: white;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 50vh;

    &:hover {
        background-color: #2D4F36;
    }
`;

export const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
`;

export const ListItem = styled.li`
    padding: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        background-color: #f9f9f9; /* 배경색 변경 */
        border-color: #d4d4d4; /* 테두리 색 변경 */
        transform: translateY(-2px); /* 약간의 상승 효과 */
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* hover 시 그림자 강조 */
    }
`;

export const ListTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin-bottom: 5px;
    text-decoration: none;
`;

export const ListAuthor = styled.p`
    font-size: 14px;
    color: gray;
    text-decoration: none;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    outline: none;

    &:focus {
        border-color: var(--green);
        box-shadow: 0 0 4px rgba(0, 128, 0, 0.4);
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    min-height: 200px;
    outline: none;

    &:focus {
        border-color: var(--green);
        box-shadow: 0 0 4px rgba(0, 128, 0, 0.4);
    }
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    height: 70vh;
`;

export const DetailAuthor = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #000;
`;

export const DetailDate = styled.p`
    font-size: 14px;
    color: #555;
`;

export const DetailContent = styled.div`
    font-size: 16px;
    color: black;
    line-height: 1.6;
    word-wrap: break-word;
`;
