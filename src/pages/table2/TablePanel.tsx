// Libraries
import React, { Component } from 'react';

// Types
import { Table } from '@grafana/ui';
import { PanelProps, dateTime } from '@grafana/data';
import { Options } from './types';

 
interface Props extends PanelProps<Options> {}

export class TablePanel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { data, height, width, options } = this.props;

    if (data.series.length < 1) {
      return <div>No Table Data...</div>;
    }

    return <Table height={height} 
                  width={width} 
                  data={data.series[0]} 
                   />;
  }
}