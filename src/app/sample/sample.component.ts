import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  sampleform!: FormGroup;
  state:any = ['Andaman and Nicobar Islands',' Andhra Pradesh','Arunachal Pradesh',' Assam','  Bihar','Chandigarh',' Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu',' Delhi',
  'Goa','Gujarat','Haryana',' Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka',' Kenmore','Kerala',' Lakshadweep','Maharashtra','Manipur','Meghalaya',' Mizoram','Nagaland',
  'Narora','Natwar','Odisha','Paschim Medinipur','Pondicherry','Punjab','Rajasthan','Sikkim','Tamil Nadu',' Telangana',' Tripura',' Uttar Pradesh',' Uttarakhand',' Vaishali','West Bengal'];
  city1:any = ['Bombuflat','Garacharma','Port Blair', 'Rangat'];
  city2:any=['Addanki','Adivivaram','Adoni','Aganampudi','Ajjaram','Akividu','Akkarampalle','Akkayapalle','Akkireddipalem','Alampur','Amalapuram','Amudalavalasa',' Amur','Anakapalle','Anantapur','Andole','Atmakur','Attili','Avanigadda','Badepalli','Badvel','Balapur','Bandarulanka'];
  city3:any=['Along','Basar','Bondila','Changlang','Daporijo','Deomali','Itanagar','Jairampur','Khonsa','Naharlagun','Namsai','Pasighat',' Roing','Roing','Seppa','Tawang',' Tezu','Ziro'];
  city4:any=['Abhayapuri','Ambikapur', 'Amguri', 'Anand Nagar', 'Badarpur',  'Badarpur Railway Town', 'Bahbari Gaon', 'Bamun Sualkuchi','Barbari', 'Barpathar', 'Barpeta', 'Barpeta Road',
    'Basugaon', 'Bihpuria', 'Bijni','Bilasipara',' Biswanath Chariali', 'Bohori', 'Bokajan', 'Bongaigaon','Bongaigaon Petro-chemical Town','Borgolai','Chabua',
    
    
    // Chandrapur Bagicha
    // Chapar
    // Chekonidhara
    // Choto Haibor
    // Dergaon
    // Dharapur
    // Dhekiajuli
    // Dhemaji
    // Dhing
    // Dhubri
    // Dhuburi
    // Dibrugarh
    // Digboi
    // Digboi Oil Town
    // Dimaruguri
    // Diphu
    // Dispur
    // Doboka
    // Dokmoka
    // Donkamokan
    // Duliagaon
    // Duliajan
    // Duliajan No.1
    // Dum Duma
    // Durga Nagar
    // Gauripur
    // Goalpara
    // Gohpur
    // Golaghat
    // Golakganj
    // Gossaigaon
    // Guwahati
    // Haflong
    // Hailakandi
    // Hamren
    // Hauli
    // Hauraghat
    // Hojai
    // Jagiroad
    // Jagiroad Paper Mill
    // Jogighopa
    // Jonai Bazar
    // Jorhat
    // Kampur Town
    // Kamrup
    // Kanakpur
    // Karimganj
    // Kharijapikon
    // Kharupetia
    // Kochpara
    // Kokrajhar
    // Kumar Kaibarta Gaon
    // Lakhimpur
    // Lakhipur
    // Lala
    // Lanka
    // Lido Tikok
    // Lido Town
    // Lumding
    // Lumding Railway Colony
    // Mahur
    // Maibong
    // Majgaon
    // Makum
    // Mangaldai
    // Mankachar
    // Margherita
    // Mariani
    // Marigaon
    // Moran
    // Moranhat
    // Nagaon
    // Naharkatia
    // Nalbari
    // Namrup
    // Naubaisa Gaon
    // Nazira
    // New Bongaigaon Railway Colony
    // Niz-Hajo
    // North Guwahati
    // Numaligarh
    // Palasbari
    // Panchgram
    // Pathsala
    // Raha
    // Rangapara
    // Rangia
    // Salakati
    // Sapatgram
    // Sarthebari
    // Sarupathar
    // Sarupathar Bengali
    // Senchoagaon
    // Sibsagar
    // Silapathar
    // Silchar
    // Silchar Part-X
    // Sonari
    // Sorbhog
    // Sualkuchi
    // Tangla
    // Tezpur
    // Tihu
    // Tinsukia
    // Titabor
    // Udalguri
    // Umrangso
    // Uttar Krishnapur Part-I
  ]
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sampleform = this.fb.group({
      city:['',Validators.required],
      dis:['',Validators.required],
      state:['',Validators.required]

    });
    }
submit(){

}
}
