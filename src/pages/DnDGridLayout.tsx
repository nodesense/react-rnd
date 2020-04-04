import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';

import {TablePanel} from './table2/TablePanel';

import { PanelProps, RawTimeRange, dateTime, TimeRange, ScopedVars, LoadingState } from '@grafana/data';

const rawTimeRange: RawTimeRange = {
    'from': dateTime(new Date()),
    'to':  dateTime(new Date()),
}

const timeRange: TimeRange = {
    'from': dateTime(new Date()),
    'to':  dateTime(new Date()),
    raw: rawTimeRange
}
 
 

const panelData = {
    state: LoadingState.Loading,
    series: [],
    timeRange: timeRange
}

interface DnDGridLayoutProps {

}

interface DnDGridLayoutState {
    layout: any[];
}

const GraphPanel = () => {
    return (
        <div><h2>Graph</h2></div>
    )
}

const StatPanel = () => {
    return (
        <div><h2>State</h2></div>
    )
}


const Table2Panel = () => {
    return (
        <div><h2>Table</h2></div>
    )
}
export declare type InterpolateFunction = (value: string, scopedVars?: ScopedVars, format?: string | Function) => string;

const interpolate: InterpolateFunction = (value: string, scopedVars?: ScopedVars, format?: string | Function) => {
    return "welcome";
}

class DnDGridLayout extends React.Component<DnDGridLayoutProps,DnDGridLayoutState> {
    constructor(props: DnDGridLayoutProps) {
        super(props);
        this.state = { layout : [
            {i: 'a', x: 0, y: 0, w: 3, h: 2,  minW: 2, maxW: 4},
            {i: 'b', x: 4, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 8, y: 0, w: 3, h: 2, minW: 2, maxW: 4}
          ] };
    }
    
    refresh = () => {
        this.forceUpdate();
    }


  onDrop = (elemParams: Object) => {
    alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  };


  onLayoutChange = (layout: any) => {
      console.log('layout changed ', layout)
    // this.props.onLayoutChange(layout, layouts);
  };
  
    render() {
        
    
        return (
            <div>
                <h2>Grid</h2>

                <GridLayout className="layout" 
                            layout={this.state.layout} 
                            cols={12} 
                            rowHeight={30} 
                            width={1200}
                            onLayoutChange={this.onLayoutChange}
                            onDrop={this.onDrop}
                            
                            >
                        <div key="a" 
                            data-grid={{x: 0, y: 0, w: 5, h: 2,   minW: 2, maxW: 4}}>
                                <GraphPanel />
                        </div>
                        <div key="b" data-grid={{x: 6, y: 0, w: 5, h: 2, minW: 2, maxW: 4}}>
                          
                        
                          
                           <TablePanel id={3232} 
                                      timeRange = { timeRange } 
                                      timeZone = {"utc"}
                                      options = { {showHeader: false} }
                                      onOptionsChange = { () => {}}
                                      renderCounter= {1}
                                      transparent = {true}
                                      width = {300}
                                      height = {300}
                                      replaceVariables = { interpolate }

                                      onChangeTimeRange = { () => {} }

                                      data = { panelData }
                                      
                                      
                                      />
                        </div>
                        <div key="c" data-grid={{x: 11, y: 0, w: 5, h: 2, minW: 2, maxW: 4}}>
                            <StatPanel />
                        </div>
                        
                </GridLayout>

                <button onClick={this.refresh}>Refresh</button>
                <pre >
                    {JSON.stringify(this.state.layout, null, 2)}
                </pre>
                
            </div>
        )
    }
}

export default DnDGridLayout;