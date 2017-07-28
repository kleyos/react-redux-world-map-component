import React from 'react'
import logo_0 from '../styles/logo_0.svg'
import logo_1 from '../styles/logo_1.svg'
import logo_2 from '../styles/logo_2.svg'
import logo_3 from '../styles/logo_3.svg'

const Carousel = ()=>{
	const slides=[
	{
		number:0,
		src:`${logo_0}`,
		alt:'First slide',
		title: 'EXTENDING YOUR TEAM',
		subtitle: 'Find a perfect match'
	},
	{
		number:1,
		src:`${logo_1}`,
		alt:'Second slide',
		title: '',
		subtitle: ''
	},
	{
		number:2,
		src:`${logo_2}`,
		alt:'Third slide',
		title: '',
		subtitle: ''
	},
	{
		number:3,
		src:`${logo_3}`,
		alt:'Third slide',
		title: '',
		subtitle: ''
	}
]
const arrow = ['prev', 'next']
	return <div className="carousel container-fluid">
	 <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			{slides.map( (item,i) => <li key={item.number} data-target="#carouselIndicators"
				className={i===0 ? "active" : ""} data-slide-to={item.number}></li>)}
		</ol>
		<div className="carousel-inner" role="listbox" >
			{
				slides.map(item => <div key={item.number}
					className={item.number===0 ? "carousel-item active" : "carousel-item"}>
					<img key={item.number} className="d-block img-fluid"
						src={item.src} alt={item.alt} height={400}/>
					<div className="carousel-caption d-none d-md-block" key>
						<h3>{item.title}</h3>
						<p>{item.subtitle}</p>
					</div>
				</div>)
			}
		</div>
		{
			arrow.map(item => <a key={item} className={`carousel-control-${item}`}
			href="#carouselIndicators" role="button" data-slide={item}>
				<span className={`carousel-control-${item}-icon`} aria-hidden="true"></span>
				<span className="sr-only">{item}</span>
			</a> )
		}
	</div>
</div>
	}
	export default Carousel