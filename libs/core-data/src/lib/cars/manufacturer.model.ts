export interface Manufacturer {
    id: number
    Country: string;
    Mfr_CommonName: string
    VehicleTypes: [
        {
            Name: string;
        }
    ]
}
