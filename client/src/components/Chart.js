import React, { useRef, useEffect } from "react";
import { createChart } from 'lightweight-charts';

let chart;
let series;

function Chart(props) {
    const chartRef = useRef();

    useEffect(() => {
        chart = createChart(chartRef.current, { width: 1280, height: 720 });

        chart.applyOptions({
            priceScale: {
                scaleMargins: {
                    top: 0.2,
                    bottom: 0.2,
                },
                borderVisible: true,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
                borderVisible: true,
            },
            layout: {
                backgroundColor: '#0a0a14',
                textColor: '#4d4d4d',
            },
            grid: {
                horzLines: {
                    visible: false,
                },
                vertLines: {
                    visible: false,
                },
            },
            crosshair: {
                vertLine: {
                    color: 'rgba(0, 150, 136, 1)',
                    width: 1,
                    style: 0,
                    visible: true,
                    labelVisible: true,
                },
                horzLine: {
                    visible: false,
                }
            },
        });

        series = chart.addAreaSeries({
            topColor: 'rgba(0, 150, 136, 0.50)',
            bottomColor: 'rgba(0, 150, 136, 0.05)',
            lineColor: 'rgba(0, 150, 136, 1)',
            lineWidth: 1.5,
        });

    }, []);

    useEffect(() => {
        series.setData(props.data);
        chart.timeScale().fitContent();
    }, [props.data]);

    return (
        <div ref={chartRef} id='chart'></div>
    )
}

export default Chart;