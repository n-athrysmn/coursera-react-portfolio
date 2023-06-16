import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
	return (
		<VStack
			color='black'
			backgroundColor='white'
			cursor='pointer'
			borderRadius='5px'
		>
			<Image src={imageSrc} borderRadius='5px' />
			<VStack spacing={4} p={4} alignItems='flex-start'>
				<HStack justifyContent='space-between' alignItems='center'>
					<Heading as='h3' size='md'>
						{title}
					</Heading>
				</HStack>
				<Text color='grey' fontSize='lg'>
					{description}
				</Text>
				<HStack>
					<p>See more</p>
					<FontAwesomeIcon icon={faArrowRight} size='sm' />
				</HStack>
			</VStack>
		</VStack>
	)
}

export default Card
