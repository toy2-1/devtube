import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/earningsSlice';

function EarningModal({ isOpen }) {
	const dispatch = useDispatch();
	const selectedEarning = useSelector(state => state.earnings.selectedEarning);

	if (!selectedEarning) {
		return null;
	}

	return (
		<div className="earning_modal">
			<div className="earning_modal_wrapper">
				<div className="earning_modal_wrapper_title">수익명세서</div>
				<div className="earning_modal_wrapper_inner">
					<div className="earning_modal_wrapper_inner_subtitle">
						<div className="earning_modal_wrapper_inner_subtitle_content">
							지급 날짜
						</div>
						<div className="earning_modal_wrapper_inner_subtitle_detail">
							{selectedEarning.date}
						</div>
					</div>
					<div className="earning_modal_wrapper_inner_subtitle">
						<div className="earning_modal_wrapper_inner_subtitle_content">
							수익 종류
						</div>
						<div className="earning_modal_wrapper_inner_subtitle_detail">
							{selectedEarning.type}
						</div>
					</div>
				</div>
				<div className="earning_modal_wrapper_total">
					<div className="earning_modal_wrapper_total_content">지급 총액</div>
					<div className="earning_modal_wrapper_total_content">
						{selectedEarning.amount.toLocaleString()}원
					</div>
				</div>
				<div
					className="earning_modal_wrapper_button"
					onClick={() => dispatch(closeModal())}>
					<div className="earning_modal_wrapper_button_content">확인</div>
				</div>
			</div>
		</div>
	);
}

export default EarningModal;
