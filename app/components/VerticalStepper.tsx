'use client';
import { useMemo, useState } from 'react';

export default function VerticaStepper() {
	const data = useMemo(
		() => [
			{
				title: 'Flex Business Solutions',
				timespan: 'June 2022 - February 2023',
				description: [
					'Developing a CRUD application to be used for a construction company based in New York.',
					'Built a well-commented and designed state-management pattern in React for better optimization.',
					"Built a Scheduling application to be used for scheduling a construction company's clients and work",
					'Rebuilt UI to be up to date to new standards of responsivity, tablet first, desktop second.',
					"Worked on the backend to build routes, which handle dynamic reports in excel using the app's data.",
				],
			},
			{
				title: 'Freelance/Contractor',
				timespan: 'Jan 2022 - Jun 2022',
				description: [
					"Customized existing client's WordPress websites to perform expected functionalities.",
					'Integrated with third-party APIs as well as, built E-commerce store with Woo-Commerce.',
					'Customized WordPress to support specific functionality.',
					'Built out responsive layouts while customizing various free and premium themes.',
					'Developed and maintained relationships with clients turning them into a returning customer.',
				],
			},
		],
		[]
	);
	const [activeStep, setActiveStep] = useState(data.length - 1);
	function activateStep(index: number) {
		setActiveStep((prev) =>
			prev === index
				? prev === data.length - 1
					? 999999
					: data.length - 1
				: index
		);
	}
	return (
		<div className="h-full w-full pt-[100px]">
			<div className="flex flex-col justify-start items-start h-full w-full">
				{data.map((item, index, array) => {
					return (
						<div
							key={index}
							onClick={() => activateStep(index)}
							className="flex flex-col"
						>
							<div className="flex gap-3 items-center justify-start flex-wrap">
								<div
									className={`rounded-[50%] w-8 h-8 ${
										activeStep === index || activeStep < index
											? 'bg-green-500'
											: 'bg-white'
									}`}
								></div>
								<h1 className="text-2xl font-bold whitespace-nowrap">
									{item.title}
								</h1>
								<span className="w-4 bg-white h-[2px]"></span>
								<h2 className="font-semibold text-md text-slate-400 ">
									{item.timespan}
								</h2>
							</div>
							<div className="flex justify-between items-start mt-4 mb-4">
								<div className="flex items-center justify-center w-[32px] h-full min-h-[120px]">
									{(index !== array.length - 1 ||
										activeStep === index ||
										activeStep < index) && (
										<div
											className={`w-1 rounded ${
												activeStep === index || activeStep < index
													? 'bg-green-500'
													: 'bg-white'
											} h-full`}
										></div>
									)}
								</div>
								{(activeStep === index || activeStep < index) && (
									<div className="w-full">
										<ul>
											{item.description.map((item, index) => (
												<li key={index} className="flex items-center gap-3">
													<span className="w-2 h-[8px] bg-white rounded-[50%] shrink-0"></span>
													<p>{item}</p>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
