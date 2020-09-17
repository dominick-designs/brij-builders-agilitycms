import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground"
import tw from "twin.macro";

import Hero from "components/hero/BackgroundAsImage"

export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

export default ({ fields }) => {

	return (
		<>
			

			<a href={fields.uRL.href}>
				<PrimaryButton>
					{fields.text}
				</PrimaryButton>
			</a>
			<ThreeColCenteredStatsPrimaryBackground
				heading={fields.text}
				description={fields.description}

			/>
		</>

	)
}

