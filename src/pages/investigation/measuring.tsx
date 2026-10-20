import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Measuring() {
	return (
		<Layout title='2. Measuring'>
			<InvestigationNav />
			<InvestigationForm
				title='2. MEASURING'
				chips={['DRAW 3, PICK 1', '5 MINUTES']}
				prompt='Compared to me, are you closer to or further from _______?'
				storageKey='measuringNotes'
				fields={{
					Transit: [
						'A Commercial Airport',
						'A High Speed Train Line',
						'A Rail Station',
					],
					/*Borders: [
						'An International Border',
						'A 1st Admin. Div. Border',
						'A 2nd Admin. Div. Border',
					],*/
					Natural: [
						'The Sea',
						'A Body of Water',
						'A Park',
					],
					'Places of Interest': [
						'An Amusement Park',
						'A Zoo',
						'An Aquarium',
						'A Golf Course',
						'A Museum',
						'A Cinema',
					],
					'Public Utilities': [
						'A Hospital',
						'A Library',
						'A Foreign Consulate',
					],
					'Miscellaneous (Not supported on Map Generator)': [
						'A McDonalds',
						'A Continente'
					]
				}}
			/>
		</Layout>
	);
}
