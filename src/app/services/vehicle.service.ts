import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private vehicles: Vehicle[] = [
        { id: 1, name: 'Truck A', location: 'Location A', status: 'Available', available: 12 },
        { id: 2, name: 'Truck B', location: 'Location B', status: 'Unavailable', available: 24 },
        // More dummy data
    ];

    getVehicles() {
        return this.vehicles;
    }
}
