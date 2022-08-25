import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
const { Option } = Select;

interface SortProps {
  sort: (value: string) => void;
}

const SelectOption = ({ sort }: SortProps) => (
  <SelectWrapper>
    <Select
      defaultValue="정렬"
      style={{
        width: 120,
      }}
      onChange={sort}
    >
      <Option value="date" style={{ fontFamily: 'Gill Sans' }}>
        등록 순
      </Option>
      <Option value="like" style={{ fontFamily: 'Gill Sans' }}>
        좋아요순
      </Option>
    </Select>
  </SelectWrapper>
);

export default SelectOption;

const SelectWrapper = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
