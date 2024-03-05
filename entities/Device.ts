
export type DeviceType = 'switch' | 'heater';

export type Device = {
    _id: string;
    type: DeviceType;
}