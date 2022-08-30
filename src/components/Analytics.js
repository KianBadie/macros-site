import SectionTitle from './SectionTitle';
import AnalyticMetric from './AnalyticMetric';
import { VictoryPie } from 'victory';

import styles from './Analytics.module.css';

function Analytics(props) {

    const ingredientList = props.ingredientList;

    function getTotalNutrientValue(nutrientId) {
        const totalNutrientValue = ingredientList.reduce((total, ingredient) => {
            const food = ingredient.food;
            const amount = ingredient.amount;
            const nutrient = food.foodNutrients.find(el => el.nutrientId === nutrientId);
            const value = (nutrient.value / 100) * amount;
            return total + value;
        }, 0);
        
        return Math.round(totalNutrientValue * 100) / 100;
    }

    const totalCalories = getTotalNutrientValue(1008);
    const totalProtein = getTotalNutrientValue(1003);
    const totalCarbs = getTotalNutrientValue(1005);
    const totalFat = getTotalNutrientValue(1004);

    const chartData = [
        { nutrient: 'Protein', grams: totalProtein },
        { nutrient: 'Carbs', grams: totalCarbs },
        { nutrient: 'Fat', grams: totalFat },
    ];

    return (
        <div>
            <SectionTitle title='Analytics' />
            <div className={styles['nums-container']}>
                <AnalyticMetric title='Protein' value={totalProtein}/>
                <AnalyticMetric title='Carbs' value={totalCarbs}/>
                <AnalyticMetric title='Fat' value={totalFat}/>
            </div>
            <VictoryPie
                data={chartData}
                x='nutrient' 
                y='grams' 
                padding={64}
                colorScale={['#9cff97', '#897eff', '#ff6f6f']} 
                innerRadius={48}
                padAngle={2}
                animate={{ duration: 500 }}
                style={{
                    labels: { fontFamily: 'Roboto', fontWeight: 300 }, 
                    data: { filter: 'drop-shadow( 0px 0px 2px rgba(0, 0, 0, 0.5))' }
                }}
            />
        </div>
    );
}

export default Analytics;