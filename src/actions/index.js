import { CHANGE_VIEWPORT } from './constants'

export function changeViewPort(viewPort) {
	return {
		type: CHANGE_VIEWPORT,
		payload: viewPort
	}
}