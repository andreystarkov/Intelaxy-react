import React from 'react';

const RailsSvg = ({rails, className}) => {
	return (
		<svg ref={rails} xmlns="http://www.w3.org/2000/svg" width="192" height="68" viewBox="0 0 192 68" className={className} id="rails-anim">
			<g fill="#D0011B" fillRule="nonzero">
				<path d="M82.0475708,56.5392341 C82.0475708,56.5392341 90.5235595,55.8149911 90.5235595,44.9030638 C90.5235595,33.9911365 80.2555046,32.9771963 80.2555046,32.9771963 L61.7536321,32.9771963 L61.7536321,67.4028786 L71.0530026,67.4028786 L71.0530026,59.0982259 L79.0930833,67.4028786 L92.8484021,67.4028786 L82.0475708,56.5392341 Z M78.4634384,49.4899359 L71.0530026,49.4899359 L71.0530026,41.619829 L78.5118726,41.619829 C78.5118726,41.619829 80.5945442,42.3923549 80.5945442,45.530741 C80.5945442,48.6691272 78.4634384,49.4899359 78.4634384,49.4899359 Z M113.48138,33.2186106 C115.806223,33.2186106 122.490146,34.860228 122.490146,42.1992234 L122.490146,67.4028786 L113.336078,67.4028786 L113.336078,61.3675205 L104.472615,61.3675205 L104.472615,67.4028786 L95.0279421,67.4028786 L95.0279421,42.1992234 C95.0279421,39.3022515 97.3043505,33.2186106 104.036707,33.2186106 L113.48138,33.2186106 Z M113.336078,51.6143819 L113.287644,43.2614464 C113.287644,43.2614464 113.239209,41.3784147 110.623761,41.3784147 L107.378669,41.3784147 C104.424181,41.3784147 104.424181,43.2614464 104.424181,43.2614464 L104.424181,51.6143819 L113.336078,51.6143819 Z M126.800791,33.2186106 L136.632938,33.2186106 L136.632938,67.4028786 L126.800791,67.4028786 L126.800791,33.2186106 Z M150.436691,58.5671144 L163.659234,58.5671144 L163.659234,67.4028786 L150.436691,67.4028786 L140.652979,67.4028786 L140.652979,58.5671144 L140.652979,33.2186106 L150.436691,33.2186106 L150.436691,58.5671144 Z M166.904326,58.6636801 L182.936054,58.6153973 L182.936054,54.3665052 C172.861736,54.3665052 186.374883,54.4147881 175.477184,54.3665052 C171.554012,54.3665052 166.419984,51.3246848 166.419984,45.3858925 L166.419984,42.344072 C166.419984,36.4052797 171.602446,33.2186106 175.477184,33.2186106 L190.491792,33.2186106 L190.491792,42.0060919 L174.847539,42.0060919 L174.847539,46.0618526 L182.742317,46.0618526 C187.101397,46.0618526 191.751082,49.3933702 191.751082,55.0424653 L191.751082,58.4222658 C191.557345,65.0370182 185.98741,67.4028786 182.742317,67.4028786 L166.904326,67.4028786 L166.904326,58.6636801 Z" id="Combined-Shape" />
				<path d="M3.39039549,67.4028786 L41.6534303,67.4028786 C41.6534303,67.4028786 34.3398629,34.1359851 58.5569735,20.6650659 C63.8363036,18.1060741 80.6429784,8.54606698 108.153616,28.82487 C109.025432,28.100627 109.848814,27.5212327 109.848814,27.5212327 C109.848814,27.5212327 84.6630187,2.46242608 56.6196046,5.26283221 C42.476812,6.51818668 25.1373608,19.3131457 14.9661744,36.2121482 C4.7949879,53.1111507 3.39039549,67.4028786 3.39039549,67.4028786 Z" id="Shape" />
				<path d="M83.1131237,7.96667261 C81.5632286,7.33899538 80.0133335,6.759601 78.4150042,6.2284895 L78.6087411,3.04182045 C81.660097,3.91091201 82.8709526,4.49030638 83.3068606,4.7317207 L83.1131237,7.96667261 Z M78.5118726,18.2026398 C80.0617677,18.2992056 81.660097,18.492337 83.3068606,18.8303171 L83.1131237,21.8238547 C81.5147944,21.4858746 79.9164651,21.2927432 78.3181358,21.2444603 L78.5118726,18.2026398 Z M60.5912108,3.13838618 C59.1866184,3.13838618 57.782026,3.18666904 56.3774335,3.33151764 L55.4571833,0.482828643 C57.0555126,0.289697186 58.6054077,0.193131457 60.1068686,0.193131457 L61.075553,3.13838618 L60.5912108,3.13838618 Z M62.9160534,20.9064802 C64.1269089,20.3753687 65.5315014,19.8442572 67.1782649,19.3614286 L68.2438177,22.5480976 C66.8392253,22.9826434 65.4346329,23.5620378 64.0300405,24.2379979 L62.9160534,20.9064802 Z M40.926917,8.20808693 C39.6676272,8.83576417 38.4567717,9.56000713 37.1974819,10.332533 L34.9695077,6.95273246 C36.2772317,6.18020663 37.5365215,5.50424653 38.747377,4.8765693 L40.926917,8.20808693 Z M50.8559323,29.9353759 C51.7277483,28.82487 52.7448669,27.7143641 53.858854,26.700424 L56.038394,29.9836587 C54.9728411,31.0941646 54.0041567,32.2046705 53.1807749,33.4117421 L50.8559323,29.9353759 Z M43.8329702,45.4824582 C44.220444,43.7442751 44.656352,41.9578091 45.2859969,40.1713431 L48.7732608,42.9234664 C48.2889186,44.8064981 47.949879,46.6895298 47.7561422,48.5725615 L43.8329702,45.4824582 Z M22.6187813,22.5480976 C21.45636,23.7551692 20.3423729,25.0588066 19.3252543,26.3624439 L15.5958192,23.1757749 C16.7098063,21.9687033 17.9206619,20.7616317 19.1799516,19.55456 L22.6187813,22.5480976 Z M7.99164651,44.130538 C7.21669897,45.917004 6.19958032,48.2828643 5.56993544,49.9244817 L0,47.8966014 C0.484342213,46.5929641 1.50146086,44.1788208 2.42171106,42.1026577 L7.99164651,44.130538 Z M43.1064569,57.7463057 L48.3373528,59.6293374 C48.6279581,61.898632 49.0638661,64.0230781 49.4997741,65.9061098 L43.6876676,63.8299466 C43.4454965,62.3814607 43.2033254,60.3052975 43.1064569,57.7463057 Z" id="Combined-Shape" />
			</g>
		</svg>
	)
};

export default RailsSvg;