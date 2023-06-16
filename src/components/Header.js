import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
	{
		icon: faEnvelope,
		url: 'mailto:athira.ysmn@example.com',
	},
	{
		icon: faGithub,
		url: 'https://github.com/n-athrysmn',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/noraathira/',
	},
	{
		icon: faMedium,
		url: 'https://medium.com',
	},
	{
		icon: faStackOverflow,
		url: 'https://stackoverflow.com',
	},
]

const Header = () => {
	const [hideHeader, setHideHeader] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0) {
				setHideHeader(true)
			} else {
				setHideHeader(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}

	return (
		<Box
			className={hideHeader ? 'header hidden' : 'header'}
			position='fixed'
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty='transform'
			transitionDuration='.3s'
			transitionTimingFunction='ease-in-out'
			backgroundColor='#18181b'
		>
			<Box color='white' maxWidth='1280px' margin='0 auto'>
				<HStack
					px={16}
					py={4}
					justifyContent='space-between'
					alignItems='center'
				>
					<nav>
						<HStack spacing={2}>
							{socials.map((social, index) => (
								<a key={index} href={social.url} target='_blank'>
									<FontAwesomeIcon icon={social.icon} size='1x' />
								</a>
							))}
						</HStack>
					</nav>
					<nav>
						<HStack spacing={8}>
							<a onClick={handleClick('projects')} href='#projects'>
								PROJECTS
							</a>
							<a onClick={handleClick('contactme')} href='#contact-me'>
								CONTACT ME
							</a>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	)
}

export default Header
