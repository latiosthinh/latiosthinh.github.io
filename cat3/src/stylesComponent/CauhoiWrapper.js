import styled, { css } from 'styled-components'

export const CauhoiWrapper = styled.div`
	position: relative;
	border: 10px solid #e7209f;
	outline: 10px solid #eb6cca;
	background-color: #fff;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 180px;
	z-index: 1000;
	max-width: 960px;
	min-height: 510px;
	padding: 15px;

	.noidungcauhoi-wr,
	.noidung-dapan-wr {
		padding: 0px;
	}

	.questionLeft {
		font-family: 'Hobo Std Medium';
	}

	.noidung-dapan-wr {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		/*   grid-auto-rows: 300px!important; */
		align-items: center;
		grid-gap: 2rem;
	}

	.noidung-dapan-wr img {
		width: 100% !important;
		height: auto !important;
	}

	.noidung-dapan-wr > div {
		border: 1px solid #ddd;
		text-align: center;
	}
`
