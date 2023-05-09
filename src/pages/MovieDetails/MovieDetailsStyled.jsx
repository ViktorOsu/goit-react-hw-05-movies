import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const GoBack = styled(Link)`
  padding: 4px 10px;
  background-color: #ffffffc7;
  /* margin: 16px 16px 16px; */
  display: flex;
  text-decoration: none;
  align-items: center;
  max-width: 100px;
  &:hover,
  &:focus {
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const GoBackText = styled.span`
  margin: 0 10px;
  color: black;
  font-size: 16px;
  font-weight: 300;
`;

export const MoreContainer = styled.div`
  background-color: white;
  margin-top: 8px;
  min-width: auto;
  min-height: auto;
  display: flex;
  padding: 8px 16px;
  gap: 16px;
`;

export const Arrow = styled(BsArrowLeft)`
  color: black;
`;

export const Container = styled.div`
  padding: 8px 16px;
`;

export const CastRevLink = styled(Link)`
  /* background-color: white; */
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    font-weight: 500;
    text-decoration: underline;
  }
`;
