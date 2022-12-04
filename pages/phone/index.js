import Spline from '@splinetool/react-spline';

export default function Phone() {
	return (
		<div className='bg-black flex w-screen h-screen min-h-screen items-center justify-center'>
			<div className=' bg-slate-800 h-full w-full py-4 px-7 flex flex-col items-start justify-center'>
				<h2 className=' text-8xl text text-stone-200 font-bold'>Hello</h2>
				<p className=' text-2xl text-stone-400 font-light'>
					This is my phone ported into React using Spline
				</p>
			</div>
			<div className=' bg-slate-500 h-full w-full p-4'>
				<Spline scene='https://prod.spline.design/3ESsMmZPSkqA03kK/scene.splinecode' />
			</div>
		</div>
	);
}
