/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {Circle, useFont} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';
import {View} from 'react-native';

function ToolTip({x, y}: {x: SharedValue<number>; y: SharedValue<number>}) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const DATA = Array.from({length: 31}, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export function App(): React.JSX.Element {
  const font = useFont(require('./assets/inter-medium.ttf'), 12);
  const {state, isActive} = useChartPressState({x: 0, y: {highTmp: 0}});

  return (
    <View style={{height: 300}}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={['highTmp']}
        axisOptions={{
          font,
        }}
        chartPressState={state}>
        {({points}) => (
          <>
            <Line points={points.highTmp} color="red" strokeWidth={3} />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.highTmp.position} />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
}
