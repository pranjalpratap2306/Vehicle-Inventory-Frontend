import { Component, NgModule } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Stock {
  name: string;
  location: string;
  available: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  searchTerm: string = '';
  showPopup: boolean = false;
  showEditPopup: boolean = false; // or set to true as needed

  newVehicle: { name: string, location: String, available: number } = { name: '', location: '', available: 0 };

  cities = ['Mumbai', 'Gwalior', 'Chennai', 'Bengaluru', 'Pune'];
  selectedCity: string = '';
  carModels: { city: string, models: string[] }[] = [
    { city: 'Mumbai', models: ['Toyota Camry', 'Honda Accord', 'Ford Focus'] },
    { city: 'Gwalior', models: ['Chevrolet Malibu', 'Tesla Model S', 'Nissan Leaf'] },
    { city: 'Chennai', models: ['Jeep Grand Cherokee', 'Chrysler 300', 'Dodge Charger'] },
    { city: 'Bengaluru', models: ['Ford F-150', 'Chevrolet Silverado', 'Toyota Tundra'] },
    { city: 'Pune', models: ['Ford F-150', 'Chevrolet Silverado', 'Toyota Tundra'] }
  ];
  selectedModel: string = '';
  stocks: any[] = [
    { name: 'Toyota Camry', location: 'Mumbai', available: 10 },
    { name: 'Honda Accord', location: 'Mumbai', available: 5 },
    { name: 'Chevrolet Malibu', location: 'Gwalior', available: 8 },
    { name: 'Tesla Model S', location: 'Gwalior', available: 2 },
    { name: 'Jeep Grand Cherokee', location: 'Chicago', available: 3 },
    { name: 'Chrysler 300', location: 'Chennai', available: 4 },
    { name: 'Ford F-150', location: 'Bengaluru', available: 6 },
    { name: 'Chevrolet Silverado', location: 'Bengaluru', available: 7 },
    { name: 'Chevrolet Silverado', location: 'Pune', available: 7 }
  ];

  filteredStocks() {
    return this.stocks.filter(stock => 
      (this.selectedCity ? stock.location === this.selectedCity : true) &&
      (this.selectedModel ? stock.name === this.selectedModel : true) &&
      (this.searchTerm ? stock.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true)
    );
  }

  openAddVehiclePopup() {
    this.showPopup = true;
    this.newVehicle = { name: '', location: '', available: 0 }; // Reset fields
  }

  closePopup() {
    this.showPopup = false;
  }

  closeEditPopup() {
    this.showEditPopup = false;
  }

  onSubmit() {
    console.log('Adding vehicle:', this.newVehicle);
    // Here, you would typically send the newVehicle to your backend API
    this.newVehicle = { name: '', location: '', available: 0 }; // Reset the form
    this.closePopup();
  }

  getCarModels(city: string) {
    const selectedCityModels = this.carModels.find(c => c.city === city);
    return selectedCityModels ? selectedCityModels.models : [];
  }

  // Assuming stock is some type, make sure to define it accordingly
  openEditVehiclePopup(stock: any) {
    // Your logic to open the edit vehicle popup goes here
    console.log('Opening edit popup for: ', stock);
  }

  onUpdate(): void {
    // Your update logic goes here
    console.log('Update method called');
  }

  // Declare the editVehicle property with the Vehicle interface type
  editVehicle: Vehicle = {
    name: '',
    location: '',
    available: 0,
    id: 0,
    status: '' 
    // Initialize other properties if needed
  };

  getTotalCarsAvailable() {
    return this.stocks.reduce((total, stock) => total + stock.available, 0);
}

getCarsAvailableInCity(city: string) {
    const cityStocks = this.stocks.filter(stock => stock.location === city);
    return cityStocks.reduce((total, stock) => total + stock.available, 0);
}

}
