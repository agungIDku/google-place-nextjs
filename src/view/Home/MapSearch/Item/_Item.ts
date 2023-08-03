import styled from '@emotion/styled'

export const StyledContainer = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f3f1f1;
    border-radius: 4px;
  }

  & p {
    font-size: 12px
  }
`
