import { Row } from '@components/base';
import { Logo } from '@components/design';
import { Button, Layout, Page } from '@components/utilities';
import { useRef } from 'react';

export default function Home() {
	const hero = useRef(null);
	const booking = useRef(null);
	const about = useRef(null);
	const services = useRef(null);
	const contact = useRef(null);

	const variant = '1';

	function scroll(target) {
		target?.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}

	return (
		<Page
			Page
			title='Better Your Health'
			favicon={`/SVG/Logo ${variant}.svg`}
			description='Better Your Health Landing Page'
			as='column'
			className='bg-violet-200 text-violet-900 overflow-y-auto snap-y snap-proximity'>
			<nav className='sticky top-0 insert-x-0 backdrop-blur'>
				<Row className='px-4 py-2 justify-between'>
					<Logo size='sm' {...{ variant }} />
					<Row className='space-x-2'>
						<Button
							className='text-violet-900 hover:text-rose-900 bg-transparent hover:bg-transparent active:bg-transparent'
							label='Home'
							onClick={() => scroll(hero)}
						/>
						<Button
							className='text-violet-900 hover:text-rose-900 bg-transparent hover:bg-transparent active:bg-transparent'
							label='About'
							onClick={() => scroll(about)}
						/>
						<Button
							className='text-violet-900 hover:text-rose-900 bg-transparent hover:bg-transparent active:bg-transparent'
							label='Services'
							onClick={() => scroll(services)}
						/>
						<Button
							className='text-violet-900 hover:text-rose-900 bg-transparent hover:bg-transparent active:bg-transparent'
							label='Contact'
							onClick={() => scroll(contact)}
						/>
					</Row>
				</Row>
			</nav>

			<div className='snap-start'>
				<section id='hero' className='' ref={hero}>
					<Layout as='column' className='h-screen justify-center items-center bg-violet-200 snap-start'>
						hero
						<Button label='Book Now' onClick={()=>scroll(booking)}/>
					</Layout>
				</section>
			</div>

			<div className='snap-start'>
				<section id='booking' className='' ref={booking}>
					<Layout as='column' className='h-screen justify-center items-center bg-violet-100 snap-start'>Booking</Layout>
				</section>
			</div>

			<div className='snap-start'>
				<section id='about' className='' ref={about}>
					<Layout as='column' className='h-screen justify-center items-center pt-16 bg-violet-50 snap-start'>About</Layout>
				</section>
			</div>

			<div className='snap-center'>
				<section id='cta1' className='' >
					<Layout as='column' className='h-52 justify-center items-center text-white bg-violet-500 snap-start'>
						<Button label="Book Now" onClick={()=>scroll(booking)}/>
					</Layout>
				</section>
			</div>

			<div className='snap-start'>
				<section id='services' className='' ref={services}>
					<Layout as='column' className='h-screen justify-center items-center pt-16 bg-violet-100 snap-start'>services</Layout>
				</section>
			</div>

			<div className='snap-center'>
				<section id='cta2' className='' >
					<Layout as='column' className='h-52 justify-center items-center text-white bg-violet-500 snap-start'>
						<Button label="Book Now" onClick={()=>scroll(booking)}/>
					</Layout>
				</section>
			</div>

			<div className='snap-start'>
				<section id='contact' className='' ref={contact}>
					<Layout as='column' className='h-screen justify-center items-center pt-16 bg-violet-50 snap-start'>contact</Layout>
				</section>
			</div> 

			<div className='snap-end'>
				<section id='footer' className='' >
					<Layout as='column' className='h-96 justify-center items-center text-white bg-violet-500 snap-start'>
						<Button label="Book Now" onClick={()=>scroll(booking)}/>
					</Layout>
				</section>
			</div>

		</Page>
	);
}
