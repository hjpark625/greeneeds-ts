import React from 'react';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { RangeValue } from 'rc-picker/lib/interface';
const { RangePicker } = DatePicker;

interface DatesProps {
  setStartDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setEndDate: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Dates = ({ setStartDate, setEndDate }: DatesProps) => (
  <Space direction="vertical" size={12}>
    <RangePicker
      name="start_datetime"
      onChange={(e: RangeValue<moment.Moment>): void => {
        setStartDate(e![0]!.format('YYYY-MM-DD'));
        setEndDate(e![1]!.format('YYYY-MM-DD'));
        // setStartDate(e![0]!.format().split('T').shift());
        // setEndDate(e![1]!.format().split('T').shift());
        // setStartDate(e![0]!._d.toLocaleString('en-CA').split(',').shift());
        // setEndDate(e[1]!._d.toLocaleString('en-CA').split(',').shift());
      }}
    />
  </Space>
);

export default Dates;
