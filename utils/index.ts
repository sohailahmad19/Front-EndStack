import { CarProps, SearchParamsProps } from "@/types";

const headers = {
    'X-RapidAPI-Key': '0472b42992msh107559997a563c1p15ce2cjsnb3684d61c0c5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
}

export async function fetchCars(searchParams:SearchParamsProps) {
    const { manufacturer, year, model, limit, fuel } = searchParams;
    console.log(fuel)

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

    const respone  =await fetch(url, {
        headers:headers,
        method:"Get",
    })

    const result =await respone.json()
    return result

}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer',  'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  }

  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  
