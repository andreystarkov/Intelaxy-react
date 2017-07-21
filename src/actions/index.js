import { CHANGE_VIEWPORT } from './constants'

export function changeViewPort(viewPort, viewWidth) {
	return {
		type: CHANGE_VIEWPORT,
		payload: { viewPort, viewWidth }
	}
}