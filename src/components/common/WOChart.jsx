import React from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// type OptionsType = {} // 차트 데이터 및 옵션들을 위한 highCharts형식의 데이터
// type type = 'fds' | 'column?'

const WOChart = ({ options, type }) => {
  // logic

  // view
  return (
    <Wrap className={`chart-wrap ${type || ''}`}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Wrap>
  );
};

export default WOChart;

const Wrap = styled.div`
  .highcharts-credits {
    display: none;
  }
  &.fds {
    .highcharts {
      &-container {
        height: 218px !important;
      }
      &-background {
        fill: transparent;
      }
      &-axis {
        &.highcharts-xaxis {
          display: none;
        }
      }

      &-axis-labels {
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
          opacity: 0.6;
        }
      }
      &-yaxis-grid {
        .highcharts-grid-line {
          stroke-width: 1px;
          stroke: var(--White);
          background: #fff;
          opacity: 0.1;
        }
      }
      &-column-series {
        .highcharts-point {
          stroke-width: 0;
        }
      }
      &-legend {
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
        }
        &-item {
          .highcharts-point {
            stroke-width: 0;
          }
          &.highcharts-column-series {
            .highcharts-point {
              x: 10;
              y: 11;
            }
          }
        }
      }
    }
  }
  &.column {
    .highcharts-axis-labels {
      text {
        font-size: 10px !important;
        font-weight: 400;
      }
    }
    .highcharts-legend-item {
      text {
        font-size: 14px !important;
        font-weight: 400;
      }
    }
    .highcharts-tooltip {
      filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3)) !important;
      &-box {
        padding: 12px 16px;
      }
      text {
        tspan {
          /* font-size: 14px !important; */
          &:first-child {
            padding: 4px 0;
            display: block;
            // category
            font-size: 100% !important;
            font-weight: 700;
          }
          &.highcharts-br {
            & + tspan {
              // point
              font-size: 9px !important;
            }
          }
        }
      }
      > span {
        height: 200px;
      }
    }
  }
`;
