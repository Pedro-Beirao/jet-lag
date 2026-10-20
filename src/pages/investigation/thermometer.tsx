import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Thermometer() {
	return (
		<Layout title='3. Thermometer'>
			<InvestigationNav />
			<InvestigationForm
				title='3. THERMOMETER'
				chips={['DRAW 2, PICK 1', '5 MINUTES']}
				prompt="I've just travelled (at least) Distance. Am I hotter or colder?"
				storageKey='thermometerNotes'
				fields={{
					'All Games': ['1 km', '5 km'],
					'Add for Medium & Large': ['20 km'],
					'Add for Large': ['100 km'],
				}}
			/>
		</Layout>
	);
}
