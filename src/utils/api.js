import { serviceCall } from '../network';
import networkConstant from '../network/networkConstant';

export const randomDetail = async () => {
	const response = await serviceCall({
		url: networkConstant.END_POINTS.RAMDOM_PHOTOS,
		method: 'GET'
	})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
	return response;
};