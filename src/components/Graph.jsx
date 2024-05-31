import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';

const defaultData = [
	{
		id: 'japan',
		color: 'hsl(127, 70%, 50%)',
		data: [
			{
				x: '1월',
				y: 291
			},
			{
				x: '2월',
				y: 117
			},
			{
				x: '3월',
				y: 73
			},
			{
				x: '4월',
				y: 32
			},
			{
				x: '5월',
				y: 53
			},
			{
				x: '6월',
				y: 144
			},
			{
				x: '7월',
				y: 125
			},
			{
				x: '8월',
				y: 178
			},
			{
				x: '9월',
				y: 124
			},
			{
				x: '10월',
				y: 153
			},
			{
				x: '11월',
				y: 264
			},
			{
				x: '12월',
				y: 9
			}
		]
	},
	{
		id: 'france',
		color: 'hsl(132, 70%, 50%)',
		data: [
			{
				x: '1월',
				y: 291
			},
			{
				x: '2월',
				y: 117
			},
			{
				x: '3월',
				y: 73
			},
			{
				x: '4월',
				y: 32
			},
			{
				x: '5월',
				y: 53
			},
			{
				x: '6월',
				y: 144
			},
			{
				x: '7월',
				y: 125
			},
			{
				x: '8월',
				y: 178
			},
			{
				x: '9월',
				y: 124
			},
			{
				x: '10월',
				y: 153
			},
			{
				x: '11월',
				y: 264
			},
			{
				x: '12월',
				y: 9
			}
		]
	}
];

const Graph = ({ data = defaultData }) => {
	return (
		<ResponsiveLine
			data={data}
			margin={{ right: 60, bottom: 110, left: 60 }}
			xScale={{ type: 'point' }}
			yScale={{
				type: 'linear',
				min: 'auto',
				max: 'auto',
				stacked: true,
				reverse: false
			}}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legendOffset: 36,
				legendPosition: 'middle',
				truncateTickAt: 0
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legendOffset: -40,
				legendPosition: 'middle',
				truncateTickAt: 0
			}}
			enableGridX={false}
			colors={{ scheme: 'pastel1' }}
			pointSize={10}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={2}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabel="data.yFormatted"
			pointLabelYOffset={-12}
			enableArea={true}
			enableTouchCrosshair={true}
			useMesh={true}
			legends={[]}
		/>
	);
};

export default Graph;