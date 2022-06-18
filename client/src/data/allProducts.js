import TheragunPro from '../images/pdp-pro-hero.jpg';
import Hypervolt2Pro from '../images/hypervolt-2-pro.jpg';
import TheragunMini from '../images/pdp-mini-black-hero-1.jpg';
import HypervoltGo from '../images/hypervolt-go.jpg';
import WaveRoller from '../images/wave-roller.jpg';
import VyperGo from '../images/vyper-go.jpg';
import WaveDuo from '../images/waveduo.jpg';
import WaveSolo from '../images/wavesolo.jpg';
import RockTape from '../images/rocktape.jpg';
import KinesioTape from '../images/kinesio-tape.jpg';
import KTTapeWide from '../images/kt-tape-wide.jpg';
import KTTape from '../images/kt-tape.jpg';
import GoFitHook from '../images/gofitcane.jpg';
import GoFitBar from '../images/gofitbar.jpg';
import TriggerPointFoamRoller from '../images/foamroller.jpg';
import TriggerPointBall from '../images/massageball.jpg';

const allProducts = [
	{
		id: 1,
		category: 'Percussion',
		name: 'Theragun Pro',
		price: 599,
		quantity: 1,
		src: TheragunPro,
		alt: 'percussive massage gun',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '10" x 7" x 3"',
			weight: '3 lbs',
			'battery life': '180 mins / 3 hrs',
			mode: '5 levels of speed',
			'head attachments': '6'
		}
	},
	{
		id: 2,
		category: 'Percussion',
		name: 'Hypervolt 2 Pro',
		price: 399,
		quantity: 1,
		src: Hypervolt2Pro,
		alt: 'percussive massage gun',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '10" x 8" x 2"',
			weight: '2.6 lbs',
			'battery life': '180 mins / 3 hrs',
			mode: '5 levels of speed',
			'head attachments': '5'
		}
	},
	{
		id: 3,
		category: 'Percussion',
		name: 'Theragun Mini',
		price: 199,
		quantity: 1,
		src: TheragunMini,
		alt: 'percussive massage gun',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '6" x 5" x 2"',
			weight: '1.5 lbs',
			'battery life': '150 mins / 2.5 hrs',
			mode: '3 levels of speed',
			'head attachments': '1'
		}
	},
	{
		id: 4,
		category: 'Percussion',
		name: 'Hypervolt Go',
		price: 159,
		quantity: 1,
		src: HypervoltGo,
		alt: 'percussive massage gun',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '5" x 5" x 2"',
			weight: '1.5 lbs',
			'battery life': '150 mins / 2.5 hrs',
			mode: '3 levels of speed',
			'head attachments': '2'
		}
	},
	{
		id: 5,
		category: 'Vibration',
		name: 'Wave Roller',
		price: 149,
		quantity: 1,
		src: WaveRoller,
		alt: 'vibrational foam roller',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '12" x 5" x 4"',
			weight: '3 lbs',
			'battery life': '180 mins / 3 hrs',
			mode: '5 levels of speed',
			'weight capacity': '350 lbs'
		}
	},
	{
		id: 6,
		category: 'Vibration',
		name: 'Vyper Go',
		price: 149,
		quantity: 1,
		src: VyperGo,
		alt: 'vibrational foam roller',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '10" x 4" x 4"',
			weight: '2 lbs',
			'battery life': '120 mins / 2 hrs',
			mode: '3 levels of speed',
			'weight capacity': '350 lbs'
		}
	},
	{
		id: 7,
		category: 'Vibration',
		name: 'Wave Duo',
		price: 99,
		quantity: 1,
		src: WaveDuo,
		alt: 'vibrational ball',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '7" x 4" x 3"',
			weight: '2 lbs',
			'battery life': '200 mins / 3.33 hrs',
			mode: '5 levels of speed',
			'weight capacity': '350 lbs'
		}
	},
	{
		id: 8,
		category: 'Vibration',
		name: 'Wave Solo',
		price: 79,
		quantity: 1,
		src: WaveSolo,
		alt: 'vibrational ball',
		largeImage: false,
		specs: {
			material: 'textured silicone',
			dimensions: '3.4" diameter',
			weight: '0.7 lbs',
			'battery life': '200 mins / 3.33 hrs',
			mode: '3 levels of speed',
			'weight capacity': '350 lbs'
		}
	},
	{
		id: 9,
		category: 'Taping',
		name: 'RockTape',
		price: 22,
		quantity: 1,
		src: RockTape,
		alt: 'kinesiotape',
		largeImage: false,
		specs: {
			material: 'nylon, cotton',
			quantity: '1 roll of tape',
			dimensions: '2in x 5.5yds (per roll)',
			usage: 'can last 3-5 days',
			'water-resistant': 'yes'
		}
	},
	{
		id: 10,
		category: 'Taping',
		name: 'Kinesio Tape',
		price: 16,
		quantity: 1,
		src: KinesioTape,
		alt: 'kinesiotape',
		largeImage: false,
		specs: {
			material: 'spandex, cotton',
			quantity: '2 roll of tape',
			dimensions: '1in x 5.5yds (per roll)',
			usage: 'can last 3-5 days',
			'water-resistant': 'yes'
		}
	},
	{
		id: 11,
		category: 'Taping',
		name: 'KT Tape (Wide)',
		price: 16,
		quantity: 1,
		src: KTTapeWide,
		alt: 'kinesiotape',
		largeImage: true,
		specs: {
			material: 'spandex, cotton',
			quantity: '10 precut strips of tape',
			dimensions: '4" x 10" (per strip)',
			usage: 'can last 4-7 days',
			'water-resistant': 'yes'
		}
	},
	{
		id: 12,
		category: 'Taping',
		name: 'KT Tape',
		price: 13,
		quantity: 1,
		src: KTTape,
		alt: 'kinesiotape',
		largeImage: true,
		specs: {
			material: 'spandex, cotton',
			quantity: '20 precut strips of tape',
			dimensions: '2" x 10" (per strip)',
			usage: 'can last 3-5 days',
			'water-resistant': 'yes'
		}
	},
	{
		id: 13,
		category: 'Trigger-Point',
		name: 'GoFit Hook',
		price: 30,
		quantity: 1,
		src: GoFitHook,
		alt: 'trigger-point',
		largeImage: true,
		specs: {
			material: 'plastic',
			dimensions: '23" x 14" x 1"',
			weight: '2.1 lbs'
		}
	},
	{
		id: 14,
		category: 'Trigger-Point',
		name: 'GoFit Bar',
		price: 25,
		quantity: 1,
		src: GoFitBar,
		alt: 'trigger-point',
		largeImage: false,
		specs: {
			material: 'plastic',
			dimensions: '22" x 6" x 1"',
			weight: '1.4 lbs'
		}
	},
	{
		id: 15,
		category: 'Trigger-Point',
		name: 'TP Roller',
		price: 45,
		quantity: 1,
		src: TriggerPointFoamRoller,
		alt: 'trigger-point',
		largeImage: true,
		specs: {
			material: 'EVA (ethylene vinyl acetate)',
			dimensions: '26" x 5" x 5"',
			weight: '2.86 lbs',
			'weight capacity': '325 lbs'
		}
	},
	{
		id: 16,
		category: 'Trigger-Point',
		name: 'TP Ball',
		price: 22,
		quantity: 1,
		src: TriggerPointBall,
		alt: 'trigger-point',
		largeImage: false,
		specs: {
			material: 'EVA (ethylene vinyl acetate)',
			dimensions: '5" x 5" x 5"',
			weight: '0.12 lbs',
			'weight capacity': '325 lbs'
		}
	}
];

export default allProducts;
