import { E as EVENTS_TYPES } from './constants-53c76d9d.js';

const EVENT_TYPE = EVENTS_TYPES.PSK_BUTTON_EVT;
class PskButtonEvent extends CustomEvent {
    constructor(eventName, eventData, eventOptions) {
        super(eventName, eventOptions);
        this.getEventType = function () {
            return EVENT_TYPE;
        };
        this.data = eventData;
    }
}

export { PskButtonEvent as P };
