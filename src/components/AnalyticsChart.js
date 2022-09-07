import { VictoryPie, VictoryLabel } from 'victory';

function AnalyticsChart(props) {

    const data = props.data;
    const label = props.label;

    return (
        <svg viewBox='0 0 400 400'>
            <filter id='drop-shadow'>
                <feDropShadow dx='0' dy='0' stdDeviation='2' floodColor='#000' floodOpacity='0.4'/>
            </filter>
            <VictoryPie
                standalone={false}
                data={data}
                labels={({datum}) => [datum.nutrient, `${Math.round(datum.calories)} cal`]}
                x='nutrient' 
                y='calories' 
                padding={64}
                colorScale={['#9cff97', '#897eff', '#ff6f6f']} 
                innerRadius={96}
                padAngle={2}
                animate={{ duration: 500 }}
                style={{ 
                    labels: { fontFamily: 'Roboto', fontWeight: 300 }, 
                    data: { filter: 'url(#drop-shadow)' }
                }}
            />
            <VictoryLabel
                textAnchor='middle'
                style={{ fontFamily: 'Roboto', fontWeight: 300 }}
                x={200} y={200}
                text={label}
            />
        </svg>
    );
}

export default AnalyticsChart;